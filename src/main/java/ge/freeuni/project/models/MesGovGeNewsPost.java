package ge.freeuni.project.models;


import lombok.*;


@NoArgsConstructor
@ToString
@Getter
@Setter
public class MesGovGeNewsPost {

    private String newsTitle;
    private String newsTitleRef;
    private String newsDate;
    private String newsText;
    private String newsImgSrc;


    public MesGovGeNewsPost(String newsTitleText, String newsTitleRef, String newsDate, String newsText, String newsImgSrc) {
        this.newsTitle = newsTitleText;
        this.newsTitleRef = newsTitleRef;
        this.newsDate = newsDate;
        this.newsText = newsText;
        this.newsImgSrc = newsImgSrc;
    }

    public String getNewsTitle() {
        return newsTitle;
    }

    public String getNewsDate() {
        return newsDate;
    }

    public String getNewsTitleRef() {
        return newsTitleRef;
    }

    public void setNewsTitleRef(String newsTitleRef) {
        this.newsTitleRef = newsTitleRef;
    }

    public void setNewsDate(String newsDate) {

        this.newsDate = newsDate;
    }

    public void setNewsTitle(String newsTitle) {

        this.newsTitle = newsTitle;
    }

    public void setNewsImgSrc(String newsImgSrc) {
        this.newsImgSrc = newsImgSrc;
    }

    public void setNewsText(String newsText) {
        this.newsText = newsText;
    }

    public String getNewsImgSrc() {

        return newsImgSrc;
    }

    public String getNewsText() {

        return newsText;
    }
}
