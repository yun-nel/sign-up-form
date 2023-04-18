// Password validation
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    passwordError.textContent = "* Passwords do not match";
  } else {
    passwordError.textContent = "";
  }
}

confirmPassword.addEventListener("input", validatePassword);
