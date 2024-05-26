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
var rePasswordError = document.getElementById("re-pwd-error");
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
        passwordError.innerHTML ='Password must be strong and minimum 8 characters';
        return false;
    }
    if(!password.match(/^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
        passwordError.innerHTML ='Invalid Password';
        return false;
    }
    passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateReenterPassword(){
    var reenter_password=document.getElementById("contact-reenter_password").value;
    if(reenter_password.length==0){
        rePasswordError.innerHTML ='Enter Password';
        return false;
    }
    if(reenter_password != password){
        rePasswordError.innerHTML ='Password must be same as password';
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
        loginPwdError.innerHTML ='Password must be strong and minimum 8 characters';
        return false;
    }
    if(!inputPassword.match(/^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
        loginPwdError.innerHTML ='Invalid Password';
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

    const emptyRow = document.createElement('tr');
    emptyRow.innerHTML = `
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    `;
    userDataElement.appendChild(emptyRow);
    
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


function validateName(name) {
    const regex = /^[A-Za-z]{1,12}\s{1}[A-Za-z]{1,12}$/;
    return regex.test(name);
}

function validateEmail(email) {
    const regex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
    return regex.test(email);
}

function validatePhone(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}

function validatePassword(password) {
    const regex = /^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/;
    return regex.test(password);
}


// Function to edit user data
function editRow(index) {
    const userDataElement = document.getElementById('userData');
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const user = storedData[index];
    
    // Create an edit form
    const editForm = document.createElement('form');
    editForm.innerHTML = `
        <input type="text" id="edit-name" value="${user.username}" placeholder="Username" required><br>
        <input type="email" id="edit-email" value="${user.email}" placeholder="Email" required><br>
        <input type="tel" id="edit-phone" value="${user.phone}" placeholder="Phone Number" required><br>
        <input type="password" id="edit-password" value="${user.password}" placeholder="Password" required><br>
        <button onclick="saveRow(${index})">Save</button>
        <button onclick="cancelEdit(${index})">Cancel</button>
    `;
    
    // Replace the row with the edit form
    const row = userDataElement.rows[index + 1]; 
    if (row) {
        row.innerHTML = '';
        const cell = row.insertCell(0);
        cell.colSpan = 5;
        cell.appendChild(editForm);
    } else {
        console.error('Row not found for index:', index);
    }
}




// Function to save edited user data
function saveRow(index) {
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const editForm = document.getElementById('userData').rows[index + 1].cells[0].getElementsByTagName('form')[0];
    const editedUser = {
        username: editForm.querySelector('#edit-name').value,
        email: editForm.querySelector('#edit-email').value,
        phone: editForm.querySelector('#edit-phone').value,
        password: editForm.querySelector('#edit-password').value
    };
 
      if (!validateName(editedUser.username)) {
        alert('Invalid username! Please enter a valid username.');
        return;
    }

    if (!validateEmail(editedUser.email)) {
        alert('Invalid email! Please enter a valid email address.');
        return;
    }

    if (!validatePhone(editedUser.phone)) {
        alert('Invalid phone number! Please enter a valid phone number.');
        return;
    }

    if (!validatePassword(editedUser.password)) {
        alert('Invalid password! Please enter a valid password.');
        return;
    }

    storedData[index] = editedUser;
    localStorage.setItem('registeredUsers', JSON.stringify(storedData));
    displayStoredData();
}

// Function to cancel editing
function cancelEdit(index) {
    displayStoredData();
}


// Function to delete user data
function deleteRow(index) {
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    storedData.splice(index, 1);
    localStorage.setItem('registeredUsers', JSON.stringify(storedData));
    displayStoredData(); 
}


