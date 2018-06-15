package ge.freeuni.project.models;


import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@ToString
@EqualsAndHashCode
public class User {
    private Long id;
    private String fbId;
    private String fbImage;
    private String email;
    private String name;
    private Set<UserInterest> interestList;
    private Set<University> favouriteUniversities;



    public User() {
    }

    public User(String name) {
        this.name = name;
        interestList = new HashSet<>();
    }

    public User(String name, Set<UserInterest> interestList) {
        this.name = name;
        this.interestList = interestList;
    }

    public User(String fbId, String fbImage, String email, String name) {
        this.fbId = fbId;
        this.fbImage = fbImage;
        this.email = email;
        this.name = name;
        interestList = new HashSet<>();
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "interest_id", referencedColumnName = "id")})
    public Set<UserInterest> getInterestList() {
        return interestList;
    }


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "USER_FAV_UNI")
    @JoinColumn(name = "id")
    public Set<University> getFavouriteUniversities() {
        return favouriteUniversities;
    }

    public void setFavouriteUniversities(Set<University> favouriteUniversities) {
        this.favouriteUniversities = favouriteUniversities;
    }

    public void addFavourite(University university){
        this.favouriteUniversities.add(university);
    }

    public void removeFavourite(University university){
        this.favouriteUniversities.remove(university);
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setInterestList(Set<UserInterest> interestList) {
        this.interestList = interestList;
    }

    public void addInterest(UserInterest interest){
        this.interestList.add(interest);
    }

    public String getFbId() {
        return fbId;
    }

    public void setFbId(String fbId) {
        this.fbId = fbId;
    }

    public String getFbImage() {
        return fbImage;
    }

    public void setFbImage(String fbImage) {
        this.fbImage = fbImage;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
