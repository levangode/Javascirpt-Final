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
        String freeuniAbout = "თავისუფალი უნივერსიტეტი - უპირობო ლიდერი ქართულ საგანმანათლებლო სივრცეში.";
        System.out.print(freeuniAbout.length());
        //uni.setAbout("იყო და არა იყო რა <br> ღვთ1ის უკეთესი რა იქნებოდა, იყო ერთ მელა");
        uni.setAbout(freeuniAbout);
        uni.setAddress("აღმაშენებლის ხეივანი #13");
        uni.setEmail("lgode@freeuni.edu.ge");
        uni.setName("თბილისის თავისუფალი უნივერსიტეტი");
        uni.setPhone("593252073");
        uni.setWebAddress("http://freeuni.edu.ge");
        uni.setLogo("https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/FreeUniLogo.png/220px-FreeUniLogo.png");

        //add FAQ for university
        String question1 = "1. მომიწევს თუ არა რაიმე დამატებითი თანხის გადახდა გამოცდის გადაბარებისთვის?";
        String answer1 = "არა, გამოცდის გადაბარებისთვის არ მოგიწევს რაიმე დამატებითი თანხის გადახდა. ";
        String question2 = "2. მას შემდეგ, რაც ვისარგებლებ გარდამავალი დაფინანსებით, რა ვალდებულება მექნება ცოდნის ფონდთან?";
        String answer2 = "ვალდებული იქნები, სწავლის დასრულების შემდეგ დააბრუნო იმავე ოდენობის თანხა, რისი გადახდაც გარდამავალი დაფინანსების გარეშე მოგიწევდა.";
        String question3 = "3. თუკი ვისარგებლებ თავისუფალი უნივერსიტეტის თანადაფინანსების სისტემით, ანუ მივიღებ 9 000 ლარიან სასწავლო გრანტს, მომიწევს ამ თანხის უკან დაბრუნება როდესმე? ";
        String answer3 = "არ მოგიწევს. ბაკალავრიატზე სწავლისას, 4 წლის განმავლობაში მოცემული 9 000 ლარი ცოდნის ფონდის საჩუქარია და არა ვალი.";
        String question4 = "4. გაქვთ თუ არა მოსამზადებელი პროგრამები არაქართულენოვანთათვის?";
        String answer4 = "თავისუფალ უნივერსიტეტს მოსამზადებელი პროგრამები არაქართულენოვანთათვის არ აქვს. ";
        String question5 = "5. მომიწევს თუ არა რაიმე სახის ქონების ჩადება ბანკში ცოდნის ფონდის გარდამავალი დაფინანასების აღებისას?";
        String answer5 = "არა. არანაირი ქონების ჩადება არ მოგიწევს";
        FaqElement faqElement1 = new FaqElement(question1, answer1);
        FaqElement faqElement2 = new FaqElement(question2, answer2);
        FaqElement faqElement3 = new FaqElement(question3, answer3);
        FaqElement faqElement4 = new FaqElement(question4, answer4);
        FaqElement faqElement5 = new FaqElement(question5, answer5);
        uni.addFaqElement(faqElement1);
        uni.addFaqElement(faqElement2);
        uni.addFaqElement(faqElement3);
        uni.addFaqElement(faqElement4);
        uni.addFaqElement(faqElement5);


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
        news.setDescription("ცოდნის ფონდის თანადაფინანსების (საგრანტო) სისტემა - შენ მიერ ყოველწლიურად გადასახდელი თანხა 2 250 ლარით მცირდება (სიახლე!)\n");
        news.setTitle("დაფინანსების სისტემები თავისუფალ უნივერსიტეტში\n");
        news.setImg("http://freeuni.edu.ge/sites/default/files/Farda%20Baneri.jpg");
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
