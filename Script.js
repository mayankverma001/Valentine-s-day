let noButton = document.getElementById("no-button");
let yesButton = document.getElementById("yes-button");
let envelope = document.getElementById("envelope");

let clicks = 0;

// Move "No" button to a random position
noButton.addEventListener("click", () => {
  clicks++;
  if (clicks <= 3) {
    noButton.style.position = "absolute";
    noButton.style.top = `${Math.random() * 70 + 10}%`;
    noButton.style.left = `${Math.random() * 70 + 10}%`;
  } else {
    noButton.style.display = "none";
    envelope.classList.remove("hidden");
  }
});

// Show a message when "Yes" is clicked
yesButton.addEventListener("click", () => {
  alert("Yay! Can't wait for our Valentine’s date! ❤️");
});
