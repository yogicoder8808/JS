// login.js

var loginPage = document.getElementById("login");
var registerPage = document.getElementById("register");
var btn = document.getElementById("btn");

function login() {
    loginPage.style.left = "40px";
    registerPage.style.left = "450px";
    btn.style.left = "0";
}

// Login form validation
var loginEmailError = document.getElementById("login-email-error");
var loginPwdError = document.getElementById("loginPwd-error");
var loginSubmitError = document.getElementById("loginSubmit-error");

var input = document.getElementById("login-email");
function validateLoginEmail() {
    if (input.value === '') {
        loginEmailError.innerHTML = 'Email is required';
        return false;
    } else if (!input.checkValidity()) {
        loginEmailError.innerHTML = 'Invalid Email';
        return false;
    } else {
        loginEmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

var inputPassword = document.getElementById("login-password");
function validateLoginPassword() {
    if (inputPassword.value == 0) {
        loginPwdError.innerHTML = 'Enter Password';
        return false;
    }
    if (!(inputPassword.value).match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)) {
        loginPwdError.innerHTML = 'Invalid password, Contains at least one uppercase letter, one lowercase letter, any one digit and one spl character';
        return false;
    }
    loginPwdError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function loginForm(event) {
    event.preventDefault();
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const user = storedData.find(user => {
        return user.email === input.value && user.password === inputPassword.value;
    });

    if (!validateLoginEmail() || !validateLoginPassword()) {
        loginSubmitError.style.display = 'block';
        loginSubmitError.innerHTML = 'Please fix error to login';
        setTimeout(() => {
            loginSubmitError.style.display = 'none';
        }, 3000);
        return false;
    } else if (!user) {
        window.alert("Invalid Email or Password");
        return false;
    } else {
        window.alert("User logged in Successfully");
        window.location.href = "userData.html";
        return true;
    }
}

document.getElementById("loginForm").addEventListener("submit", loginForm);
