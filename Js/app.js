const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

const emailErr = document.getElementById("emailErr");
const passErr = document.getElementById("passErr");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Validate email
function validateEmail() {
  const emailVal = email.value.trim();

  if (emailVal === "") {
    emailErr.textContent = "Email cannot be empty";
    email.classList.add("invalid");
    email.classList.remove("valid");
    return false;
  }

  if (!emailRegex.test(emailVal)) {
    emailErr.textContent = "Please enter a valid email!";
    email.classList.add("invalid");
    email.classList.remove("valid");
    return false;
  }

  emailErr.textContent = "✅";
  email.classList.remove("invalid");
  email.classList.add("valid");

  return true;
}

// Validate password
function validatePassword() {
  if (!passwordRegex.test(password.value)) {
    passErr.textContent =
      "Password requires at least one lowercase letter, one uppercase letter, one number, one special character, and a minimum length of 8 characters";

    password.classList.add("invalid");
    password.classList.remove("valid");

    return false;
  }

  passErr.textContent = "✅";
  password.classList.remove("invalid");
  password.classList.add("valid");

  return true;
}

// Live email validation
email.addEventListener("input", validateEmail);

// Live password validation
password.addEventListener("input", validatePassword);

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailIsValid = validateEmail();
  const passwordIsValid = validatePassword();

  if (emailIsValid && passwordIsValid) {
    alert("Login successful");
  }
});
