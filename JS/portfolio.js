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
//skills
let aboutskillsSection = document.querySelector(".about_skills");
let progresses = document.querySelectorAll(".progress");
window.addEventListener("scroll", (event) => {
  if (window.scrollY > aboutskillsSection.offsetTop - 100) {
    progresses.forEach((progess) => {
      progess.style.cssText = `width: ${progess.dataset.width}`;
    });
  } else if (window.scrollY < aboutskillsSection.offsetTop - 600) {
    progresses.forEach((progess) => {
      progess.style.width = 0;
    });
  }
});
//
