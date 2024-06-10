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
    const user = storedData[index];
    const confirmation = window.confirm(`Are you sure you want to delete this user data "${user.email}" ?`);

    if (confirmation){
        storedData.splice(index, 1);
        localStorage.setItem('registeredUsers', JSON.stringify(storedData));
        displayStoredData();
    }  
}

// Function to load user data into the edit form
function loadUserData() {
    const index = localStorage.getItem('editIndex');
    if (index !== null) {
        const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const user = storedData[index];

        if (user) {
            document.getElementById('contact-name').value = user.username;
            document.getElementById('contact-email').value = user.email;
            document.getElementById('contact-phone').value = user.phone;
            document.getElementById('contact-password').value = user.password;
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
            username: document.getElementById('contact-name').value,
            email: document.getElementById('contact-email').value,
            phone: document.getElementById('contact-phone').value,
            password: document.getElementById('contact-password').value
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
        const originalUser = storedData[index];
        if (!validatePassword(editedUser.password)) {
            alert('Invalid Input');
            return;
        }

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


