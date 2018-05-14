package ge.freeuni.project.models.users;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findByFbId(String id);
}
