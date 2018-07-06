package ge.freeuni.project.models;


import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class UniversityFaculty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinTable(name = "FAC_SUBJ")
    @JoinColumn(name = "id")
    private Set<FacultySubject> facultySubjects;
    private String priorities;

    public UniversityFaculty() {
        facultySubjects = new HashSet<>();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getFacultyNumber() {
        return facultyNumber;
    }

    public void setFacultyNumber(Long facultyNumber) {
        this.facultyNumber = facultyNumber;
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

    public String getPriorities() {
        return priorities;
    }

    public void setPriorities(String priorities) {
        this.priorities = priorities;
    }

    public Set<FacultySubject> getFacultySubjects() {
        return facultySubjects;
    }

    public void setFacultySubjects(Set<FacultySubject> facultySubjects) {
        this.facultySubjects = facultySubjects;
    }

    @Override
    public String toString() {
        return "UniversityFaculty{" +
                "id=" + id +
                ", facultyNumber=" + facultyNumber +
                ", programName='" + programName + '\'' +
                ", qualification='" + qualification + '\'' +
                ", accredited='" + accredited + '\'' +
                ", language='" + language + '\'' +
                ", financing='" + financing + '\'' +
                ", credits=" + credits +
                ", annualFee=" + annualFee +
                ", numPlaces=" + numPlaces +
                ", facultySubjects=" + facultySubjects +
                ", priorities='" + priorities + '\'' +
                '}';
    }
}
