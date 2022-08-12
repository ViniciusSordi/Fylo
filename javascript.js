const form = document.getElementById("form");
const email = document.getElementById("email");
const text = document.getElementById("text");

function validation() {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email.value.match(pattern)) {
    text.innerHTML = "Your Email is Valid";
    text.style.color = "#00ff00";
  } else {
    text.innerHTML = "Please enter a valid email address";
    text.style.color = "#FF4242";
  }
}
email.addEventListener("keydown", validation);
