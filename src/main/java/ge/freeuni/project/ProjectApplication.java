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

        University freeUniversity = new University();
        String freeuniAbout = "თავისუფალი უნივერსიტეტი - უპირობო ლიდერი ქართულ საგანმანათლებლო სივრცეში.";
        System.out.print(freeuniAbout.length());
        //uni.setAbout("იყო და არა იყო რა <br> ღვთ1ის უკეთესი რა იქნებოდა, იყო ერთ მელა");
        freeUniversity.setAbout(freeuniAbout);
        freeUniversity.setAddress("აღმაშენებლის ხეივანი #13");
        freeUniversity.setEmail("lgode@freeuni.edu.ge");
        freeUniversity.setName("თბილისის თავისუფალი უნივერსიტეტი");
        freeUniversity.setPhone("593252073");
        freeUniversity.setWebAddress("http://freeuni.edu.ge");
        freeUniversity.setLogo("https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/FreeUniLogo.png/220px-FreeUniLogo.png");

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
        freeUniversity.addFaqElement(faqElement1);
        freeUniversity.addFaqElement(faqElement2);
        freeUniversity.addFaqElement(faqElement3);
        freeUniversity.addFaqElement(faqElement4);
        freeUniversity.addFaqElement(faqElement5);


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
        freeUniversity.addFaculty(faculty);

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
        freeUniversity.addFaculty(faculty1);

        UniversityNews news = new UniversityNews();
        news.setDate(new Date());
        news.setDescription("ცოდნის ფონდის თანადაფინანსების (საგრანტო) სისტემა - შენ მიერ ყოველწლიურად გადასახდელი თანხა 2 250 ლარით მცირდება (სიახლე!)\n");
        news.setTitle("დაფინანსების სისტემები თავისუფალ უნივერსიტეტში\n");
        news.setImg("http://freeuni.edu.ge/sites/default/files/Farda%20Baneri.jpg");
        freeUniversity.addNews(news);

        UniversityEvent event = new UniversityEvent();
        event.setAddress("კახა ბენდუქიძის კამპუსი");
        event.setDate(new Date());
        event.setTitle("გაცნობითი პროგრამები");
        event.setDescription("გაცნობით პროგრამაზე აბიტურიენტებს და მოსწავლეებს საშუალება ექნებათ, დაათვალიერონ უნივერსიტეტი," +
                "გაიგონ მეტი სასურველი სასწავლო პროგრამების შესახებ.");
        event.setImg("http://www.freeuni.edu.ge/sites/default/files/Gacnobiti.png");
        event.setLink("https://google.com");
        freeUniversity.addEvent(event);


        //add TSU
        University tsuUniversity = new University();
        String tsuAbout = "1918 წელს  გაიხსნა კავკასიაში პირველი ეროვნული უნივერსიტეტი, რომელმაც, ქართული საგანმანათლებლო ტრადიციების გათვალისწინებით, საფუძველი ჩაუყარა საქართველოში ევროპული ტიპის უმაღლეს სკოლას.";
        System.out.print(tsuAbout.length());
        //uni.setAbout("იყო და არა იყო რა <br> ღვთ1ის უკეთესი რა იქნებოდა, იყო ერთ მელა");
        tsuUniversity.setAbout(tsuAbout);
        tsuUniversity.setAddress("ი.ჭავჭავაძის გამზ. 1, თსუ I კორპუსი");
        tsuUniversity.setEmail("lgode@freeuni.edu.ge");
        tsuUniversity.setName("ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტი");
        tsuUniversity.setPhone("593252073");
        tsuUniversity.setWebAddress("https://www.tsu.ge/ge/");
        tsuUniversity.setLogo("https://upload.wikimedia.org/wikipedia/ka/8/8a/TSU_Logo.svg");

        //add FAQ for university
        String tsuQuestion1 = "1. თბილისის სახელმწიფო უნივერსიტეტის რომელი ოფისი უწევს\n" +
                "კოორდინირებას ერაზმუს+ საერთაშორისო კრედიტების მობილობის\n" +
                "პროგრამას?";
        String tsuAnswer1 = "თსუ საგარეო ურთიერთობათა დეპარტამენტი\n" +
                "თსუ პირველი კორპუსი, ოთახი 121\n ";
        String tsuQuestion2 = "2. რას მოიცავს სტიპენდია?";
        String tsuAnswer2 = "უფასო სწავლას, ყოველთვიურ სტიპენდიასა და ორმხრივი საერთაშორისო\n" +
                "მგზავრობის ხარჯების ანაზღაურებას.";
        String tsuQuestion3 = "3. ტარდება თუ არა საინფორმაციო შეხვედრები ერაზმუს+ პროგრამის\n" +
                "ფარგლებში არსებული შემოთავაზებების შესახებ? ";
        String tsuAnswer3 = "დიახ, ტარდება - ოქტომბერსა და მარტში. ";
        String tsuQuestion4 = "4. რა არ არის დაფინანსებული სტიპენდიის ფარგლებში?";
        String tsuAnswer4 = "სავიზო მოსაკრებლის ღირებულება და საერთაშორისო ჯანმრთელობის\n" +
                "დაზღვევა ";
        String tsuQuestion5 = "5. რა ენებში ტარდება თსუ ენის ინსტიტუციონალური ტესტირება?\n";
        String tsuAnswer5 = "ინგლისურ, გერმანულ, იტალიურ, ესპანურ და ფრანგულ ენებში";
        FaqElement tsuFaqElement1 = new FaqElement(tsuQuestion1, tsuAnswer1);
        FaqElement tsuFaqElement2 = new FaqElement(tsuQuestion2, tsuAnswer2);
        FaqElement tsuFaqElement3 = new FaqElement(tsuQuestion3, tsuAnswer3);
        FaqElement tsuFaqElement4 = new FaqElement(tsuQuestion4, tsuAnswer4);
        FaqElement tsuFaqElement5 = new FaqElement(tsuQuestion5, tsuAnswer5);
        tsuUniversity.addFaqElement(tsuFaqElement1);
        tsuUniversity.addFaqElement(tsuFaqElement2);
        tsuUniversity.addFaqElement(tsuFaqElement3);
        tsuUniversity.addFaqElement(tsuFaqElement4);
        tsuUniversity.addFaqElement(tsuFaqElement5);

        UniversityFaculty tsuFaculty = new UniversityFaculty();
        Set<FacultySubject> tsuFacultySubjects = new HashSet<>();
        tsuFacultySubjects.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        tsuFacultySubjects.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        tsuFaculty.setAccredited("აკრედიტებული");
        tsuFaculty.setAnnualFee(2250L);
        tsuFaculty.setCredits(240);
        tsuFaculty.setFacultyNumber(12132333L);
        tsuFaculty.setFinancing("დაფინანსებული");
        tsuFaculty.setLanguage("ქართული");
        tsuFaculty.setNumPlaces(300L);
        tsuFaculty.setProgramName("კომპიუტერული მეცნიერებები და მათემატიკა");
        tsuFaculty.setQualification("კომპიუტინგის ბაკალავრი");
        tsuFaculty.setFacultySubjects(tsuFacultySubjects);
        tsuUniversity.addFaculty(tsuFaculty);

        UniversityFaculty tsuFaculty1 = new UniversityFaculty();
        Set<FacultySubject> tsuFacultySubjects1 = new HashSet<>();
        tsuFacultySubjects1.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        tsuFacultySubjects1.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        tsuFacultySubjects1.add(new FacultySubject("მათემატიკა", "6", "45", "40%+1", ""));
        tsuFacultySubjects1.add(new FacultySubject("გეოგრაფია", "1", "10", "40%+1", ""));
        tsuFaculty1.setAccredited("აკრედიტებული");
        tsuFaculty1.setAnnualFee(2250L);
        tsuFaculty1.setCredits(240);
        tsuFaculty1.setFacultyNumber(1121313L);
        tsuFaculty1.setFinancing("დაფინანსებული");
        tsuFaculty1.setLanguage("ქართული");
        tsuFaculty1.setNumPlaces(250L);
        tsuFaculty1.setProgramName("მართვა და საზოგადოებრივი მეცნიერებები");
        tsuFaculty1.setQualification("სოციოლოგიის ბაკალავრი");
        tsuFaculty1.setFacultySubjects(tsuFacultySubjects1);
        tsuUniversity.addFaculty(tsuFaculty1);

        UniversityNews tsuNews = new UniversityNews();
        tsuNews.setDate(new Date());
        tsuNews.setDescription("შიდა მობილობის ვაკანტური ადგილები განისაზღვრება ფაკულტეტების მიერ და აისახება შიდა მობილობის ელექტრონულ პორტალზე.");
        tsuNews.setTitle("შიდა მობილობა");
        tsuNews.setImg("https://news.ge/wp-content/uploads/2018/03/8663.jpg");
        tsuUniversity.addNews(tsuNews);

        UniversityEvent tsuEvent = new UniversityEvent();
        tsuEvent.setAddress("თსუ II კორპუსი");
        tsuEvent.setDate(new Date());
        tsuEvent.setTitle("ფეხბურთის ჩემპიონატი");
        tsuEvent.setDescription("მიიღე მონაწილეობა ჩემპიონატში და მოიგე სხვადასხვა პრიზები!");
        tsuEvent.setImg("https://tsu.ge/data/img_small/74433/web.opi5MR8Vyz.jpg");
        tsuEvent.setLink("https://google.com");
        tsuUniversity.addEvent(tsuEvent);




        //add Ilia University
        University iliaUniversity = new University();
        String iliaAbout = "ილიას სახელმწიფო უნივერსიტეტი დაფუძნდა 2006 წელს განსხვავებული და ხანგრძლივი ისტორიის მქონე 6 ინსტიტუტის გაერთიანების შედეგად.";
        System.out.print(iliaAbout.length());
        //uni.setAbout("იყო და არა იყო რა <br> ღვთ1ის უკეთესი რა იქნებოდა, იყო ერთ მელა");
        iliaUniversity.setAbout(iliaAbout);
        iliaUniversity.setAddress("ქაქუცა ჩოლოყაშვილის გამზირი 3/5");
        iliaUniversity.setEmail("lgode@freeuni.edu.ge");
        iliaUniversity.setName("ილიას სახელმწიფო უნივერსიტეტი");
        iliaUniversity.setPhone("593252073");
        iliaUniversity.setWebAddress("http://iliauni.edu.ge/ge");
        iliaUniversity.setLogo("http://api.ning.com/files/W8k9GghxLBsBcCZujM3sKv02fbxOVD9aNuiap-TQcY-5I4rbPHHVwlhmKxOwa61MvYSEBWL7Ol7-S*WbM6ZstAD6jBjkAzfi/iliaunistvitmartveloba.jpg");

        //add FAQ for university
        String iliaQuestion1 = "1. შიდა მობილობა როდის შემიძლია?";
        String iliaAnswer1 = "შიდა მობილობა ცხადდება ყოველი სემესტრის ბოლოს. ";
        String iliaQuestion2 = "2. რა არის საჭირო შიდა მობილობისთვის?";
        String iliaAnswer2 = "შიდა მობილობისთვის საჭიროა განცხადების დაწერა არგუსზე.";
        String iliaQuestion3 = "3. შიდა მობილობის დროს წელი დამეკარგება? ";
        String iliaAnswer3 = "არა, შიდა მობილობისას  ხდება  ყველა კრედიტის აღიარება.";
        String iliaQuestion4 = "4. როდის ავირჩევ სასურველ პროფესიას?";
        String iliaAnswer4 = "პირველი კურსის ბოლოს შეგიძლიათ თქვენთვის სასურველი პროფესიის არჩევა. ";
        String iliaQuestion5 = "5. პირველკურსელები საგნებს ვირჩევთ?";
        String iliaAnswer5 = "მსგავს დეტალებზე პასუხს მიიღებთ საორიენტაციო შეხვედრებზე, რომლებიც სწავლის დაწყებამდე გაიმართება. ";
        FaqElement iliaFaqElement1 = new FaqElement(iliaQuestion1, iliaAnswer1);
        FaqElement iliaFaqElement2 = new FaqElement(iliaQuestion2, iliaAnswer2);
        FaqElement iliaFaqElement3 = new FaqElement(iliaQuestion3, iliaAnswer3);
        FaqElement iliaFaqElement4 = new FaqElement(iliaQuestion4, iliaAnswer4);
        FaqElement iliaFaqElement5 = new FaqElement(iliaQuestion5, iliaAnswer5);
        iliaUniversity.addFaqElement(iliaFaqElement1);
        iliaUniversity.addFaqElement(iliaFaqElement2);
        iliaUniversity.addFaqElement(iliaFaqElement3);
        iliaUniversity.addFaqElement(iliaFaqElement4);
        iliaUniversity.addFaqElement(iliaFaqElement5);


        UniversityFaculty iliaFaculty = new UniversityFaculty();
        Set<FacultySubject> iliaFacultySubjects = new HashSet<>();
        iliaFacultySubjects.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        iliaFacultySubjects.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        iliaFaculty.setAccredited("აკრედიტებული");
        iliaFaculty.setAnnualFee(2250L);
        iliaFaculty.setCredits(240);
        iliaFaculty.setFacultyNumber(12132333L);
        iliaFaculty.setFinancing("დაფინანსებული");
        iliaFaculty.setLanguage("ქართული");
        iliaFaculty.setNumPlaces(300L);
        iliaFaculty.setProgramName("კომპიუტერული მეცნიერებები და მათემატიკა");
        iliaFaculty.setQualification("კომპიუტინგის ბაკალავრი");
        iliaFaculty.setFacultySubjects(iliaFacultySubjects);
        iliaUniversity.addFaculty(iliaFaculty);

        UniversityFaculty iliaFaculty1 = new UniversityFaculty();
        Set<FacultySubject> iliaFacultySubjects1 = new HashSet<>();
        iliaFacultySubjects1.add(new FacultySubject("ქართული", "4", "35", "40%+1", ""));
        iliaFacultySubjects1.add(new FacultySubject("უცხო ენა", "2", "20", "40%+1", "ინგლისური"));
        iliaFacultySubjects1.add(new FacultySubject("მათემატიკა", "6", "45", "40%+1", ""));
        iliaFacultySubjects1.add(new FacultySubject("გეოგრაფია", "1", "10", "40%+1", ""));
        iliaFaculty1.setAccredited("აკრედიტებული");
        iliaFaculty1.setAnnualFee(2250L);
        iliaFaculty1.setCredits(240);
        iliaFaculty1.setFacultyNumber(1121313L);
        iliaFaculty1.setFinancing("დაფინანსებული");
        iliaFaculty1.setLanguage("ქართული");
        iliaFaculty1.setNumPlaces(250L);
        iliaFaculty1.setProgramName("მართვა და საზოგადოებრივი მეცნიერებები");
        iliaFaculty1.setQualification("სოციოლოგიის ბაკალავრი");
        iliaFaculty1.setFacultySubjects(iliaFacultySubjects1);
        iliaUniversity.addFaculty(iliaFaculty1);

        UniversityNews iliaNews = new UniversityNews();
        iliaNews.setDate(new Date());
        iliaNews.setDescription("დასასრულს მიუახლოვდა საქართველოს სტუდენტ კალათბურთელ ვაჟთა 2018 წლის ჩემპიონატი, რომელიც საუნივერსიტეტო სპორტის ფედერაციის ინიციატივით ტარდება.");
        iliaNews.setTitle("ილიაუნელი კალათბურთელები ფინალში ითამაშებენ");
        iliaNews.setImg("https://iliauni.edu.ge/uploads/photo/cache/47/7d08486827e20934bd48c01011c99123_47492.png");
        iliaUniversity.addNews(iliaNews);

        UniversityEvent iliaEvent = new UniversityEvent();
        iliaEvent.setAddress("ილიაუნი");
        iliaEvent.setDate(new Date());
        iliaEvent.setTitle("კანადელი პიანისტის კონცერტი ილიაუნიში");
        iliaEvent.setDescription("18 ივლისს, 19.00-ზე, ილიას სახელმწიფო უნივერსიტეტის B201 აუდიტორიაში ილიაუნის მუსიკის ცენტრის ინიციატივით გაიმართება ახალგაზრდა კანადელი პიანისტის, რონი ბოისის კონცერტი.");
        iliaEvent.setImg("https://iliauni.edu.ge/uploads/photo/cache/47/0b15ecfe6eb18047611da0915fca8345_47504.png");
        iliaEvent.setLink("https://iliauni.edu.ge/uploads/photo/cache/47/0b15ecfe6eb18047611da0915fca8345_47504.png");
        iliaUniversity.addEvent(iliaEvent);

        universityRepository.save(freeUniversity);
        universityRepository.save(tsuUniversity);
        universityRepository.save(iliaUniversity);
    }
}
