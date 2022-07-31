import { Notify } from 'notiflix/build/notiflix-notify-aio';

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);
  let position;

  for (let i = 1; i <= amount; i++) {
    position = i;
    createPromise(position, delay)
      .then(result => {
        Notify.success(result);
      })
      .catch(error => Notify.failure(error));
    delay = delay + step;
  }
}
