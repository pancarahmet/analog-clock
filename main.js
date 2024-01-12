let secondHand = document.querySelector(".second");
let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");

const body = document.querySelector("body");
const btn = document.querySelector(".dark-mode");
btn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

const updateTime = () => {
  let date = new Date();
  secToDeg = (date.getSeconds() / 60) * 360;
  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minToDeg = (date.getMinutes() / 60) * 360;
  minHand.style.transform = `rotate(${minToDeg}deg)`;
  hourToDeg = (date.getHours() / 12) * 360;
  hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(updateTime, 1000);
