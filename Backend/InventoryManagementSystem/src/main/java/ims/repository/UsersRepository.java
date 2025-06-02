package ims.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ims.model.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {
	
    @Query("SELECT COUNT(U) FROM Users U WHERE U.email = :email")
    int validateEmail(@Param("email") String email);

    // Optional: More readable standard Spring Data method
    Users findByEmail(String email);
}

