// register.js

function register() {
    loginPage.style.left = "-410px";
    registerPage.style.left = "30px";
    btn.style.left = "110px";
}

function validateRepeatPassword() {
    const password = document.getElementById("user-password").value;
    const confirmPassword = document.getElementById("user-confirm-password").value;
    if (confirmPassword.length == '') {
        confirmPasswordError.innerHTML = 'Confirm your password to match the one entered above.';
        return false;
    }else if (confirmPassword != password) {
        confirmPasswordError.innerHTML = 'Passwords do not match. Please try again.';
        return false;
    }else{
        confirmPasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }
    }
    

// Registration form validation
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const submitError = document.getElementById("submit-error");
const checkboxError = document.getElementById("checkbox-error");

function registerForm() {
    
    const checkbox = document.getElementById("checkbox-term");
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const phone = document.getElementById("user-phone").value;
    const password = document.getElementById("user-password").value;

    if (!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateRepeatPassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please correct the errors to submit the form.';
        setTimeout(() => {
            submitError.style.display = 'none';
        }, 3000);
        return false;
    } else if (!checkbox.checked) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please accept the terms and conditions to submit the form.';
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


