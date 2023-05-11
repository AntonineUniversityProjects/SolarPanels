function validateForm() {
        
  var email = document.getElementById("email").value;
  var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Check if the email is empty
  if (email == "") {
    alert("Email field must be filled out");
    return false;
  }
  // Check if the email is in the correct format
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");
    return false;
  }
  // Check if the password is empty
// Get the value of the input field with id="password"
var password = document.getElementById("password").value;
// Regular expression to check if the password is strong enough
var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// Check if the password is empty
if (password == "") {
alert("Password field must be filled out");
return false;
}
// Check if the password is strong enough
if (!password.match(passwordRegex)) {
alert("enter a strong passowrd(with numbers and upper cases)");
return false;
}

// If all checks pass, return true
return true;
}
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
  // toggle the type attribute
  const type = password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  // toggle the icon
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit', function (e) {
  e.preventDefault();
});