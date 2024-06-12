//common.js

function showPasswordRequirements() {
    alert("Your password must be:\n- At least 8 characters long\n- Contain at least one uppercase and one lowercase letter\n- Contain at least one number\n- Contain at least one special character");
}


class CommonFunctions {
    constructor() {}

    // Prevent Browser Navigation
    static preventBack() {
        window.history.forward();
    }

    static init() {
        setTimeout(CommonFunctions.preventBack, 0);
        window.onpopstate = function() {
            null;
        };
    }

    // Toggle password
    static togglePassword(id) {
        const passwordField = document.getElementById(id);
        passwordField.type = passwordField.type === "password" ? "text" : "password";
    }

    // Validation functions
    static validateName(nameInput) {
        const name = nameInput.value.trim();
        const nameError = document.getElementById('name-error');
        const nameParts = name.split(" ");
        if (name === "") {
            nameError.innerHTML = "Please provide your name";
            return false;
        }
        if (nameParts.length < 2) {
            nameError.innerHTML = "Please enter your full name";
            return false;
        }
        nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }

    static validateEmail(emailInput) {
        const email = emailInput.value.trim();
        const emailError = document.getElementById('email-error');
        if (email === "") {
            emailError.innerHTML = "Please provide your email address";
            return false;
        } else if (!emailInput.checkValidity()) {
            emailError.innerHTML = "Please enter a valid email address";
            return false;
        } else {
            emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }

    static validatePhone(phoneInput) {
        const phone = phoneInput.value.trim();
        const phoneError = document.getElementById('phone-error');
        if (phone.length === 0) {
            phoneError.innerHTML = "Please provide your phone number";
            return false;
        }
        if (isNaN(phone)) {
            phoneError.innerHTML = "Please enter only digits for the phone number";
            return false;
        }
        if (phone.length !== 10) {
            phoneError.innerHTML = "Please enter a 10-digit phone number";
            return false;
        }
        phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }

    static validatePassword(passwordInput) {
        const password = passwordInput.value.trim();
        const passwordError = document.getElementById('password-error');
        if (password.length === 0) {
            passwordError.innerHTML = "Please provide your password";
            return false;
        } else if ( !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
            passwordError.innerHTML = `<i class="fa fa-info-circle" onclick="showPasswordRequirements()"></i>`;
            return false;
        } else {
            passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }

    static validateConfirmPassword(confirmPasswordInput) {
        const password = document.getElementById('user-password').value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();
        const confirmPasswordError = document.getElementById('confirm-password-error');
        if (confirmPassword === "") {
            confirmPasswordError.innerHTML = "Please confirm your password";
            return false;
        } else if (confirmPassword !== password) {
            confirmPasswordError.innerHTML = "Passwords do not match";
            return false;
        } else {
            confirmPasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }
}

CommonFunctions.init();



