// // login.js

// function login() {
//     loginPage.style.left = "40px";
//     registerPage.style.left = "450px";
//     btn.style.left = "0";
// }

// // Login form validation
// const loginEmailError = document.getElementById("login-email-error");
// const loginPasswordError = document.getElementById("login-password-error");
// const loginSubmitError = document.getElementById("login-submit-error");

// const input = document.getElementById("login-email");

// function validateLoginEmail() {
//     if (input.value === '') {
//         loginEmailError.innerHTML = 'Please provide your email address';
//         return false;
//     } else if (!input.checkValidity()) {
//         loginEmailError.innerHTML = 'Please enter a valid email address';
//         return false;
//     } else {
//         loginEmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
// }

// const inputPassword = document.getElementById("login-password");
// function validateLoginPassword() {
//     if (inputPassword.value === '') {
//         loginPasswordError.innerHTML = 'Please provide your password';
//         return false;
//     }
//     if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputPassword.value)) {
//         loginPasswordError.innerHTML = 'Please enter a valid password';
//         return false;
//     }
//     loginPasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
//     return true;
// }

// function loginForm(event) {
//     event.preventDefault();
//     const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

//     const user = storedData.find(user => {
//         return user.email === input.value && user.password === inputPassword.value;
//     });

//     if (!validateLoginEmail() || !validateLoginPassword()) {
//         loginSubmitError.style.display = 'block';
//         loginSubmitError.innerHTML = 'Please correct the errors to login.';
//         setTimeout(() => {
//             loginSubmitError.style.display = 'none';
//         }, 3000);
//         return false;
//     } else if (!user) {
//         window.alert("Invalid email or password. Please verify your credentials.");
//         return false;
//     } else {
//         window.alert("User logged in Successfully");
//         window.location.href = "userData.html";
//         return true;
//     }
// }

// login.js

import CommonFunctions from "./common.js";

class LoginPage {
    constructor() {}

    static login() {
        document.getElementById("login-form").style.left = "40px";
        document.getElementById("register-form").style.left = "450px";
        document.getElementById("btn").style.left = "0";
    }

    static validateLoginEmail() {
        const input = document.getElementById("login-email");
        const loginEmailError = document.getElementById("login-email-error");
        return CommonFunctions.validateEmail(input.value, loginEmailError);
    }

    static validateLoginPassword() {
        const inputPassword = document.getElementById("login-password");
        const loginPasswordError = document.getElementById("login-password-error");
        return CommonFunctions.validatePassword(inputPassword.value, loginPasswordError);
    }

    static loginForm(event) {
        event.preventDefault();

        if (!LoginPage.validateLoginEmail() || !LoginPage.validateLoginPassword()) {
            const loginSubmitError = document.getElementById("login-submit-error");
            loginSubmitError.style.display = "block";
            loginSubmitError.innerHTML = "Please correct the errors to login.";
            setTimeout(() => {
                loginSubmitError.style.display = "none";
            }, 3000);
            return false;
        } else if (!user) {
            window.alert("Invalid email or password. Please verify your credentials.");
            return false;
        } else {
            window.alert("User logged in Successfully");
            window.location.href = "userData.html";
            return true;
        }
    }
}
export default LoginPage;
