package ge.freeuni.project.controllers;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.MediaType.TEXT_HTML_VALUE;


@Controller
public class HttpDataController  {

    @RequestMapping(value = "/mes-gov-ge", method = RequestMethod.GET, produces = "text/plain")
    public String getContent(HttpServletResponse response){
//        Runtime rt = Runtime.getRuntime();
//        try {
//            Process pr = rt.exec("wget -p -k \"http://mes.gov.ge/content.php?id=75&lang=geo\" --directory-prefix \"src/main/resources/static\"");
//            pr.waitFor();
//            System.out.println("Page downloaded");
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

        return "mes.gov.ge/content.php@id=75&lang=geo";
    }
}
