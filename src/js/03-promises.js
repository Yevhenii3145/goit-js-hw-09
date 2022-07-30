import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promise = new Promise((resolve, reject) => {
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    }
    reject(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}
const formRef = document.querySelector('.form');
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

let amount = amountRef.value;
// console.log(amount);
const currentAmount = null;
formRef.addEventListener('submit', constructor);
function constructor() {
  const firsDal = delayRef.value;
  const delay = stepRef.value;
  const position = 1;
  setTimeout(() => {
    if (currentAmount === amount) {
      return;
    }
    createPromise(position, firsDal)
      .then(() => {
        Notify.success(result);
      })
      .catch(() => {
        Notify.failure(error);
      });
    currentAmount += 1;
    position += 1;
  }, firsDal);
  setInterval(() => {
    if (currentAmount === amount) {
      return;
    }
    createPromise(position, delStep);
  }, delStep);
}
