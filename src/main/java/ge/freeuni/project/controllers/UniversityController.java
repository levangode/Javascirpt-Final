package ge.freeuni.project.controllers;


import ge.freeuni.project.domain.UniversityRepository;
import ge.freeuni.project.models.University;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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

    @GetMapping("/get-university/{id}")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public University getUniversityById(@PathVariable("id") Long id){
        Optional<University> universityOptional = this.repository.findById(id);
        return universityOptional.orElse(null);
    }

}
