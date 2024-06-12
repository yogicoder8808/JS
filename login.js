//login.js

class LoginPage {
    constructor() {
        this.loginEmailError = document.getElementById("login-email-error");
        this.loginPasswordError = document.getElementById("login-password-error");
        this.inputEmail = document.getElementById("login-email");
        this.inputPassword = document.getElementById("login-password");
        this.loginSubmitError = document.getElementById("login-submit-error");
    }

    login() {
        document.getElementById("login-form").style.left = "40px";
        document.getElementById("register-form").style.left = "450px";
        document.getElementById("btn").style.left = "0";
    }

     validateLoginEmail() {
        if (this.inputEmail.value === '') {
            this.loginEmailError.innerHTML = 'Please provide your email address';
            return false;
        } else if (!this.inputEmail.checkValidity()) {
            this.loginEmailError.innerHTML = 'Please enter a valid email address';
            return false;
        } else {
            this.loginEmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
            return true;
        }
    }

    validateLoginPassword() {
        if (this.inputPassword.value === '') {
            this.loginPasswordError.innerHTML = 'Please provide your password';
            return false;
        }
        if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.inputPassword.value)) {
            this.loginPasswordError.innerHTML = '<i class="fa fa-info-circle" onclick="CommonFunctions.showPasswordRequirements()"></i>';
            return false;
        }
        this.loginPasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }

    loginForm(event) {
        event.preventDefault();
        if (!this.validateLoginEmail() || !this.validateLoginPassword()) {
            this.loginSubmitError.style.display = "block";
            this.loginSubmitError.innerHTML = "Please correct the errors to login.";
            setTimeout(() => {
                this.loginSubmitError.style.display = "none";
            }, 3000);
            return false;
        } else {
            const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            const user = storedData.find(user => {
                return user.email === this.inputEmail.value && user.password === this.inputPassword.value;
            });

            if (!user) {
                window.alert("Invalid email or password. Please verify your credentials.");
                return false;
            } else {
                window.alert("User logged in Successfully");
                window.location.href = "userData.html";
                return true;
            }
        }
    }
}

const loginPageInstance = new LoginPage();

