package ge.freeuni.project.models;


import lombok.*;


public class MesGovGeNewsPost {

    private String newsTitle;
    private String newsTitleRef;
    private String newsDate;
    private String newsText;
    private String newsImgSrc;

    public MesGovGeNewsPost() {
    }

    public MesGovGeNewsPost(String newsTitle, String newsTitleRef, String newsDate, String newsText, String newsImgSrc) {
        this.newsTitle = newsTitle;
        this.newsTitleRef = newsTitleRef;
        this.newsDate = newsDate;
        this.newsText = newsText;
        this.newsImgSrc = newsImgSrc;
    }

    public String getNewsTitle() {
        return newsTitle;
    }

    public void setNewsTitle(String newsTitle) {
        this.newsTitle = newsTitle;
    }

    public String getNewsTitleRef() {
        return newsTitleRef;
    }

    public void setNewsTitleRef(String newsTitleRef) {
        this.newsTitleRef = newsTitleRef;
    }

    public String getNewsDate() {
        return newsDate;
    }

    public void setNewsDate(String newsDate) {
        this.newsDate = newsDate;
    }

    public String getNewsText() {
        return newsText;
    }

    public void setNewsText(String newsText) {
        this.newsText = newsText;
    }

    public String getNewsImgSrc() {
        return newsImgSrc;
    }

    public void setNewsImgSrc(String newsImgSrc) {
        this.newsImgSrc = newsImgSrc;
    }
}
