const submitbtn = document.getElementById("submitbtn");
const nameerror = document.getElementById("nameerror");
const emailerror = document.getElementById("emailerror");
const passworderror = document.getElementById("passworderror");

submitbtn.addEventListener("click", e => {
  e.preventDefault();

  if (validatename() && validatemail() && validatepassword()) {
    alert("form submitted successfully");

    // Clear the form after submission
    document.getElementById("myForm").reset(); // Reset the form fields
    nameerror.innerHTML = "";  // Clear name error
    emailerror.innerHTML = ""; // Clear email error
    passworderror.innerHTML = ""; // Clear password error
    
    // Remove the icons
    document.querySelectorAll(".fa-xmark").forEach(icon => icon.style.display = "none");
    document.querySelectorAll(".fa-check").forEach(icon => icon.style.display = "none");
  }
});

function validatename() {
  let name = document.getElementById("name").value;

  if (name.length == 0) {
    nameerror.innerHTML = "name is required !";
    nameerror.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  // Improved regex: allows first and last names, multiple words, and spaces
  if (!name.match(/^[A-Za-z]+(?:\s+[A-Za-z]+)+$/)) {
    nameerror.innerHTML = "Write your full name (First and Last name required)";
    nameerror.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  nameerror.innerHTML = ""; // Clear error if validation is successful
  nameerror.previousElementSibling.classList.add("fa-check");
  return true;
}

// for email validation

function validatemail() {
  let email = document.getElementById("email").value;

  if (email.length == 0) {
    emailerror.innerHTML = "email is required !";
    emailerror.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  // Improved regex: allows first and last names, multiple words, and spaces
  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    emailerror.innerHTML = "enter valid e-mail";
    emailerror.previousElementSibling.classList.add("fa-xmark");
    return false;
  }

  emailerror.innerHTML = ""; // Clear error if validation is successful
  emailerror.previousElementSibling.classList.add("fa-check");
  return true;
}

// for password validation
function validatepassword() {
    let password = document.getElementById("password").value;
    let passworderror = document.getElementById("passworderror");
  
    // If password is empty
    if (password.length == 0) {
      passworderror.innerHTML = "Password is required!";
      passworderror.previousElementSibling.classList.add("fa-xmark"); // 
      return false;
    }
  
    // Regex for password validation: at least 8 characters, 1 uppercase, 1 lowercase, 1 number, 1 special character
    if (!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      passworderror.innerHTML = "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.";
      passworderror.previousElementSibling.classList.add("fa-xmark"); // Add cross icon
      return false;
    }
  
    // If password is valid
    passworderror.innerHTML = "";  // Clear error if validation is successful
    passworderror.previousElementSibling.classList.add("fa-check"); // Add check icon
    return true;
  }
  
  
  