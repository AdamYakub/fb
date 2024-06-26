// Attach an event listener to the form with id 'signUpForm' to handle the submit event
document.querySelector('.formcreation').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission behavior

    const errors = [];  // Initialize an array to store error messages

    // Retrieve and trim the values of form input fields
    const firstName = document.getElementById('name').value.trim();
    const lastName = document.getElementById('name').value.trim();
    const email = document.querySelector('.logindetails').value.trim();
    const confirmmail = document.querySelector('.confirmemail').value.trim();
    const password = document.querySelector('.password').value.trim();
    const confirmPassword = document.querySelector('.confirmPassword').value.trim();

    // Validate first name
    if (!firstName) {
        errors.push('First Name is required.');
    }

    // Validate last name
    if (!lastName) {
        errors.push('Last Name is required.');
    }

    // Validate email
    if (!email) {
        errors.push('Email is required.');
    } else if (!validateEmail(email)) {  // Check if the email format is valid
        errors.push('Email is not valid.');
    }

    if (email !== confirmmail) {
        errors.push('Email do not match');

    }

    // Validate password
    if (!password) {
        errors.push('Password is required.');
    } else if (password.length < 6) {  // Ensure the password is at least 6 characters long
        errors.push('Password must be at least 6 characters long.');
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        errors.push('Passwords do not match.');
    }

    // Get the error message container element
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';  // Clear any previous error messages

    // If there are any errors, display them in the error message container
    if (errors.length > 0) {
        errors.forEach(error => {
            const errorDiv = document.createElement('div');  // Create a new div for each error
            errorDiv.textContent = error;  // Set the error message text
            errorMessages.appendChild(errorDiv);  // Append the error message to the container
        });
    } else {
        alert('Form submitted successfully!');  // Alert the user that the form is submitted successfully
        // Here you would normally send the form data to the server
    }
});

// // Function to validate email format using a regular expression
// function validateEmail(email) {
//     const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;  // Regular expression for validating email format
//     return re.test(email);  // Return true if the email matches the pattern, false otherwise
// }