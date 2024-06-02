// register.js

var loginPage = document.getElementById("login");
var registerPage = document.getElementById("register");
var btn = document.getElementById("btn");

function register() {
    loginPage.style.left = "-410px";
    registerPage.style.left = "30px";
    btn.style.left = "110px";
}

// Registration form validation
var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var passwordError = document.getElementById("pwd-error");
var rePasswordError = document.getElementById("rePassword-error");
var submitError = document.getElementById("submit-error");
var checkboxError = document.getElementById("checkbox-error");

function registerForm(event) {
    event.preventDefault();

    const checkbox = document.getElementById("checkbox-term");
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    password = document.getElementById("contact-password").value;

    if (!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateReenterPassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } else if (!checkbox.checked) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please agree';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } else {
        const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const isDuplicate = storedData.some(user => {
            return user.email === email;
        });
        if (isDuplicate) {
            window.alert("Duplicate entry: A user with the same email already exists.");
            return false;
        }
        const userData = {
            username: name,
            email: email,
            phone: phone,
            password: password
        };

        storedData.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(storedData));
        window.alert("User Registered Successfully");
        window.location.href = "form.html";
        displayStoredData();
        return true;
    }
}

document.getElementById("registerForm").addEventListener("submit", registerForm);

