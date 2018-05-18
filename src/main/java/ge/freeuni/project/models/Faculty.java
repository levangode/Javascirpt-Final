package ge.freeuni.project.models;


import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@ToString
@EqualsAndHashCode
public class Faculty {

    private Long id;
    private String program;
    private String qualification;
    private Boolean acredited;
    private String language;
    private Boolean financing;
    private Integer credits;
    private Long annualFee;
    private Long numPlaces;
    private Set<University> universities;

    public Faculty() {
    }


    public Faculty(String program, String qualification, Boolean acredited, String language, Boolean financing, Integer credits, Long annualFee, Long numPlaces) {
        this.program = program;
        this.qualification = qualification;
        this.acredited = acredited;
        this.language = language;
        this.financing = financing;
        this.credits = credits;
        this.annualFee = annualFee;
        this.numPlaces = numPlaces;
        universities = new HashSet<>();
    }

    public Faculty(String program, String qualification, Boolean acredited, String language, Boolean financing, Integer credits, Long annualFee, Long numPlaces, Set<University> universities) {
        this.program = program;
        this.qualification = qualification;
        this.acredited = acredited;
        this.language = language;
        this.financing = financing;
        this.credits = credits;
        this.annualFee = annualFee;
        this.numPlaces = numPlaces;
        this.universities = universities;
    }

    public String getProgram() {
        return program;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public Boolean getAcredited() {
        return acredited;
    }

    public void setAcredited(Boolean acredited) {
        this.acredited = acredited;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Boolean getFinancing() {
        return financing;
    }

    public void setFinancing(Boolean financing) {
        this.financing = financing;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }

    public Long getAnnualFee() {
        return annualFee;
    }

    public void setAnnualFee(Long annualFee) {
        this.annualFee = annualFee;
    }

    public Long getNumPlaces() {
        return numPlaces;
    }

    public void setNumPlaces(Long numPlaces) {
        this.numPlaces = numPlaces;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(joinColumns = {@JoinColumn(name = "faculty_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "university_id", referencedColumnName = "id")})
    public Set<University> getUniversities() {
        return universities;
    }

    public void setUniversities(Set<University> universities) {
        this.universities = universities;
    }
}
