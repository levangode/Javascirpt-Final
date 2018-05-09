package ge.freeuni.project.models.users;


import ge.freeuni.project.models.users.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {
    private UserRepository repository;

    @Autowired
    public UserController(UserRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/users")
    @CrossOrigin(origins = {"http://localhost:4200", "https://localhost:4200"})
    public List<User> interests() {
        repository.findAll().forEach(System.out::println);
        return new ArrayList<>(repository.findAll());
    }
}
