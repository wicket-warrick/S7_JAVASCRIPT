"use strict";

const randomRGB = () => Math.floor(Math.random() * 256);

const section = document.querySelector("section");
const button = document.querySelector("button");
let squares = document.querySelectorAll("div");

setInterval(() => {
  squares.forEach((square) => {
    square.style.backgroundColor = `rgb(${randomRGB()},${randomRGB()},${randomRGB()})`;
  });
}, 1000);

button.addEventListener("click", () => {
  const div = document.createElement("div");
  section.appendChild(div);
  squares = document.querySelectorAll("div");
});
