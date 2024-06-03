// login.js

function login() {
    loginPage.style.left = "40px";
    registerPage.style.left = "450px";
    btn.style.left = "0";
}

// Login form validation
const loginEmailError = document.getElementById("login-email-error");
const loginPwdError = document.getElementById("login-pwd-error");
const loginSubmitError = document.getElementById("login-submit-error");

const input = document.getElementById("login-email");
function validateLoginEmail() {
    if (input.value === '') {
        loginEmailError.innerHTML = 'Enter Email';
        return false;
    } else if (!input.checkValidity()) {
        loginEmailError.innerHTML = 'Invalid Email';
        return false;
    } else {
        loginEmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

const inputPassword = document.getElementById("login-password");
function validateLoginPassword() {
    if (inputPassword.value === '') {
        loginPwdError.innerHTML = 'Enter Password';
        return false;
    }
    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(inputPassword.value)) {
        loginPwdError.innerHTML = 'Invalid password';
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

