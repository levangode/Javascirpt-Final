package ge.freeuni.project.schedulers;


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

    @Async
    @Scheduled(cron = "0 0 */1 * * *")
    public void MesGovGeDownloader(){
        try {
            List<String> command = new ArrayList<>();
            command.add("wget");
            command.add("-p");
            command.add("-k");
            command.add("-nH");
            command.add("--directory-prefix=src/main/resources/public");
            command.add("http://mes.gov.ge/content.php?id=75&lang=geo");
            ProcessBuilder builder = new ProcessBuilder(command);
            builder.directory(new File(System.getProperty("user.dir")));
            final Process process = builder.start();
            try {
                process.waitFor(10000, TimeUnit.MILLISECONDS);
                sayDone();
            } catch (InterruptedException e) {
                e.printStackTrace();
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
            e.printStackTrace();
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
