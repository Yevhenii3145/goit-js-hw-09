import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay, step) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    for (let i = 1; i <= position; i++) {
      position = i;
      setTimeout(() => {
        if (shouldResolve) {
          resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
        } else {
          reject(`❌ Rejected promise ${position} in ${delay}ms`);
        }
      }, delay);
      delay = delay + step;
    }
  });
}

const formRef = document.querySelector('.form');
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

formRef.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(delayRef.value);
  const step = Number(stepRef.value);
  let position = Number(amountRef.value);
  console.log('gggggggggggg');

  createPromise(position, delay, step)
    .then(result => {
      Notify.success(result);
    })
    .catch(error => Notify.failure(error));
}
