package ge.freeuni.project.models.university;


import ge.freeuni.project.models.users.User;
import ge.freeuni.project.models.users.UserData;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UniversityController {

    private UniversityRepository repository;

    public UniversityController(UniversityRepository repository){
        this.repository = repository;
    }

    @PostMapping("/save-university")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void saveUser(@RequestBody University university){
        this.repository.save(university);

    }

}
