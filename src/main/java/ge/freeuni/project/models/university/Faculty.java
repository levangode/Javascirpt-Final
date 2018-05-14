package ge.freeuni.project.models.university;


import javax.persistence.Entity;

@Entity
public class Faculty {
    private String program;
    private String qualification;
    private Boolean acredited;
    private String language;
    private Boolean financing;
    private Integer credits;
    private Long annualFee;
    private Long numPlaces;


    public Faculty() {
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
}
