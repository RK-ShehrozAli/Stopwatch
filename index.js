const display = document.getElementById("display");
let timer = null;
let startTimer = 0;
let elapsedTimer = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTimer = Date.now() - elapsedTimer;
    timer = setInterval(update, 10);
    isRunning = true;
  }
}
function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTimer = Date.now() - startTimer;
    isRunning = false;
  }
}
function reset() {
  clearInterval(timer);
  startTimer = 0;
  elapsedTimer = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}

function update() {
  const cuttentTime = Date.now();
  elapsedTimer = cuttentTime - startTimer;

  let hours = Math.floor(elapsedTimer / (1000 * 60 * 60));
  let minutes = Math.floor((elapsedTimer / (1000 * 60)) % 60);
  let seconds = Math.floor((elapsedTimer / 1000) % 60);
  let millisecond = Math.floor((elapsedTimer % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");   
  seconds = String(seconds).padStart(2, "0");
  millisecond = String(millisecond).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`;
}
