package ge.freeuni.project.models;


import lombok.*;

@Getter @Setter
@ToString
@NoArgsConstructor @AllArgsConstructor
public class UserData {
    private String id;
    private String name;
    private String email;
    private String token;
    private String image;
    private String provider;


}
