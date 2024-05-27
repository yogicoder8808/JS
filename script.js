
// Form and Register position

var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")

function register(){
    x.style.left="-410px";
    y.style.left="30px";
    z.style.left= "110px";
}
function login(){
    x.style.left="40px";
    y.style.left="450px";
    z.style.left= "0";
}

// Form and register form JS

var name_emailError = document.getElementById("name-email-error");
var loginPwdError = document.getElementById("loginPwd-error");
var loginSubmitError = document.getElementById("loginSubmit-error");

var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var passwordError = document.getElementById("pwd-error");
var rePasswordError = document.getElementById("rePassword-error");
var submitError = document.getElementById("submit-error");
var checkboxError = document.getElementById("checkbox-error");

function validateName(){
    var name=document.getElementById("contact-name").value;
    if(name.length==0){
        nameError.innerHTML ='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]{1,12}\s{1}[A-Za-z]{1,12}$/)){
        nameError.innerHTML ='Full name is required';
        return false;
    }
    nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var email=document.getElementById("contact-email").value;
    if(email.length==0){
        emailError.innerHTML ='Email is required';
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)){
        emailError.innerHTML ='Email Invalid';
        return false;
    }
    emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}


function validatePhone(){
    var phone=document.getElementById("contact-phone").value;
    if(phone.length == 0){
        phoneError.innerHTML ='Phone no is required';
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML ='Phone number should be 10 digit';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML ='Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

var password;
function validatePassword(){
    password=document.getElementById("contact-password").value;
    if(password.length==0){
        passwordError.innerHTML ='Enter Password';
        return false;
    }
    if(!password.match(/^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
        passwordError.innerHTML ='Password must be strong and minimum 8 characters';
        return false;
    }
    passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateReenterPassword(){
    var reenter_password=document.getElementById("contact-reenter_password").value;
    if(reenter_password.length==0){
        rePasswordError.innerHTML ='Re-Enter Password';
        return false;
    }
    if(reenter_password != password){
        rePasswordError.innerHTML ='Password not matching';
        return false;
    }
    rePasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}



function registerForm(event){

    event.preventDefault();

    const checkbox = document.getElementById("checkbox-term");
    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    password=document.getElementById("contact-password").value;

    if(!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateReenterPassword() ){
        submitError.style.display='block';
        submitError.innerHTML='Please fix error to submit';
        setTimeout(()=>{
            submitError.style.display='none';
        },3000)
        return false;
    } else if (!checkbox.checked){
        submitError.style.display='block';
        submitError.innerHTML='Please agree';
        setTimeout(()=>{
            submitError.style.display='none';
        },3000)
        return false;
    } else {
        const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const isDuplicate = storedData.some(user => {
            return user.username === name || user.email === email || user.phone === phone;
        });
        if (isDuplicate) {
            window.alert("Duplicate entry: A user with the same name, email, or phone already exists.");
            return false;
        }
        const userData = {
            username: name,
            email: email,
            phone: phone,
            password: password 
        };
        
        // Add the new user data to the array
        storedData.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(storedData));
        window.alert("User Registered Successfully");
        window.location.href = "form.html"; 
        displayStoredData();
        return true;
    }
}



// Login form

function validateNameOrEmail() {
    var input = document.getElementById("input").value;
    var nameRegex = /^[A-Za-z]{1,12}\s{1}[A-Za-z]{1,12}$/;
    var emailRegex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;

    if (input.length == 0) {
        name_emailError.innerHTML = 'Name or Email is required';
        return false;
    }else if(nameRegex.test(input)){
        name_emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }else if(emailRegex.test(input)){
        name_emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
        return true;
    }else {
        name_emailError.innerHTML = 'Invalid Name or Email';
        return false;
    }

}


function validateLoginPassword(){
    var inputPassword=document.getElementById("login-password").value;
    if(inputPassword.length==0){
        loginPwdError.innerHTML ='Enter Password';
        return false;
    }
    if(!inputPassword.match(/^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
        loginPwdError.innerHTML ='Invalid password';
        return false;
    }
    loginPwdError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

// Updated loginForm function to authenticate user

function loginForm(event){

    event.preventDefault();

    const input = document.getElementById("input").value;
    const inputPassword = document.getElementById("login-password").value;
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const user = storedData.find(user => {
        return (user.username === input || user.email === input) && user.password === inputPassword;
    });

    if(!validateNameOrEmail() || !validateLoginPassword() ){
        loginSubmitError.style.display='block';
        loginSubmitError.innerHTML='Please fix error to login';
        setTimeout(()=>{
            loginSubmitError.style.display='none';
        },3000)
        return false;
    }else if (!user) {
        window.alert("Invalid username/email or password");
        return false;
    }else{
        
        window.alert("User loged in Successfully");
        window.location.href = "userData.html"; 
        return true;
    }
    
}

// Toggle password


function togglePassword(id) {
    var passwordField = document.getElementById(id);
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// CRUD Operation
