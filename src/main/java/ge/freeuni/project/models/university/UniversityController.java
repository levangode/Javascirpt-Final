package ge.freeuni.project.models.university;


import ge.freeuni.project.models.users.User;
import ge.freeuni.project.models.users.UserData;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

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

    @GetMapping("/get-universities")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public List<University> getUniversities(){
        return new ArrayList<>(this.repository.findAll());
    }

}
