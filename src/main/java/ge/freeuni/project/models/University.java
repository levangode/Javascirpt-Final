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
    private Long universityNumber;
    private String name;
    private String address;
    private String phone;
    private String webAddress;
    private String email;
    private Set<Faculty> facultyList;
    private Set<UniversityNews> universityNews;
    private String about;

    public University() {
        facultyList = new HashSet<>();
        universityNews = new HashSet<>();
    }

    public University(Long universityNumber, String name, String address, String phone, String webAddress, String email, Set<UniversityNews> universityNews, String about) {
        this.universityNumber = universityNumber;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.webAddress = webAddress;
        this.email = email;
        this.universityNews = universityNews;
        this.about = about;
        facultyList = new HashSet<>();
    }

    public University(Long universityNumber, String name, String address, String phone, String webAddress, String email, Set<Faculty> facultyList, Set<UniversityNews> universityNews, String about) {
        this.universityNumber = universityNumber;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.webAddress = webAddress;
        this.email = email;
        this.facultyList = facultyList;
        this.universityNews = universityNews;
        this.about = about;
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

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = {@JoinColumn(name = "university_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "news_id", referencedColumnName = "id")})
    public Set<UniversityNews> getUniversityNews() {
        return universityNews;
    }

    public void setUniversityNews(Set<UniversityNews> universityNews) {
        this.universityNews = universityNews;
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

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public Long getUniversityNumber() {
        return universityNumber;
    }

    public void setUniversityNumber(Long universityNumber) {
        this.universityNumber = universityNumber;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void addFaculty(Faculty faculty) {
        this.facultyList.add(faculty);
    }

    public void addNews(UniversityNews news) {
        this.universityNews.add(news);
    }
}
