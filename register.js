// register.js

function register() {
    loginPage.style.left = "-410px";
    registerPage.style.left = "30px";
    btn.style.left = "110px";
}

function validateRepeatPassword() {
    const password = document.getElementById("contact-password").value;
    const reEnterPwd = document.getElementById("contact-repeat-password").value;
    if (reEnterPwd.length == '') {
        rePasswordError.innerHTML = 'Re-Enter Password';
        return false;
    }
    if (reEnterPwd != password) {
        rePasswordError.innerHTML = 'P/w not matching';
        return false;
    }
    rePasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

// Registration form validation
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const rePasswordError = document.getElementById("repeat-pwd-error");
const submitError = document.getElementById("submit-error");
const checkboxError = document.getElementById("checkbox-error");

function registerForm(event) {
    event.preventDefault();

    const checkbox = document.getElementById("checkbox-term");
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const password = document.getElementById("contact-password").value;

    if (!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateRepeatPassword()) {
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



