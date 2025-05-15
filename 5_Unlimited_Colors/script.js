const randomColor = function () {
  let color = "#";
  const hex = "0123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }

  return color;
};

let intervalId;

const startChangingColor = function () {
  intervalId = setInterval(changeColor, 1000);
  function changeColor() {
    document.querySelector("body").style.backgroundColor = randomColor();
  }
};

const stopChangingColor = function () {
  clearInterval(intervalId);
};

document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
