const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  var firstName = fname.value.trim();
  var lastName = lname.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = password.value.trim();

  if (firstName === "") {
    errorFunc(fname, "First Name cannot be empty");
  } else {
    successFunc(fname);
  }
  if (lastName === "") {
    errorFunc(fname, "Last Name cannot be empty");
  } else {
    successFunc(lname);
  }
  if (emailValue === "") {
    errorFunc(fname, "email cannot be empty");
  } else {
    successFunc(email);
  }
  if (passwordValue === "") {
    errorFunc(fname, "password cannot be empty");
  } else {
    successFunc(password);
  }
  e.preventDefault();
});

function errorFunc(req, message) {
  const formControl = req.parentElement;
  const span = formControl.querrySelector("span");
  span.innerText = message;
  req.className += "error";
  span.className += "error-text";
}

function successFunc(req) {
  req.className += "success";
}
