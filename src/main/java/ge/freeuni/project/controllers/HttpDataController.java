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
import java.util.concurrent.TimeUnit;

import static org.springframework.http.MediaType.TEXT_HTML;


@Controller
public class HttpDataController extends WebMvcAutoConfiguration {

    @RequestMapping(value = "/mes-gov-ge", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<String> getContent(HttpServletResponse response){

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
