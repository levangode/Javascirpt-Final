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
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private Long universityNumber;
    private String name;
    private String address;
    private String phone;
    private String webAddress;
    private String email;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_FACULTY")
    @JoinColumn(name = "id")
    private Set<UniversityFaculty> universityFaculties;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_NEWS")
    @JoinColumn(name = "id")
    private Set<UniversityNews> universityNews;
    private String about;

    public University() {
        universityFaculties = new HashSet<>();
        universityNews = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUniversityNumber() {
        return universityNumber;
    }

    public void setUniversityNumber(Long universityNumber) {
        this.universityNumber = universityNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Set<UniversityFaculty> getUniversityFaculties() {
        return universityFaculties;
    }

    public void setUniversityFaculties(Set<UniversityFaculty> universityFaculties) {
        this.universityFaculties = universityFaculties;
    }

    public Set<UniversityNews> getUniversityNews() {
        return universityNews;
    }

    public void setUniversityNews(Set<UniversityNews> universityNews) {
        this.universityNews = universityNews;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public void addNews(UniversityNews news){
        this.universityNews.add(news);
    }
    public void addFaculty(UniversityFaculty faculty){
        this.universityFaculties.add(faculty);
    }
}
