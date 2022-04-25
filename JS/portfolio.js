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
//latest work
//random images
let demmaneBox = document.querySelector(".demmane img");
let demmaneArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let buddytreeBox = document.querySelector(".buddytree img");
let buddytreeArray = [1, 2, 3, 4, 5, 6];
//
function random(myArray) {
  let randomNum = Math.floor(Math.random() * myArray.length);
  return randomNum;
}
//
setInterval(() => {
  let randomNumOne = random(demmaneArray);
  demmaneBox.src = `../images/randomImgs/demmane/demmane${demmaneArray[randomNumOne]}.png`;
  //
  let randomNumTwo = random(buddytreeArray);
  buddytreeBox.src = `../images/randomImgs/buddytree/buddytree${buddytreeArray[randomNumTwo]}.png`;
}, 3000);
//
let footer = document.querySelector(".footer");
footer.onclick = (e) => e.stopPropagation();
let whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click", (event) => {
  event.preventDefault();
  //overlay
  let overlay = document.createElement("div");
  overlay.className = "foverlay";
  footer.appendChild(overlay);
  //number
  let number = document.createElement("div");
  number.className = "number";
  footer.appendChild(number);
  //
  let wai = document.createElement("i");
  let wan = document.createElement("span");
  let wanText = document.createTextNode("+213665455773");
  wan.appendChild(wanText);
  wai.className = "fa-brands fa-whatsapp wi";
  wan.className = "wn";
  number.appendChild(wai);
  number.appendChild(wan);
  //
  let close = document.createElement("div");
  close.classList = "close";
  close.innerHTML = "X";
  number.appendChild(close);
  //
  close.addEventListener("click", (event) => {
    overlay.remove();
    number.remove();
  });
});
