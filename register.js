//register.js

class RegisterPage {
    constructor() {
    }

    register() {
        document.getElementById("login-form").style.left = "-410px";
        document.getElementById("register-form").style.left = "30px";
        document.getElementById("btn").style.left = "110px";
    }

    // Helper function to get form data and validate inputs
    static getFormData() {
        const checkbox = document.getElementById("checkbox-term");
        const nameInput = document.getElementById("user-name");
        const emailInput = document.getElementById("user-email");
        const phoneInput = document.getElementById("user-phone");
        const passwordInput = document.getElementById("user-password");
        const confirmPasswordInput = document.getElementById("user-confirm-password");

        const isValidName = CommonFunctions.validateName(nameInput);
        const isValidEmail = CommonFunctions.validateEmail(emailInput);
        const isValidPhone = CommonFunctions.validatePhone(phoneInput);
        const isValidPassword = CommonFunctions.validatePassword(passwordInput);
        const isValidConfirmPassword = CommonFunctions.validateConfirmPassword(confirmPasswordInput);

        const isValid = isValidName && isValidEmail && isValidPhone && isValidPassword && isValidConfirmPassword;

        const userData = {
            username: nameInput.value.trim(),
            email: emailInput.value,
            phone: phoneInput.value.trim(),
            password: passwordInput.value
        };

        return { userData, isValid, checkbox };
    }

    // Method to handle form submission
    registerForm(event) {
        event.preventDefault();

        const submitError = document.getElementById("submit-error");
        const { userData, isValid, checkbox } = RegisterPage.getFormData();

        if (!isValid) {
            submitError.style.display = "block";
            submitError.innerHTML = "Please correct the errors to submit the form.";
            setTimeout(() => {
                submitError.style.display = "none";
            }, 3000);
            return false;
        } else if (!checkbox.checked) {
            submitError.style.display = "block";
            submitError.innerHTML = "Please accept the terms and conditions to submit the form.";
            setTimeout(() => {
                submitError.style.display = "none";
            }, 3000);
            return false;
        } else {
            const storedData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const isDuplicate = storedData.some((user) => user.email === userData.email);

            if (isDuplicate) {
                window.alert("Duplicate entry: A user with the same email already exists.");
                return false;
            }

            storedData.push(userData);
            localStorage.setItem("registeredUsers", JSON.stringify(storedData));
            window.alert("User Registered Successfully");
            window.location.href = "form.html";
            return true;
        }
    }
}

// Initialize the RegisterPage instance
const registerPageInstance = new RegisterPage();







