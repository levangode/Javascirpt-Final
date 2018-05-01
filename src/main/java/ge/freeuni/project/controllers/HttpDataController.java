package ge.freeuni.project.controllers;

import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static org.springframework.http.MediaType.TEXT_HTML;


@Controller
public class HttpDataController extends WebMvcAutoConfiguration {

    @RequestMapping(value = "/mes-gov-ge", method = RequestMethod.GET)
    public ResponseEntity<String> getContent(HttpServletResponse response){
        try {
            List<String> command = new ArrayList<>();
            command.add("wget");
            command.add("-p");
            command.add("-k");
            command.add("-nH");
            command.add("\"http://mes.gov.ge/content.php?id=75&lang=geo\"");
            command.add("--directory-prefix");
            command.add("\"src/main/resources/public\"");
            ProcessBuilder builder = new ProcessBuilder(command);
            builder.directory(new File("."));
            final Process process = builder.start();
            try {
                process.waitFor();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            InputStream is = process.getInputStream();
            InputStreamReader isr = new InputStreamReader(is);
            BufferedReader br = new BufferedReader(isr);
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
            System.out.println("Program terminated!");
        } catch (IOException e) {
            e.printStackTrace();
        }
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(TEXT_HTML);
        String body = getFile("public/content.php?id=75&lang=geo");
        return new ResponseEntity<String>( body, responseHeaders, HttpStatus.OK);
    }

    private String getFile(String fileName) {

        String text = new Scanner(getClass().getClassLoader().getResourceAsStream(fileName), "UTF-8").useDelimiter("\\A").next();
        return text;
    }



}
