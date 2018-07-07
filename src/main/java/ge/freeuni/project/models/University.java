package ge.freeuni.project.models;

import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
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
    private Long numPlaces;

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

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_REVIEWS")
    @JoinColumn(name = "id")
    private List<UniversityReview> universityReviews;
    @Lob
    private String about;



    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "UNI_FAQ")
    @JoinColumn(name = "id")
    private List<FaqElement> universityFaq;

    public University() {
        universityFaculties = new ArrayList<>();
        universityNews = new ArrayList<>();
        universityEvents = new ArrayList<>();
        universityFaq = new ArrayList<>();
        universityReviews = new ArrayList<>();
    }

    public Long getNumPlaces() {
        return universityFaculties.stream().mapToLong(UniversityFaculty::getNumPlaces).sum();
    }

    public void setNumPlaces(Long numPlaces) {
        this.numPlaces = numPlaces;
    }

    public List<FaqElement> getUniversityFaq() { return universityFaq; }
    public void addFaqElement(FaqElement faqElement) {
        this.universityFaq.add(faqElement);
    }


    public List<UniversityReview> getUniversityReviews() {
        return universityReviews;
    }

    public void setUniversityReviews(List<UniversityReview> universityReviews) {
        this.universityReviews = universityReviews;
    }

    public void setUniversityFaq(List<FaqElement> universityFaq) {
        this.universityFaq = universityFaq;
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

    public void addReview(UniversityReview review){
        this.universityReviews.add(review);
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    @Override
    public String toString() {
        return "University{" +
                "id=" + id +
                ", universityNumber=" + universityNumber +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", phone='" + phone + '\'' +
                ", webAddress='" + webAddress + '\'' +
                ", logo='" + logo + '\'' +
                ", email='" + email + '\'' +
                ", universityFaculties=" + universityFaculties +
                ", universityNews=" + universityNews +
                ", universityEvents=" + universityEvents +
                ", universityReviews=" + universityReviews +
                ", about='" + about + '\'' +
                ", universityFaq=" + universityFaq +
                '}';
    }
}
