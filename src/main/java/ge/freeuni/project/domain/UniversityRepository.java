package ge.freeuni.project.domain;

import ge.freeuni.project.models.University;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversityRepository extends JpaRepository<University, Long> {
}
