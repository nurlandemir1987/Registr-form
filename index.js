
const form = document.querySelector('#registrationForm');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirmPassword');

function showError(input, errorMessage) {
    const errorContainer = document.querySelector(`#${input.id}Error`);
    errorContainer.textContent = errorMessage;
    input.classList.add('error');
    errorContainer.style.display = 'block';
}

function hideError(input) {
    const errorContainer = document.querySelector(`#${input.id}Error`);
    input.classList.remove('error');
    errorContainer.style.display = 'none';
}

function validateUsername() {
    if (usernameInput.value.length < 3 || usernameInput.value.length > 15) {
        showError(usernameInput, 'Username must be between 3 and 15 characters');
    } else {
        hideError(usernameInput);
    }
}

function validateEmail() {
    if (!emailInput.value.match(/^\S+@\S+\.\S+$/)) {
        showError(emailInput, 'Please enter a valid email address');
    } else {
        hideError(emailInput);
    }
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        showError(passwordInput, 'Password must be at least 6 characters long');
    } else {
        hideError(passwordInput);
    }
}

function validateConfirmPassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        showError(confirmPasswordInput, 'Passwords do not match');
    } else {
        hideError(confirmPasswordInput);
    }
}

usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (validateForm()) {
        const successMessage = document.createElement('p');
        successMessage.textContent = 'Registration successful!';
        successMessage.classList.add('success-message');
        form.appendChild(successMessage);
        form.reset();
        setTimeout(() => {
            successMessage.remove();
        }, 3000);
    }
});

function validateForm() {
    validateUsername();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    return !form.querySelector('.error');
}