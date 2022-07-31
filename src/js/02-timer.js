import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');
// console.log(daysRef);

startTimerRef.disabled = true;
const fp = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0].getTime());
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');
      // window.alert('Please choose a date in the future');
      return;
    }
    startTimerRef.disabled = false;
    startTimerRef.addEventListener('click', timerTick);
  },
});
function timerTick(e) {
  startTimerRef.disabled = true;
  const targetTime = String(fp.selectedDates[0].getTime());
  console.log(targetTime);
  const interId = setInterval(() => {
    const now = Date.now();
    const remainingTime = targetTime - now;
    if (remainingTime === 0) {
      clearInterval(interId);
      return;
    }
    console.log(remainingTime);

    console.log(convertMs(remainingTime));
    const time = convertMs(remainingTime);
    Rasmetka(time);
  }, 1000);
}
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function Rasmetka(time) {
  daysRef.textContent = time.days;
  hoursRef.textContent = time.hours;
  minutesRef.textContent = time.minutes;
  secondsRef.textContent = time.seconds;
}
