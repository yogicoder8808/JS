class UserDataPage {
    constructor() {}

    static displayStoredData() {
        const storedData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const userDataElement = document.getElementById("userData");

        userDataElement.innerHTML = "";

        storedData.forEach((user, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.phone}</td>
                <td>${user.password}</td>
                <td>
                    <button class="edit-btn" onclick="UserDataPage.editRow(${index})">Edit</button>
                    <button class="delete-btn" onclick="UserDataPage.deleteRow(${index})">Delete</button>
                </td>
            `;
            userDataElement.appendChild(row);
        });
    }

    static editRow(index) {
        localStorage.setItem("editIndex", index);
        window.location.href = "editUser.html";
    }

    static deleteRow(index) {
        const storedData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
        const user = storedData[index];
        const confirmation = window.confirm(`Are you sure you want to delete this user "${user.email}" ?`);

        if (confirmation) {
            storedData.splice(index, 1);
            localStorage.setItem("registeredUsers", JSON.stringify(storedData));
            UserDataPage.displayStoredData();
        }
    }

    static loadUserData() {
        const index = localStorage.getItem("editIndex");
        if (index !== null) {
            const storedData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const user = storedData[index];

            if (user) {
                document.getElementById("user-name").value = user.username;
                document.getElementById("user-email").value = user.email;
                document.getElementById("user-phone").value = user.phone;
                document.getElementById("user-password").value = user.password;
            } else {
                console.error("User not found for index:", index);
            }
        } else {
            console.error("No edit index found in localStorage");
        }
    }

    static saveEditedUser(event) {
        event.preventDefault();

        const index = localStorage.getItem("editIndex");
        if (index !== null) {
            const storedData = JSON.parse(localStorage.getItem("registeredUsers")) || [];
            const editedUser = {
                username: document.getElementById("user-name").value.trim(),
                email: document.getElementById("user-email").value,
                phone: document.getElementById("user-phone").value.trim(),
                password: document.getElementById("user-password").value,
            };

            if (!CommonFunctions.validateName(document.getElementById("user-name")) ||
                !CommonFunctions.validateEmail(document.getElementById("user-email")) ||
                !CommonFunctions.validatePhone(document.getElementById("user-phone")) ||
                !CommonFunctions.validatePassword(document.getElementById("user-password"))) {
                alert("Invalid input! Please enter valid data.");
                return;
            }

            const originalUser = storedData[index];

            if (editedUser.password !== originalUser.password) {
                alert(
                    "Password has been updated. For security reasons, you will now be logged out."
                );
                localStorage.removeItem("loggedInUser");
                window.location.href = "form.html";
            } else {
                storedData[index] = editedUser;
                localStorage.setItem("registeredUsers", JSON.stringify(storedData));
                alert("User data has been successfully updated and saved.");
                localStorage.removeItem("editIndex");
                window.location.href = "userData.html";
            }
        } else {
            console.error("No edit index found in localStorage");
        }
    }

    static cancelEdit() {
        localStorage.removeItem("editIndex");
        window.location.href = "userData.html";
    }

    static logout() {
        localStorage.removeItem("loggedIn");
        window.location.href = "form.html";
    }

    static navigateToAddUser() {
        window.location.href = "addUser.html";
    }

    static goBack() {
        window.location.href = "userData.html";
    }

    static addUser(event) {
        event.preventDefault();

        const name = document.getElementById("user-name").value.trim();
        const email = document.getElementById("user-email").value;
        const phone = document.getElementById("user-phone").value;
        const password = document.getElementById("user-password").value;

        // Validate inputs
        const isValidName = CommonFunctions.validateName(document.getElementById("user-name"));
        const isValidEmail = CommonFunctions.validateEmail(document.getElementById("user-email"));
        const isValidPhone = CommonFunctions.validatePhone(document.getElementById("user-phone"));
        const isValidPassword = CommonFunctions.validatePassword(document.getElementById("user-password"));

        if (isValidName && isValidEmail && isValidPhone && isValidPassword) {
            const storedData = JSON.parse(localStorage.getItem('registeredUsers')) || [];
            const isDuplicate = storedData.some(user => user.email === email);

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
}

// Ensure the stored data is displayed when the page is loaded
document.addEventListener('DOMContentLoaded', () => {
    UserDataPage.displayStoredData();
});
