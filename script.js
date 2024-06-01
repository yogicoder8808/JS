
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

// Function to display stored user data in table format
function displayStoredData() {
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userDataElement = document.getElementById('userData');
    
    userDataElement.innerHTML = '';
    
    storedData.forEach((user,index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.password}</td>
            <td>
                <button class="edit-btn" onclick="editRow(${index})" >Edit</button>
                <button class="delete-btn"onclick="deleteRow(${index})">Delete</button>
            </td>
        `;
        userDataElement.appendChild(row);
    });
}
displayStoredData();


// Function to redirect to edit page
function editRow(index) {
    localStorage.setItem('editIndex', index);
    window.location.href = "editUser.html";
}

// Function to delete user data
function deleteRow(index) {
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('registeredUsers', JSON.stringify(storedData));
    window.alert("User data deleted successfully!");
    displayStoredData(); 
}

// Function to validate name on the edit page
function validateEditName(name) {
    const regex = /^[A-Za-z]{1,12}\s{1}[A-Za-z]{1,12}$/;
    return regex.test(name);
}

// Function to validate email on the edit page
function validateEditEmail(email) {
    const regex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
    return regex.test(email);
}

// Function to validate phone on the edit page
function validateEditPhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}

// Function to validate password on the edit page
function validateEditPassword(password) {
    const regex = /^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/;
    return regex.test(password);
}

// Function to load user data into the edit form
function loadUserData() {
    const index = localStorage.getItem('editIndex');
    if (index !== null) {
        const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const user = storedData[index];

        if (user) {
            document.getElementById('edit-name').value = user.username;
            document.getElementById('edit-email').value = user.email;
            document.getElementById('edit-phone').value = user.phone;
            document.getElementById('edit-password').value = user.password;
        } else {
            console.error('User not found for index:', index);
        }
    } else {
        console.error('No edit index found in localStorage');
    }
}
function saveEditedUser(event) {
    event.preventDefault();

    const index = localStorage.getItem('editIndex');
    if (index !== null) {
        const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const editedUser = {
            username: document.getElementById('edit-name').value,
            email: document.getElementById('edit-email').value,
            phone: document.getElementById('edit-phone').value,
            password: document.getElementById('edit-password').value
        };

        if (!validateEditName(editedUser.username)) {
            alert('Invalid username! Please enter a valid username.');
            return;
        }

        if (!validateEditEmail(editedUser.email)) {
            alert('Invalid email! Please enter a valid email address.');
            return;
        }

        if (!validateEditPhone(editedUser.phone)) {
            alert('Invalid phone number! Please enter a valid phone number.');
            return;
        }

        const originalUser = storedData[index];
        if ((editedUser.username !== originalUser.username || editedUser.phone !== originalUser.phone) && editedUser.password !== originalUser.password ) {
            storedData[index] = editedUser; 
            localStorage.setItem('registeredUsers', JSON.stringify(storedData));
            alert("User data & Password changed. Logging out...");
            localStorage.removeItem('loggedInUser');
            window.location.href = "form.html";
        } else if (editedUser.password !== originalUser.password) {
            storedData[index].password = editedUser.password; 
            localStorage.setItem('registeredUsers', JSON.stringify(storedData));
            alert("Password changed. Logging out...");
            localStorage.removeItem('loggedInUser');
            window.location.href = "form.html"; 
        } else if (editedUser.username !== originalUser.username || editedUser.phone !== originalUser.phone) {
            storedData[index] = editedUser; 
            localStorage.setItem('registeredUsers', JSON.stringify(storedData)); 
            alert("User data edited & saved successfully!");
            localStorage.removeItem('editIndex');
            window.location.href = "userData.html";
        }else {
            alert("No changes detected.");
            return;
        }
    } else {
        console.error('No edit index found in localStorage');
    }
}


// Function to cancel editing
function cancelEdit() {
    localStorage.removeItem('editIndex');
    window.location.href = "userData.html";
}

function logout() {
    localStorage.removeItem('loggedIn');
    window.location.href = 'form.html';
}



function navigateToAddUser() {
    window.location.href = "addUser.html";
}

// Function to go back to the previous page
function goBack() {
    // window.history.back();
    window.location.href = "userData.html";
}

// Function to add a new user
function addUser(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value;
    const email = document.getElementById("contact-email").value;
    const phone = document.getElementById("contact-phone").value;
    const password = document.getElementById("contact-password").value;

    // Validate inputs
    const nameValid = validateName(name);
    const emailValid = validateEmail(email);
    const phoneValid = validatePhone(phone);
    const passwordValid = validatePassword(password);

    if (nameValid && emailValid && phoneValid && passwordValid) {
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

        storedData.push(userData);
        localStorage.setItem('registeredUsers', JSON.stringify(storedData));
        window.alert("User Registered Successfully");
        window.location.href = "userData.html";
    } else {
        window.alert("Invalid input");
        // Error messages are handled by the validation functions
        return false;
    }
}

// Validation functions (assuming these are already defined in your script.js)

// Add event listener to the form submit button
document.getElementById("addUserForm").addEventListener("submit", addUser);
