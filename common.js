// // Login and Register Page

// var loginPage = document.getElementById("login-form");
// var registerPage = document.getElementById("register-form");
// var btn = document.getElementById("btn");


// // Prevent Browser Navigation
// function preventBack() {
//     window.history.forward();
// }

// setTimeout(preventBack,0);
// window.onpopstate = function () {
//     null
// };


// // Toggle password
// function togglePassword(id) {
//     const passwordField = document.getElementById(id);
//     passwordField.type = (passwordField.type === "password") ? "text" : "password";
// }

// // Validation functions
// function validateName() {
//     const name = document.getElementById("user-name").value.trim();
//     const nameParts = name.split(' ');
//     if (name === '') {
//         nameError.innerHTML = 'Please provide your name';
//         return false;
//     }
//     if (nameParts.length < 2) {
//         nameError.innerHTML = 'Please enter your full name';
//         return false;
//     } 
//         nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
// }


// function validateEmail() {
//     const email = document.getElementById("user-email");
//     if (email.value === '') {
//         emailError.innerHTML = 'Please provide your email address';
//         return false;
//     } else if (!email.checkValidity()) {
//         emailError.innerHTML = 'Please enter a valid email address';
//         return false;
//     } else {
//         emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
// }

// function validatePhone() {
//     const phone = document.getElementById("user-phone").value.trim();
//     if (phone.length === 0) {
//         phoneError.innerHTML = 'Please provide your phone number';
//         return false;
//     }
//     if (isNaN(phone)) {
//         phoneError.innerHTML = 'Please enter only digits for the phone number';
//         return false;
//     }
//     if (phone.length !== 10) {
//         phoneError.innerHTML = 'Please enter a 10-digit phone number';
//         return false;
//     }
//     phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
//     return true;
// }


// function validatePassword() {
//     const password = document.getElementById("user-password").value;
//     if (password.length == '') {
//         passwordError.innerHTML = 'Please provide your password';
//         return false;
//     }else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
//         passwordError.innerHTML = 'Please enter a valid password';
//         return false;
//     }else{
//         passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }     
// }


// common.js

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
    static validateName(name, nameError) {
        const nameParts = name.trim().split(" ");
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

    static validateEmail(email, emailError) {
        if (email === "") {
            emailError.innerHTML = "Please provide your email address";
            return false;
        } else if (!email.checkValidity()) {
            emailError.innerHTML = "Please enter a valid email address";
            return false;
        } else {
            emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }

    static validatePhone(phone, phoneError) {
        const trimmedPhone = phone.trim();
        if (trimmedPhone.length === 0) {
            phoneError.innerHTML = "Please provide your phone number";
            return false;
        }
        if (isNaN(trimmedPhone)) {
            phoneError.innerHTML = "Please enter only digits for the phone number";
            return false;
        }
        if (trimmedPhone.length !== 10) {
            phoneError.innerHTML = "Please enter a 10-digit phone number";
            return false;
        }
        phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }

    static validatePassword(password, passwordError) {
        if (password.length === 0) {
            passwordError.innerHTML = "Please provide your password";
            return false;
        } else if (
            !/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
                password
            )
        ) {
            passwordError.innerHTML = "Please enter a valid password";
            return false;
        } else {
            passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }
}

CommonFunctions.init();

export default CommonFunctions;
