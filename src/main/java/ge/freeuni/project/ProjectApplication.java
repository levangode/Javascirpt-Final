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
        uni.setLogo("https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/FreeUniLogo.png/220px-FreeUniLogo.png");

        UniversityFaculty faculty = new UniversityFaculty();
        Set<FacultySubject> facultySubjects = new HashSet<>();
        facultySubjects.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        facultySubjects.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
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

        UniversityFaculty faculty1 = new UniversityFaculty();
        Set<FacultySubject> facultySubjects1 = new HashSet<>();
        facultySubjects1.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        facultySubjects1.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        facultySubjects1.add(new FacultySubject("მათემატიკა", "6", "45", "40%+1", ""));
        facultySubjects1.add(new FacultySubject("გეოგრაფია", "1", "10", "40%+1", ""));
        faculty1.setAccredited("აკრედიტებული");
        faculty1.setAnnualFee(2250L);
        faculty1.setCredits(240);
        faculty1.setFacultyNumber(1121313L);
        faculty1.setFinancing("დაფინანსებული");
        faculty1.setLanguage("ქართული");
        faculty1.setNumPlaces(250L);
        faculty1.setProgramName("მართვა და საზოგადოებრივი მეცნიერებები");
        faculty1.setQualification("სოციოლოგიის ბაკალავრი");
        faculty1.setFacultySubjects(facultySubjects1);
        uni.addFaculty(faculty1);

        UniversityNews news = new UniversityNews();
        news.setDate(new Date());
        news.setDescription("სიახლის აღწერილობა");
        news.setTitle("პირველი სიახლე");
        news.setImg("https://i.ytimg.com/vi/HcZhSsj_8ds/maxresdefault.jpg");
        uni.addNews(news);

        UniversityEvent event = new UniversityEvent();
        event.setAddress("კახა ბენდუქიძის კამპუსი");
        event.setDate(new Date());
        event.setTitle("გაცნობითი პროგრამები");
        event.setDescription("გაცნობით პროგრამაზე აბიტურიენტებს და მოსწავლეებს საშუალება ექნებათ, დაათვალიერონ უნივერსიტეტი," +
                "გაიგონ მეტი სასურველი სასწავლო პროგრამების შესახებ.");
        event.setImg("http://www.freeuni.edu.ge/sites/default/files/Gacnobiti.png");
        event.setLink("https://google.com");
        uni.addEvent(event);

        universityRepository.save(uni);
    }
}
