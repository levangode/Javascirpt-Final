package ge.freeuni.project.controllers;


import ge.freeuni.project.domain.InterestRepository;
import ge.freeuni.project.models.UserInterest;
import ge.freeuni.project.models.User;
import ge.freeuni.project.domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class InterestController {
    private InterestRepository repository;
    private UserRepository userRepository;

    @Autowired
    public InterestController(InterestRepository repository, UserRepository userRepository){
        this.repository = repository;
        this.userRepository = userRepository;
    }

    @PostMapping("/add-interest/{userId}")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void addInterest(@PathVariable String userId, @RequestBody UserInterest interest){
        Optional<User> userOptional = this.userRepository.findByFbId(userId);
        if(userOptional.isPresent()){
            userOptional.get().addInterest(interest);
            this.userRepository.save(userOptional.get());
        }
    }

    @PostMapping("/remove-interest/{userId}")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void removeInterest(@PathVariable String userId, @RequestBody UserInterest interest){
        Optional<User> userOptional = this.userRepository.findByFbId(userId);
        if(userOptional.isPresent()){
            userOptional.get().getInterestList().remove(interest);
            this.userRepository.save(userOptional.get());
        }
    }

    @GetMapping("/get-interests/{userId}")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    @ResponseBody
    public Set<UserInterest> getInterests(@PathVariable String userId){
        Optional<User> userOptional = this.userRepository.findByFbId(userId);
        if(userOptional.isPresent()){
            return userOptional.get().getInterestList();
        } else {
            return new HashSet<>();
        }
    }

    @GetMapping("/interests")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public List<UserInterest> interests(){
        return new ArrayList<>(repository.findAll());
    }
}
