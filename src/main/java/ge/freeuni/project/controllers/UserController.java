package ge.freeuni.project.controllers;


import ge.freeuni.project.domain.UniversityRepository;
import ge.freeuni.project.domain.UserRepository;
import ge.freeuni.project.models.FavouriteRequest;
import ge.freeuni.project.models.University;
import ge.freeuni.project.models.User;
import ge.freeuni.project.models.UserData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    private UserRepository repository;


    private final UniversityRepository uniRepository;

    @Autowired
    public UserController(UserRepository repository, UniversityRepository uniRepository) {
        this.repository = repository;
        this.uniRepository = uniRepository;
    }

    @GetMapping("/users")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public List<User> interests() {
        repository.findAll().forEach(System.out::println);
        return new ArrayList<>(repository.findAll());
    }


    @PostMapping("/save-user")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void saveUser(@RequestBody UserData userData){
        if(!repository.findByFbId(userData.getId()).isPresent()) {
            repository.save(new User(userData.getId(), userData.getImage(), userData.getEmail(), userData.getName()));
        }
    }

    @PostMapping("/addFavourite")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public void addFavourite(@RequestBody FavouriteRequest favouriteRequest){
        Optional<University> uniOptional = this.uniRepository.findById(favouriteRequest.getUniId());
        Optional<User> userOptional = this.repository.findByFbId(favouriteRequest.getUserId());
        if(uniOptional.isPresent() && userOptional.isPresent()){
            User user = userOptional.get();
            user.addFavourite(uniOptional.get());
            repository.save(user);
        }
    }
}
