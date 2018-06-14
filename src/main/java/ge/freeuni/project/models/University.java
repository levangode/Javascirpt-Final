package ge.freeuni.project.models;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


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
    private String logo;
    private String email;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_FACULTY")
    @JoinColumn(name = "id")
    private List<UniversityFaculty> universityFaculties;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_NEWS")
    @JoinColumn(name = "id")
    private List<UniversityNews> universityNews;
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_EVENTS")
    @JoinColumn(name = "id")
    private List<UniversityEvent> universityEvents;
    private String about;

    private String username;
    private String password;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_FAQ")
    @JoinColumn(name = "id")
    private List<FaqElement> universityFaq;

    public University() {
        universityFaculties = new ArrayList<>();
        universityNews = new ArrayList<>();
        universityEvents = new ArrayList<>();
        universityFaq = new ArrayList<>();
    }

    public List<FaqElement> getUniversityFaq() { return universityFaq; }
    public void addFaqElement(FaqElement faqElement) {
        this.universityFaq.add(faqElement);
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUsername(String username) {
        this.username = username;
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

    public List<UniversityFaculty> getUniversityFaculties() {
        return universityFaculties;
    }

    public void setUniversityFaculties(List<UniversityFaculty> universityFaculties) {
        this.universityFaculties = universityFaculties;
    }

    public List<UniversityNews> getUniversityNews() {
        return universityNews;
    }

    public void setUniversityNews(List<UniversityNews> universityNews) {
        this.universityNews = universityNews;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public List<UniversityEvent> getUniversityEvents() {
        return universityEvents;
    }

    public void setUniversityEvents(List<UniversityEvent> universityEvents) {
        this.universityEvents = universityEvents;
    }
    public void addNews(UniversityNews news){
        this.universityNews.add(news);
    }

    public void addFaculty(UniversityFaculty faculty){
        this.universityFaculties.add(faculty);
    }

    public void addEvent(UniversityEvent event){
        this.universityEvents.add(event);
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }
}
