package ge.freeuni.project.models.interest;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface InterestRepository extends JpaRepository<UserInterest, Long> {
    public List<UserInterest> findAllByName(String name);
}
