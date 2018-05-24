package ge.freeuni.project.models;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@ToString
@EqualsAndHashCode
public class University {

    private Long id;
    @Column(unique = true)
    private String name;
    private String address;
    private String phone;
    private String webAddress;
    private String email;
    private Set<Faculty> facultyList;
    private String about;

    public University() {
    }

    public University(String name, String address, String phone, String webAddress, String email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.webAddress = webAddress;
        this.email = email;
        facultyList = new HashSet<>();
    }

    public University(String name, String address, String phone, String webAddress, String email, Set<Faculty> facultyList) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.webAddress = webAddress;
        this.email = email;
        this.facultyList = facultyList;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = {@JoinColumn(name = "university_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "faculty_id", referencedColumnName = "id")})
    public Set<Faculty> getFacultyList() {
        return facultyList;
    }

    public void setFacultyList(Set<Faculty> facultyList) {
        this.facultyList = facultyList;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWebAddress() {
        return webAddress;
    }

    public void setWebAddress(String webAddress) {
        this.webAddress = webAddress;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
