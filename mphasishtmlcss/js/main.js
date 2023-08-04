function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const loginButton = document.getElementById("login-button");

    // Check if textboxes are not empty
    if (email.trim() === "" || password.trim() === "") {
      loginButton.disabled = true;
      return;
    }

    // Check password length
    if (password.length < 6 || password.length > 10) {
      loginButton.disabled = true;
      return;
    }

    // Check if the password contains letters, numbers, and special characters
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/;
    if (!password.match(passwordRegex)) {
      loginButton.disabled = true;
      return;
    }

    // If all validations pass, enable the login button
    loginButton.disabled = false;
  }