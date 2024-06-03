// Login and Register Page

var loginPage = document.getElementById("login");
var registerPage = document.getElementById("register");
var btn = document.getElementById("btn");


// Prevent Browser Navigation
function preventBack() {
    window.history.forward();
}

setTimeout(preventBack,0);
window.onpopstate = function () {
    null
};


// Toggle password
function togglePassword(id) {
    const passwordField = document.getElementById(id);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Validation functions
function validateName() {
    const name = document.getElementById("contact-name").value;
    const trimmedName = name.trim();
    if (trimmedName !== name) {
        nameError.innerHTML = 'Trailing spaces not allowed';
        return false;
    }
    const nameParts = name.split(' ');
    if (nameParts.length !== 2) {
        nameError.innerHTML = 'Enter Full name';
        return false;
    } else {
        nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("contact-email");
    if (email.value === '') {
        emailError.innerHTML = 'Email is required';
        return false;
    } else if (!email.checkValidity()) {
        emailError.innerHTML = 'Invalid Email';
        return false;
    } else {
        emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("contact-phone").value.trim();
    if (phone.length === 0) {
        phoneError.innerHTML = 'Enter phone number';
        return false;
    }
    if (isNaN(phone)) {
        phoneError.innerHTML = 'only digits';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = '10 digits required';
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}


function validatePassword() {
    const password = document.getElementById("contact-password").value;
    if (password.length == '') {
        passwordError.innerHTML = 'Enter Password';
        return false;
    } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.innerHTML = 'Invalid password';
        return false;
    } else {
        passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}


