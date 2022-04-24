//random intro text color
let introText = document.querySelector(
  ".introduction .container .informations h1"
);
let colors = ["#2d2d2d", "#009379", "#ff6250", "#f7d684"];
let randomNumber;
setInterval(() => {
  randomNumber = Math.floor(Math.random() * colors.length);
  introText.style.color = colors[randomNumber];
}, 1500);
