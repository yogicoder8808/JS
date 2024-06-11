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
    if (trimmedName === '') {
        nameError.innerHTML = 'Please provide your name';
        return false;
    }
    const nameParts = trimmedName.split(' ');
    if (nameParts.length < 2) {
        nameError.innerHTML = 'Please enter your full name';
        return false;
    } else {
        nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}


function validateEmail() {
    const email = document.getElementById("contact-email");
    if (email.value === '') {
        emailError.innerHTML = 'Please provide your email address';
        return false;
    } else if (!email.checkValidity()) {
        emailError.innerHTML = 'Please enter a valid email address';
        return false;
    } else {
        emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("contact-phone").value.trim();
    if (phone.length === 0) {
        phoneError.innerHTML = 'Please provide your phone number';
        return false;
    }
    if (isNaN(phone)) {
        phoneError.innerHTML = 'Please enter only digits for the phone number';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Please enter a 10-digit phone number';
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}


function validatePassword() {
    const password = document.getElementById("contact-password").value;
    if (password.length == '') {
        passwordError.innerHTML = 'Please provide your password';
        return false;
    }else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
        passwordError.innerHTML = 'Please enter a valid password';
        return false;
    }else{
        passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }     
}



