// common.js

// Common variables
var password;

// Toggle password
function togglePassword(id) {
    var passwordField = document.getElementById(id);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Validation functions
function validateName() {
    var name = document.getElementById("contact-name").value.trim();
    var nameParts = name.split(' ');
    if (nameParts.length !== 2) {
        nameError.innerHTML = 'Full name is required';
        return false;
    } else {
        nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

function validateEmail() {
    var email = document.getElementById("contact-email");
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
    var phone = document.getElementById("contact-phone").value.trim();
    if (phone.length == 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }
    if (isNaN(phone)) {
        phoneError.innerHTML = 'Phone number must contain only digits';
        return false;
    }
    if (phone.length !== 10) {
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validatePassword() {
    password = document.getElementById("contact-password").value;
    if (password.length == '') {
        passwordError.innerHTML = 'Enter Password';
        return false;
    } else if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)) {
        passwordError.innerHTML = 'Invalid password. It must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
        return false;
    } else {
        passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
}

function validateReenterPassword() {
    var reEnterPwd = document.getElementById("contact-reenter-password").value;
    if (reEnterPwd.length == '') {
        rePasswordError.innerHTML = 'Re-Enter Password';
        return false;
    }
    if (reEnterPwd != password) {
        rePasswordError.innerHTML = 'Password not matching';
        return false;
    }
    rePasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}
