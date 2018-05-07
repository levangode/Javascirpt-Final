package ge.freeuni.project.schedulers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.scheduling.annotation.Async;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;

@Component
@EnableScheduling
public class ResourceDownloader {

    private static final Logger log = LoggerFactory.getLogger(ResourceDownloader.class);

    @Async
    @Scheduled(fixedDelay = 600000)
    public void MesGovGeDownloader() {
        try {
            List<String> command = new ArrayList<>();
            command.add("wget");
            command.add("-p");
            command.add("-k");
            command.add("-nH");
            command.add("--directory-prefix=front-angular/src/assets");
            command.add("http://mes.gov.ge/content.php?id=75&lang=geo");
            ProcessBuilder builder = new ProcessBuilder(command);
            builder.directory(new File(System.getProperty("user.dir")));
            final Process process = builder.start();
            try {
                process.waitFor(10000, TimeUnit.MILLISECONDS);
                //sayDone();
            } catch (InterruptedException e) {
                log.error("sleep interrupted");
            }
            InputStream is = process.getErrorStream();
            InputStreamReader isr = new InputStreamReader(is);
            BufferedReader br = new BufferedReader(isr);
            String line;
            while ((line = br.readLine()) != null) {
                //System.out.println(line);
            }
            System.out.println("Program terminated!");
        } catch (IOException e) {
            log.error("wget failed", e);
        }
    }


    public void sayDone()
            throws IOException {
        String str = "Hello";
        BufferedWriter writer = new BufferedWriter(new FileWriter("src/main/resources/notifier/notify.txt"));
        writer.write(str);

        writer.close();
    }
}
