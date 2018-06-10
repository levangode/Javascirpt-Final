package ge.freeuni.project.controllers;


import ge.freeuni.project.domain.EventRepository;
import ge.freeuni.project.domain.UniversityRepository;
import ge.freeuni.project.models.Credentials;
import ge.freeuni.project.models.University;
import ge.freeuni.project.models.UniversityEvent;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.*;

@RestController
public class UniversityController {

    private UniversityRepository repository;
    private final EventRepository eventRepository;


    @Autowired
    public UniversityController(UniversityRepository repository, EventRepository eventRepository){
        this.repository = repository;
        this.eventRepository = eventRepository;
    }

    @PostMapping("/uni-authenticate")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public ResponseEntity saveUser(@RequestBody Credentials credentials){
        List<University> universities = repository.findUniversityByUsername(credentials.getUsername());
        if(universities.size() >= 1){
            University uni = universities.get(0);
            if(uni.getPassword().equals(credentials.getPassword())){
                Map<String, String> body = new HashMap<>();
                body.put("id", uni.getId().toString());
                body.put("username", uni.getUsername());
                body.put("name", uni.getName());
                body.put("token", uni.getId().toString());
                return ResponseEntity.ok(body);
            }
        }
        return new ResponseEntity(HttpStatus.BAD_REQUEST);
    }


    @PostMapping("/universities")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public ResponseEntity saveUniversity(@RequestBody University university){
        if(repository.findUniversityByUsername(university.getUsername()).size() > 0){
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }
        this.repository.save(university);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/universities")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void updateUniversity(@RequestBody University university){
        repository.save(university);
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

    @GetMapping("/get-events")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public List<UniversityEvent> getAllEvents(){
        return new ArrayList<>(eventRepository.findAll());
    }

    @GetMapping("/places-count/{id}")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public University getUniversityPlaces(@PathVariable("id") Long id){
        Optional<University> universityOptional = this.repository.findById(id);
        return universityOptional.orElse(null);
    }

}
