// 1. Event Handling

// Click
document.getElementById("colorBtn").addEventListener("click", function() {
  this.style.backgroundColor = "lightgreen";
  this.textContent = "Clicked!";
});

// Hover
document.getElementById("hoverText").addEventListener("mouseover", function() {
  this.style.color = "blue";
});
document.getElementById("hoverText").addEventListener("mouseout", function() {
  this.style.color = "black";
});

// Keypress
document.getElementById("keyInput").addEventListener("keydown", function(e) {
  console.log("You pressed: " + e.key);
});

// Bonus: Double click
document.getElementById("secretBtn").addEventListener("dblclick", function() {
  alert("You discovered the secret!");
});

// 2. Form Validation

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault(); // stop the form from submitting

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("formMessage");

  if (!email.includes("@")) {
    message.textContent = "Please enter a valid email!";
    message.style.color = "red";
    return;
  }

  if (password.length < 8) {
    message.textContent = "Password must be at least 8 characters.";
    message.style.color = "red";
    return;
  }

  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});
