package ge.freeuni.project;

import ge.freeuni.project.models.interest.InterestRepository;
import ge.freeuni.project.models.interest.UserInterest;
import ge.freeuni.project.models.users.User;
import ge.freeuni.project.models.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class ProjectApplication implements CommandLineRunner {

    @Autowired
    private InterestRepository interestRepository;

    @Autowired
    private UserRepository userRepository;

    public static void main(String[] args) {
        SpringApplication.run(ProjectApplication.class, args);
    }


    @Override
    @Transactional()
    public void run(String... args) throws Exception {
//        interestRepository.save(new UserInterest("ბიოლოგია"));
//        interestRepository.save(new UserInterest("ქიმია"));
//        interestRepository.save(new UserInterest("ფიზიკა"));

    }
}
