const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

// Listen and prevent default reloading
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validate Email
  if (emailVal === "") {
    document.getElementById("emailErr").textContent = "Email cannot be empty";
    email.classList.add("emailBad");
    email.classList.remove("emailGood");
  } else if (!emailRegex.test(emailVal)) {
    document.getElementById("emailErr").textContent =
      "Please enter a valid email!";
    email.classList.add("emailBad");
    email.classList.remove("emailGood");
  } else {
    document.getElementById("emailErr").textContent = "✅";
    email.classList.remove("emailBad");
    email.classList.add("emailGood");
  }

  // Validate Password

  if (password.value.length < 8) {
    document.getElementById("passErr").textContent =
      "A minimun of 8 characters is required!";
    password.classList.add("emailBad");
    password.classList.remove("emailGood");
  } else if (!passwordRegex.test(passsword.value)) {
    document.getElementById("passErr").textContent =
      "This pattern requires at least one lowercase letter, one uppercase letter, one number, one special character, and a minimum length of 8 characters";
    password.classList.add("emailBad");
    password.classList.remove("emailGood");
  } else {
    document.getElementById("passErr").textContent = "✅";
    password.classList.remove("emailBad");
    password.classList.add("emailGood");
  }
});
