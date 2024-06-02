
// // Form and Register position

// var loginPage = document.getElementById("login")
// var regiterPage = document.getElementById("register")
// var btn = document.getElementById("btn")

// function register(){
//     loginPage.style.left="-410px";
//     regiterPage.style.left="30px";
//     btn.style.left= "110px";
// }
// function login(){
//     loginPage.style.left="40px";
//     regiterPage.style.left="450px";
//     btn.style.left= "0";
// }

// // Form and register form JS

// var loginEmailError = document.getElementById("login-email-error");
// var loginPwdError = document.getElementById("loginPwd-error");
// var loginSubmitError = document.getElementById("loginSubmit-error");

// var nameError = document.getElementById("name-error");
// var emailError = document.getElementById("email-error");
// var phoneError = document.getElementById("phone-error");
// var passwordError = document.getElementById("pwd-error");
// var rePasswordError = document.getElementById("rePassword-error");
// var submitError = document.getElementById("submit-error");
// var checkboxError = document.getElementById("checkbox-error");

// function validateName(){
//     var name = document.getElementById("contact-name").value.trim();
//     var nameParts = name.split(' ');
//     if (nameParts.length !== 2) {
//         nameError.innerHTML = 'Full name is required';
//         return false;
//     } else {
//         nameError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
// }

// function validateEmail(){
//     var email = document.getElementById("contact-email");
//     if (email.value === '') {
//         emailError.innerHTML = 'Email is required';
//         return false;
//     } else if (!email.checkValidity()) {
//         emailError.innerHTML = 'Invalid Email';
//         return false;
//     } else {
//         emailError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
// }

// function validatePhone() {
//     var phone = document.getElementById("contact-phone").value.trim();
//     if (phone.length == 0) {
//         phoneError.innerHTML = 'Phone number is required';
//         return false;
//     }
//     if (isNaN(phone)) {
//         phoneError.innerHTML = 'Phone number must contain only digits';
//         return false;
//     }
//     if (phone.length !== 10) {
//         phoneError.innerHTML = 'Phone number should be 10 digits';
//         return false;
//     }
//     phoneError.innerHTML = '<i class="fa fa-check-circle"></i>';
//     return true;
// }

// var password;
// function validatePassword(){
//     password=document.getElementById("contact-password").value;
//     if(password.length==''){
//         passwordError.innerHTML ='Enter Password';
//         return false;
//     }else if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
//         passwordError.innerHTML = 'Invalid password. It must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.';
//         return false;
//     }else{
//         passwordError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
    
// }

// function validateReenterPassword(){
//     var reEnterPwd = document.getElementById("contact-reenter-password").value;
//     if(reEnterPwd.length==''){
//         rePasswordError.innerHTML ='Re-Enter Password';
//         return false;
//     }
//     if(reEnterPwd != password){
//         rePasswordError.innerHTML ='Password not matching';
//         return false;
//     }
//     rePasswordError.innerHTML = '<i class="fa fa-check-circle"></i>';
//     return true;
// }



// function registerForm(event){

//     event.preventDefault();

//     const checkbox = document.getElementById("checkbox-term");
//     const name = document.getElementById("contact-name").value;
//     const email = document.getElementById("contact-email").value;
//     const phone = document.getElementById("contact-phone").value;
//     password=document.getElementById("contact-password").value;

//     if(!validateName() || !validateEmail() || !validatePhone() || !validatePassword() || !validateReenterPassword() ){
//         submitError.style.display='block';
//         submitError.innerHTML='Please fix error to submit';
//         setTimeout(()=>{
//             submitError.style.display='none';
//         },3000)
//         return false;
//     } else if (!checkbox.checked){
//         submitError.style.display='block';
//         submitError.innerHTML='Please agree';
//         setTimeout(()=>{
//             submitError.style.display='none';
//         },3000)
//         return false;
//     } else {
//         const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//         const isDuplicate = storedData.some(user => {
//             return user.email === email ;
//         });
//         if (isDuplicate) {
//             window.alert("Duplicate entry: A user with the same email already exists.");
//             return false;
//         }
//         const userData = {
//             username: name,
//             email: email,
//             phone: phone,
//             password: password 
//         };
        
