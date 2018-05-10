package ge.freeuni.project.models.users;


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
