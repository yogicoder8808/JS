// userData.js

// Function to display stored user data in table format
function displayStoredData() {
    const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userDataElement = document.getElementById('userData');
    
    userDataElement.innerHTML = '';
    
    storedData.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.password}</td>
            <td>
                <button class="edit-btn" onclick="editRow(${index})">Edit</button>
                <button class="delete-btn" onclick="deleteRow(${index})">Delete</button>
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
        if ((editedUser.username !== originalUser.username || editedUser.phone !== originalUser.phone) && editedUser.password !== originalUser.password) {
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
        } else {
            alert("No changes detected.");
            return;
        }
    } else {
        console.error('No edit index found in localStorage');
    }
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

function goBack() {
    window.location.href = "userData.html";
}

// Function to add a new user
function addUser(event) {
    event.preventDefault();

    const name = document.getElementById("contact-name").value.trim();
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
        window.location.href = "userData.html";
    } else {
        window.alert("Invalid input");
        return false;
    }
}

// Add event listener to the form submit button
document.getElementById("addUserForm").addEventListener("submit", addUser);
