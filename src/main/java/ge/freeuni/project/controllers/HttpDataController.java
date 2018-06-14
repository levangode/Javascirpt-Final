package ge.freeuni.project.controllers;

import ge.freeuni.project.models.MesGovGeNewsPost;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.web.servlet.WebMvcAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.*;


@Controller
public class HttpDataController extends WebMvcAutoConfiguration {

    private static final Logger log = LoggerFactory.getLogger(HttpDataController.class);

    @RequestMapping(value = "/mes-gov-ge", method = RequestMethod.GET)
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    @ResponseBody
    public List<MesGovGeNewsPost> getContent(HttpServletResponse response) {
        List<MesGovGeNewsPost> newsItems = new ArrayList<>();
        try {
            String body = usingBufferedReader(System.getProperty("user.dir") + "/front-angular/src/assets/content.php_id=75&lang=geo");
            Document doc = Jsoup.parse(body);
            Elements posts = doc.getElementsByClass("news");

            for (Element element : posts) {
                String newsImgSrc = element.getElementsByClass("img-center").attr("src");
                String newsTitleText = element.getElementsByClass("news-title").first().getElementsByTag("a").first().text();
                String newsTitleRef = element.getElementsByClass("news-title").first().getElementsByTag("a").first().attr("href");
                String newsDate = element.getElementsByClass("news-date").first().text();
                String newsText = element.getElementsByClass("news-text").first().html();
                newsItems.add(new MesGovGeNewsPost(newsTitleText, newsTitleRef, newsDate, newsText, newsImgSrc));
            }
        } catch (Exception e) {
            log.error("Couldn't parse html", e);
        }

        return newsItems;
    }


    private String usingBufferedReader(String filePath) {
        StringBuilder contentBuilder = new StringBuilder();
        try (BufferedReader br = new BufferedReader(new FileReader(filePath))) {

            String sCurrentLine;
            while ((sCurrentLine = br.readLine()) != null) {
                contentBuilder.append(sCurrentLine).append("\n");
            }
        } catch (IOException e) {
            log.error("Couldn't read file:"+filePath, e);
        }
        return contentBuilder.toString();
    }
}
