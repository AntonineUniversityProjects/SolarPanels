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
  
// If all checks pass, return true
return true;
}