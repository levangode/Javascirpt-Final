package ge.freeuni.project;

import ge.freeuni.project.domain.InterestRepository;
import ge.freeuni.project.domain.UniversityRepository;
import ge.freeuni.project.domain.UserRepository;
import ge.freeuni.project.models.University;
import ge.freeuni.project.models.UserInterest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;

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
        universityRepository.save(uni);
    }
}
