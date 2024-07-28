document.getElementById('submit').addEventListener('click', (event) => {
    const username = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    

    clearErrors();

    let valid = true;
    switch (true) {
        case username === "":
            showError('usernameError', "Please enter a username");
            valid = false;
    
            break;
             case email === "":
            showError('emailError', "Please enter an email");
            valid = false;
            break;
        case password === "":
            showError('passwordError', "Please enter a password");
            valid = false;
            break;
        default:
            // All fields are valid
            break;
    }

    // Prevent form submission if there are validation errors
    if (!valid) {
        event.preventDefault();
    }else{

    const user ={
        username:username,
        email:email,
        password:password
    }
    
    localStorage.setItem("user",JSON.stringify(user));
    console.log('user',user);

    window.location.href = 'login.html';///
}
    



});







// Function to display error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.style.color = 'red';
    errorElement.innerHTML = message;
}

// Function to clear all error messages
function clearErrors() {
    document.querySelectorAll('.error').forEach(el => {
        el.innerHTML = '';  // Clear the error message
       
    });
}


document.getElementById('text').addEventListener('input', () => {
    const username = document.getElementById('text').value;
    if (username !== "") {
        clearError('usernameError');
    }
});

document.getElementById('email').addEventListener('input', () => {
    const email = document.getElementById('email').value;
    if (email !== "") {
        clearError('emailError');
    }
});

document.getElementById('password').addEventListener('input', () => {
    const password = document.getElementById('password').value;
    if (password !== "") {
        clearError('passwordError');
    }
});

// Function to clear a specific error message
function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    errorElement.innerHTML = '';
}

// for local storage


