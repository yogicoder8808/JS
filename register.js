//register.js

class RegisterPage {
    constructor() {
    }

    register() {
        document.getElementById("login-form").style.left = "-410px";
        document.getElementById("register-form").style.left = "30px";
        document.getElementById("btn").style.left = "110px";
    }

    // Method to handle form submission
    registerForm(event) {
        event.preventDefault();

        const submitError = document.getElementById("submit-error");
        const { userData, isValid } = CommonFunctions.getUserFormData();
        const checkbox = document.getElementById("checkbox-term");

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