//         // Add the new user data to the array
//         storedData.push(userData);
//         localStorage.setItem('registeredUsers', JSON.stringify(storedData));
//         window.alert("User Registered Successfully");
//         window.location.href = "form.html"; 
//         displayStoredData();
//         return true;
//     }
// }


// // Login form
//     var input = document.getElementById("login-email");
// function validateLoginEmail() {
//     if (input.value === '') {
//         loginEmailError.innerHTML = 'Email is required';
//         return false;
//     } else if (!input.checkValidity()) {
//         loginEmailError.innerHTML = 'Invalid Email';
//         return false;
//     } else {
//         loginEmailError.innerHTML = '<i class="fa fa-check-circle"></i>';
//         return true;
//     }
// }

//     var inputPassword=document.getElementById("login-password");
// function validateLoginPassword(){
//     if(inputPassword.value==0){
//         loginPwdError.innerHTML ='Enter Password';
//         return false;
//     }
//     if(!(inputPassword.value).match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/)){
//         loginPwdError.innerHTML ='Invalid password, Contains at least one uppercase letter,one lowercase letter, any one digit and one spl character';
//         return false;
//     }
//     loginPwdError.innerHTML = '<i class="fa fa-check-circle"></i>';
//     return true;
// }

// // Updated loginForm function to authenticate user

// function loginForm(event){

//     event.preventDefault();
//     const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];

//     const user = storedData.find(user => {
//         return user.email === input.value && user.password === inputPassword.value;
//     });

//     if(!validateLoginEmail() || !validateLoginPassword() ){
//         loginSubmitError.style.display='block';
//         loginSubmitError.innerHTML='Please fix error to login';
//         setTimeout(()=>{
//             loginSubmitError.style.display='none';
//         },3000)
//         return false;
//     }else if (!user) {
//         window.alert("Invalid Email or Password");
//         return false;
//     }else{
        
//         window.alert("User loged in Successfully");
//         window.location.href = "userData.html"; 
//         return true;
//     }
    
// }

// // Toggle password


// function togglePassword(id) {
//     var passwordField = document.getElementById(id);
//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//     } else {
//         passwordField.type = "password";
//     }
// }

// // CRUD Operation

// // Function to display stored user data in table format
// function displayStoredData() {
//     const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//     const userDataElement = document.getElementById('userData');
    
//     userDataElement.innerHTML = '';
    
//     storedData.forEach((user,index) => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${user.username}</td>
//             <td>${user.email}</td>
//             <td>${user.phone}</td>
//             <td>${user.password}</td>
//             <td>
//                 <button class="edit-btn" onclick="editRow(${index})" >Edit</button>
//                 <button class="delete-btn"onclick="deleteRow(${index})">Delete</button>
//             </td>
//         `;
//         userDataElement.appendChild(row);
//     });
// }
// displayStoredData();


// // Function to redirect to edit page
// function editRow(index) {
//     localStorage.setItem('editIndex', index);
//     window.location.href = "editUser.html";
// }

// // Function to delete user data
// function deleteRow(index) {
//     const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//     storedData.splice(index, 1);
//     localStorage.setItem('registeredUsers', JSON.stringify(storedData));
//     window.alert("User data deleted successfully!");
//     displayStoredData(); 
// }

// // Function to validate name on the edit page
// function validateEditName(name) {
//     const regex = /^[A-Za-z]{1,12}\s{1}[A-Za-z]{1,12}$/;
//     return regex.test(name);
// }

// // Function to validate email on the edit page
// function validateEditEmail(email) {
//     const regex = /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/;
//     return regex.test(email);
// }

// // Function to validate phone on the edit page
// function validateEditPhone(phone) {
//     const regex = /^[0-9]{10}$/;
//     return regex.test(phone);
// }

// // Function to validate password on the edit page
// function validateEditPassword(password) {
//     const regex = /^(?=.*[A-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*-?&])[A-Za-z\d@$!%*-?&]{8,}$/;
//     return regex.test(password);
// }

// // Function to load user data into the edit form
// function loadUserData() {
//     const index = localStorage.getItem('editIndex');
//     if (index !== null) {
//         const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//         const user = storedData[index];

