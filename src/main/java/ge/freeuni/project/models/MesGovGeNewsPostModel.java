package ge.freeuni.project.models;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class MesGovGeNewsPostModel {

    private String newsTitle;
    private String newsTitleRef;
    private String newsDate;
    private String newsText;
    private String newsImgSrc;

}
