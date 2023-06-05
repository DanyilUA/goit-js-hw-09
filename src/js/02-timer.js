import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const buttonStart = document.querySelector('button[data-start]');
const dayEl = document.querySelector('span[data-days]');
const hourEl = document.querySelector('span[data-hours]');
const minuteEl = document.querySelector('span[data-minutes]');
const secondEl = document.querySelector('span[data-seconds]');


let isActive = false;


const dateTimePicker = flatpickr("#datetime-picker", {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {

        const userDate = selectedDates[0].getTime();
        const currentDate = Date.now();

        if (currentDate > userDate) {
        Notiflix.Notify.failure('Please choose a date in the future');
        buttonStart.disabled = true;
        } else {
            buttonStart.disabled = false;
        }
    }
});

Notiflix.Notify.success('Click Me', {
    timeout: 6000,
});


function convertMs(ms) {
   const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

   const days = addLeadingZero(Math.floor(ms / day));
   const hours = addLeadingZero(Math.floor((ms % day) / hour));
   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTime() {
    const chosenDate = dateTimePicker.selectedDates[0].getTime();
            if (isActive) {
                return;
            }
    isActive = true;
    const timerID = setInterval(() => {

            const currentDate = new Date();
            const differenceDate = chosenDate - currentDate;
            const { days, hours, minutes, seconds } = convertMs(differenceDate);
            console.log(`${days}:${hours}:${minutes}:${seconds}`);
        
                    dayEl.textContent = days;
                    hourEl.textContent = hours;
                    minuteEl.textContent = minutes;
                    secondEl.textContent = seconds;

            if (differenceDate <= 0) {
                clearInterval(timerID);
                dayEl.textContent = '00';
                hourEl.textContent = '00';
                minuteEl.textContent = '00';
                secondEl.textContent = '00';
                console.log('time is over');
            }
    }, 1000);
}

buttonStart.addEventListener('click', () => {
updateTime();
});

