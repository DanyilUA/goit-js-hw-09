
const refs = {

    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
    window: document.body
}

let timerID = null;
let colorActive = false;

refs.stopBtn.disabled = true;
refs.startBtn.disabled = false;

refs.startBtn.addEventListener('click', changeBackGroundColor);
refs.stopBtn.addEventListener('click', stopColor);

function stopColor(evt) {

    colorActive = false;
    changeBtnState();

    clearInterval(timerID);
}

function changeBackGroundColor(evt) {

    changeBtnState();
    
    timerID = setInterval(() => {
        refs.window.style.backgroundColor = getRandomHexColor();
    }, 1000);
}


function changeBtnState() {
    refs.stopBtn.disabled = !refs.stopBtn.disabled;
    refs.startBtn.disabled = !refs.startBtn.disabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

