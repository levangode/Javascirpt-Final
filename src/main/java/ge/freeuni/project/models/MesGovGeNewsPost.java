package ge.freeuni.project.models;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class MesGovGeNewsPost {

    private String newsTitle;
    private String newsTitleRef;
    private String newsDate;
    private String newsText;
    private String newsImgSrc;

}
