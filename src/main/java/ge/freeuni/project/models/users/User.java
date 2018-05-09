package ge.freeuni.project.models.users;


import ge.freeuni.project.models.interest.UserInterest;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@ToString
@EqualsAndHashCode
public class User {
    private Long id;
    private String name;
    private Set<UserInterest> interestList;

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
}
