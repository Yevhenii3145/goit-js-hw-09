import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  formRef: document.querySelector('.form'),
  delayRef: document.querySelector('[name="delay"]'),
  stepRef: document.querySelector('[name="step"]'),
  amountRef: document.querySelector('[name="amount"]'),
};

refs.formRef.addEventListener('submit', onSubmitForm);
// const formRef = document.querySelector('.form');
// const delayRef = document.querySelector('[name="delay"]');
// const stepRef = document.querySelector('[name="step"]');
// const amountRef = document.querySelector('[name="amount"]');

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(delayRef.value);
  const step = Number(stepRef.value);
  const position = Number(amountRef.value);

  createPromise(position, delay)
    .then(result => {
      Notify.success(result);
    })
    .catch(error => Notify.failure(error));
}

function createPromise(position, delay) {
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