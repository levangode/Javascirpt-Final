package ge.freeuni.project;

import ge.freeuni.project.domain.InterestRepository;
import ge.freeuni.project.domain.UniversityRepository;
import ge.freeuni.project.domain.UserRepository;
import ge.freeuni.project.models.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.util.*;

@SpringBootApplication
public class ProjectApplication implements CommandLineRunner {

    @Autowired
    private InterestRepository interestRepository;

    @Autowired
    private UniversityRepository universityRepository;

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(ProjectApplication.class, args);
    }


    @Override
    @Transactional()
    public void run(String... args) throws Exception {
        interestRepository.save(new UserInterest("ბიოლოგია"));
        interestRepository.save(new UserInterest("ქიმია"));
        interestRepository.save(new UserInterest("ფიზიკა"));
        interestRepository.save(new UserInterest("სოციოლოგია"));
        interestRepository.save(new UserInterest("ფსიქოლოგია"));
        interestRepository.save(new UserInterest("ისტორია"));
        interestRepository.save(new UserInterest("კულტურა"));
        interestRepository.save(new UserInterest("ბიზნესი"));
        interestRepository.save(new UserInterest("მენეჯმენტი"));

        University uni = new University();
        uni.setAbout("იყო და არა იყო რა <br> ღვთის უკეთესი რა იქნებოდა, იყო ერთ მელა");
        uni.setAddress("აღმაშენებლის ხეივანი #13");
        uni.setEmail("lgode@freeuni.edu.ge");
        uni.setName("თბილისის თავისუფალი უნივერსიტეტი");
        uni.setPhone("593252073");
        uni.setWebAddress("http://freeuni.edu.ge");

        Set<FacultySubject> facultySubjects = new HashSet<>();
        facultySubjects.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        facultySubjects.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        UniversityFaculty faculty = new UniversityFaculty();
        faculty.setAccredited("აკრედიტებული");
        faculty.setAnnualFee(2250L);
        faculty.setCredits(240);
        faculty.setFacultyNumber(12132333L);
        faculty.setFinancing("დაფინანსებული");
        faculty.setLanguage("ქართული");
        faculty.setNumPlaces(300L);
        faculty.setProgramName("კომპიუტერული მეცნიერებები და მათემატიკა");
        faculty.setQualification("კომპიუტინგის ბაკალავრი");
        faculty.setFacultySubjects(facultySubjects);
        uni.addFaculty(faculty);

        UniversityNews news = new UniversityNews();
        news.setDate(new Date());
        news.setDescription("სიახლის აღწერილობა");
        news.setTitle("პირველი სიახლე");
        news.setImg("https://i.ytimg.com/vi/HcZhSsj_8ds/maxresdefault.jpg");
        uni.addNews(news);

        universityRepository.save(uni);
    }
}
