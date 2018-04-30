package ge.freeuni.project.controllers;

import org.apache.commons.httpclient.*;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.params.HttpMethodParams;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@Controller
public class HttpDataController {

    @GetMapping("/mes-gov-ge")
    public String getContent(HttpServletResponse response){
//        Runtime rt = Runtime.getRuntime();
//        try {
//            Process pr = rt.exec("wget -p -k 'http://mes.gov.ge/content.php?id=75&lang=geo' --directory-prefix 'src/main/resources/static'");
//            pr.waitFor();
//            System.out.println("Page downloaded");
//        } catch (IOException e) {
//            e.printStackTrace();
//        } catch (InterruptedException e) {
//            e.printStackTrace();
//        }

        response.setHeader("Content-Type","text/html");
        return "index";



    }
}