//         if (user) {
//             document.getElementById('edit-name').value = user.username;
//             document.getElementById('edit-email').value = user.email;
//             document.getElementById('edit-phone').value = user.phone;
//             document.getElementById('edit-password').value = user.password;
//         } else {
//             console.error('User not found for index:', index);
//         }
//     } else {
//         console.error('No edit index found in localStorage');
//     }
// }
// function saveEditedUser(event) {
//     event.preventDefault();

//     const index = localStorage.getItem('editIndex');
//     if (index !== null) {
//         const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//         const editedUser = {
//             username: document.getElementById('edit-name').value,
//             email: document.getElementById('edit-email').value,
//             phone: document.getElementById('edit-phone').value,
//             password: document.getElementById('edit-password').value
//         };

//         if (!validateEditName(editedUser.username)) {
//             alert('Invalid username! Please enter a valid username.');
//             return;
//         }

//         if (!validateEditEmail(editedUser.email)) {
//             alert('Invalid email! Please enter a valid email address.');
//             return;
//         }

//         if (!validateEditPhone(editedUser.phone)) {
//             alert('Invalid phone number! Please enter a valid phone number.');
//             return;
//         }

//         const originalUser = storedData[index];
//         if ((editedUser.username !== originalUser.username || editedUser.phone !== originalUser.phone) && editedUser.password !== originalUser.password ) {
//             storedData[index] = editedUser; 
//             localStorage.setItem('registeredUsers', JSON.stringify(storedData));
//             alert("User data & Password changed. Logging out...");
//             localStorage.removeItem('loggedInUser');
//             window.location.href = "form.html";
//         } else if (editedUser.password !== originalUser.password) {
//             storedData[index].password = editedUser.password; 
//             localStorage.setItem('registeredUsers', JSON.stringify(storedData));
//             alert("Password changed. Logging out...");
//             localStorage.removeItem('loggedInUser');
//             window.location.href = "form.html"; 
//         } else if (editedUser.username !== originalUser.username || editedUser.phone !== originalUser.phone) {
//             storedData[index] = editedUser; 
//             localStorage.setItem('registeredUsers', JSON.stringify(storedData)); 
//             alert("User data edited & saved successfully!");
//             localStorage.removeItem('editIndex');
//             window.location.href = "userData.html";
//         }else {
//             alert("No changes detected.");
//             return;
//         }
//     } else {
//         console.error('No edit index found in localStorage');
//     }
// }


// // Function to cancel editing
// function cancelEdit() {
//     localStorage.removeItem('editIndex');
//     window.location.href = "userData.html";
// }

// function logout() {
//     localStorage.removeItem('loggedIn');
//     window.location.href = 'form.html';
// }



// function navigateToAddUser() {
//     window.location.href = "addUser.html";
// }

// // Function to go back to the previous page
// function goBack() {
//     // window.history.back();
//     window.location.href = "userData.html";
// }

// // Function to add a new user
// function addUser(event) {
//     event.preventDefault();

//     const name = document.getElementById("contact-name").value.trim();
//     const email = document.getElementById("contact-email").value;
//     const phone = document.getElementById("contact-phone").value;
//     const password = document.getElementById("contact-password").value;

//     // Validate inputs
//     const nameValid = validateName(name);
//     const emailValid = validateEmail(email);
//     const phoneValid = validatePhone(phone);
//     const passwordValid = validatePassword(password);

//     if (nameValid && emailValid && phoneValid && passwordValid) {
//         const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
//         const isDuplicate = storedData.some(user => {
//             return user.email === email;
//         });

//         if (isDuplicate) {
//             window.alert("Duplicate entry: A user with the same email already exists.");
//             return false;
//         }

//         const userData = {
//             username: name,
//             email: email,
//             phone: phone,
//             password: password 
//         };

//         storedData.push(userData);
//         localStorage.setItem('registeredUsers', JSON.stringify(storedData));
//         window.alert("User Registered Successfully");
//         window.location.href = "userData.html";
//     } else {
//         window.alert("Invalid input");
//         // Error messages are handled by the validation functions
//         return false;
//     }
// }

// // Validation functions (assuming these are already defined in your script.js)

// // Add event listener to the form submit button
// document.getElementById("addUserForm").addEventListener("submit", addUser);


