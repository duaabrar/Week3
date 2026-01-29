const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";

  let isValid = true;

  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  const emailRegex = /.+@.+\..+/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent = "Invalid email format";
    isValid = false;
  }

  const passwordRegex = /[0-9].{5,}/;
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    isValid = false;
  } else if (!passwordRegex.test(password)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters & contain a number";
    isValid = false;
  }

  if (isValid) {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);

    alert("Form Submitted Successfully!");

    form.reset();
  }
});
