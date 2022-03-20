"use strict";

// VARIABLES
const buttonStart = document.querySelector("#start");
const buttonStop = document.querySelector("#stop");
const buttonReset = document.querySelector("#reset");
const cronometro = document.querySelectorAll("#cronometro");

let seconds = document.querySelector("#seconds");
let minutes = document.querySelector("#minutes");
let hours = document.querySelector("#hours");

let memorySeconds = JSON.parse(localStorage.getItem("seconds")) || 0;
let memoryMinutes = JSON.parse(localStorage.getItem("minutes")) || 0;
let memoryHours = JSON.parse(localStorage.getItem("hours")) || 0;

let secondsTimer = memorySeconds;
let minutesTimer = memoryMinutes;
let hoursTimer = memoryHours;
let timer;

// FUNCIONALIDADE

const start = (event) => {
  buttonStart.classList.add("run");

  timer = setInterval(() => {
    secondsTimer += 1;
    if (secondsTimer === 60) {
      minutesTimer++;
      secondsTimer = 0;
    }

    if (minutesTimer === 60) {
      hoursTimer++;
      minutesTimer = 0;
    }
    tiempo();
  }, 1000);
};

const tiempo = () => {
  if (secondsTimer < 10) {
    seconds.textContent = `:0${secondsTimer}`;
  } else {
    seconds.textContent = ":" + secondsTimer;
  }
  if (minutesTimer < 10) {
    minutes.textContent = `:0${minutesTimer}`;
  } else {
    minutes.textContent = ":" + minutesTimer;
  }
  if (hoursTimer < 10) {
    hours.textContent = `0${hoursTimer}`;
  } else {
    hours.textContent = hoursTimer;
  }
};
// FUNCIONS BOTONERA
const stop = () => {
  clearInterval(timer);
  buttonStart.classList.remove("run");
  timerLocalStorage();
};

const reset = () => {
  clearInterval(timer);
  buttonStart.classList.remove("run");
  secondsTimer = 0;
  minutesTimer = 0;
  hoursTimer = 0;
  tiempo();
  localStorage.clear();
};
// FUNCIONS LOCALSTORAGE
const timerLocalStorage = () => {
  localStorage.setItem("seconds", secondsTimer);
  localStorage.setItem("minutes", minutesTimer);
  localStorage.setItem("hours", hoursTimer);
};

const memoryLocalStorage = () => {
  if (memorySeconds < 10) {
    seconds.textContent = `:0${memorySeconds}`;
  } else {
    seconds.textContent = ":" + memorySeconds;
  }
  if (memoryMinutes < 10) {
    minutes.textContent = `:0${memoryMinutes}`;
  } else {
    minutes.textContent = ":" + memoryMinutes;
  }
  if (memoryHours < 10) {
    hours.textContent = `0${memoryHours}`;
  } else {
    hours.textContent = memoryHours;
  }
};

// EVENTOS
buttonStart.addEventListener("click", start);
buttonStop.addEventListener("click", stop);
buttonReset.addEventListener("click", reset);
window.addEventListener("beforeunload", timerLocalStorage);
window.addEventListener("load", memoryLocalStorage);
