package de.smartformer.demo.demo.repository;

import de.smartformer.demo.demo.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
