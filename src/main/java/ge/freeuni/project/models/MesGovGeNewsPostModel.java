package ge.freeuni.project.models;


import lombok.*;


@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Setter
public class MesGovGeNewsPostModel {

    private String postTitle;
    private String postDescription;
    private String postDate;
    private String postImg;
}
