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
    private Long facultyNumber;
    private String programName;
    private String qualification;
    private String accredited;
    private String language;
    private String financing;
    private Integer credits;
    private Long annualFee;
    private Long numPlaces;
    /** Json object: name, quotient, places-quota, barrier, restriction */
    private String subjects;
    private String priorities;
    private Set<University> universities;

    public Faculty() {
    }


    public Faculty(Long facultyNumber, String programName, String qualification, String accredited, String language, String financing, Integer credits, Long annualFee, Long numPlaces) {
        this.facultyNumber = facultyNumber;
        this.programName = programName;
        this.qualification = qualification;
        this.accredited = accredited;
        this.language = language;
        this.financing = financing;
        this.credits = credits;
        this.annualFee = annualFee;
        this.numPlaces = numPlaces;
        universities = new HashSet<>();
    }

    public Faculty(Long facultyNumber, String programName, String qualification, String accredited, String language, String financing, Integer credits, Long annualFee, Long numPlaces, Set<University> universities) {
        this.facultyNumber = facultyNumber;
        this.programName = programName;
        this.qualification = qualification;
        this.accredited = accredited;
        this.language = language;
        this.financing = financing;
        this.credits = credits;
        this.annualFee = annualFee;
        this.numPlaces = numPlaces;
        this.universities = universities;
    }

    public String getProgramName() {
        return programName;
    }

    public void setProgramName(String programName) {
        this.programName = programName;
    }

    public String getQualification() {
        return qualification;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }

    public String getAccredited() {
        return accredited;
    }

    public void setAccredited(String accredited) {
        this.accredited = accredited;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getFinancing() {
        return financing;
    }

    public void setFinancing(String financing) {
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

    public Long getFacultyNumber() {
        return facultyNumber;
    }

    public void setFacultyNumber(Long facultyNumber) {
        this.facultyNumber = facultyNumber;
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
