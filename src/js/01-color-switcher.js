
const refs = {

    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    window: document.body
}

let timerID = null;
let colorActive = false;

refs.startBtn.addEventListener('click', changeColor);
refs.stopBtn.addEventListener('click', stopColor);

function stopColor(evt) {

    colorActive = false;
    clearInterval(timerID);
}

function changeColor(evt) {
    if (colorActive) {
        return;
    }

    colorActive = true;
    timerID = setInterval(() => {
        refs.window.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

