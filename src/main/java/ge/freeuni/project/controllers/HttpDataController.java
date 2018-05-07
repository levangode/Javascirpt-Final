package ge.freeuni.project.controllers;

import ge.freeuni.project.models.MesGovGeNewsPostModel;
import ge.freeuni.project.schedulers.ResourceDownloader;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;

import static org.springframework.http.MediaType.TEXT_HTML;


@Controller
public class HttpDataController extends WebMvcAutoConfiguration {

    @RequestMapping(value = "/mes-gov-ge", method = RequestMethod.GET)
    @CrossOrigin(origins = "https://localhost:4200")
    @ResponseBody
    public List<MesGovGeNewsPostModel> getContent(HttpServletResponse response){


        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.setContentType(TEXT_HTML);
        String body = usingBufferedReader(System.getProperty("user.dir")+"/front-angular/src/assets/content.php?id=75&lang=geo");
        Document doc = Jsoup.parse(body);
        Elements posts = doc.getElementsByClass("news");
        List<MesGovGeNewsPostModel> newsItems = new ArrayList<>();
        for(Element element: posts){
            String newsImgSrc = element.getElementsByClass( "img-center").attr("src");
            String newsTitleText = element.getElementsByClass("news-title").first().getElementsByTag("a").first().text();
            String newsTitleRef = element.getElementsByClass("news-title").first().getElementsByTag("a").first().attr("href");
            String newsDate = element.getElementsByClass("news-date").first().text();
            String newsText = element.getElementsByClass("news-text").first().html();
            newsItems.add(new MesGovGeNewsPostModel(newsTitleText, newsTitleRef, newsDate, newsText, newsImgSrc));
        }

        return newsItems;
    }


    private String usingBufferedReader(String filePath)
    {
        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath)))
        {

            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null)
            {
                contentBuilder.append(sCurrentLine).append("\n");
            }
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        return contentBuilder.toString();
    }

    @RequestMapping(value = "/test", method = RequestMethod.GET)
    @CrossOrigin(origins = "https://localhost:4200")
    @ResponseBody
    public ArrayList<MesGovGeNewsPostModel> getItems(){


        ArrayList<MesGovGeNewsPostModel> res = new ArrayList<>();

        return res;
    }


}
