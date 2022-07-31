import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerRef = document.querySelector('button[data-start]');
const daysRef = document.querySelector('span[data-days]');
const hoursRef = document.querySelector('span[data-hours]');
const minutesRef = document.querySelector('span[data-minutes]');
const secondsRef = document.querySelector('span[data-seconds]');

startTimerRef.disabled = true;

const flatpickrInstance = flatpickr('#datetime-picker', {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notify.failure('Please choose a date in the future');

      return;
    }
    startTimerRef.disabled = false;
    startTimerRef.addEventListener('click', countDown);
  },
});

function countDown(e) {
  startTimerRef.disabled = true;
  const targetTime = String(flatpickrInstance.selectedDates[0].getTime());

  const interIdn = setInterval(() => {
    const now = Date.now();
    const remainingTime = targetTime - now;

    if (remainingTime === 0 || remainingTime < 0) {
      clearInterval(interIdn);
      Notify.failure('Time is up');
      return;
    }

    const time = convertMs(remainingTime);
    drawInterface(time);
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));

  const hours = addLeadingZero(Math.floor((ms % day) / hour));

  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function drawInterface(time) {
  daysRef.textContent = time.days;
  hoursRef.textContent = time.hours;
  minutesRef.textContent = time.minutes;
  secondsRef.textContent = time.seconds;
}
