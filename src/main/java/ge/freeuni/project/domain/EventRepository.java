package ge.freeuni.project.domain;

import ge.freeuni.project.models.UniversityEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<UniversityEvent, Long> {
}
