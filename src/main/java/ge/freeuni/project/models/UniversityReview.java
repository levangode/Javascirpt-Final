package ge.freeuni.project.models;

import javax.persistence.*;

@Entity
public class UniversityReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    private String review;


    public UniversityReview() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }


    @Override
    public String toString() {
        return "UniversityReview{" +
                "id=" + id +
                ", review='" + review + '\'' +
                '}';
    }
}
