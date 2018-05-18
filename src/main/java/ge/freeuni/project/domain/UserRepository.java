package ge.freeuni.project.domain;

import ge.freeuni.project.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByFbId(String id);
}
