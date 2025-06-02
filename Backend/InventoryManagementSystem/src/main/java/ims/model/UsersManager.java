package ims.model;

import ims.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UsersManager {

    @Autowired
    UsersRepository UR;

    @Autowired
    EmailManager EM;

    // Register a new user
    public String addUser(Users U) {
        if (UR.validateEmail(U.getEmail()) > 0)
            return "401::Email already exists";

        UR.save(U);
        return "200::User Registered Successfully";
    }

    // Recover password using email
    public String recoverPassword(String email) {
        Users U = UR.findByEmail(email);  // 🔁 fixed
        if (U == null)
            return "401::User not found";

        String message = String.format("Dear %s,\n\nYour Password is: %s", U.getFullname(), U.getPassword());
        return EM.sendEmail(U.getEmail(), "INVENTORY PRO : Password Recovery", message);
    }

    // Sign in with email and password
    public String signIn(Users U) {
        Users user = UR.findByEmail(U.getEmail());  // 🔁 fixed
        if (user == null) {
            return "401::User not found";
        }
        if (!user.getPassword().equals(U.getPassword())) {
            return "401::Incorrect password";
        }
        return "200::Login successful";
    }
}
