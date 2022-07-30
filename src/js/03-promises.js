import { Notify } from 'notiflix/build/notiflix-notify-aio';
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }
  });
}

const formRef = document.querySelector('.form');
const delayRef = document.querySelector('[name="delay"]');
const stepRef = document.querySelector('[name="step"]');
const amountRef = document.querySelector('[name="amount"]');

// let delay = delayRef.value
// let step = stepRef.value
// let amount = amountRef.value

formRef.addEventListener('submit', f);

function f(e) {
  e.preventDefault();
  // console.log(delayRef.value);
  // console.log(stepRef.value);
  // console.log(amountRef.value);\
  let delay = Number(delayRef.value);
  const step = Number(stepRef.value);
  const amount = amountRef.value;
  for (let i = 1; i <= amount; i++) {
    const position = i;
    if (position === 1) {
      setTimeout(() => {
        createPromise(position, delay)
          .then(result => {
            Notify.success(result);
          })
          .catch(error => Notify.failure(error));
      }, delay);
      continue;
    }

    setTimeout(() => {
      createPromise(position, delay)
        .then(result => {
          Notify.success(result);
        })
        .catch(error => Notify.failure(error));
    }, step);

    // setTimeout(() => {

    // })
  }
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;

//   const promise = new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     }
//     reject(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//   return promise;
// }
// const formRef = document.querySelector('.form');
// const delayRef = document.querySelector('[name="delay"]');
// const stepRef = document.querySelector('[name="step"]');
// const amountRef = document.querySelector('[name="amount"]');

// let amount = amountRef.value;
// // console.log(amount);
// const currentAmount = null;
// formRef.addEventListener('submit', constructor);
// function constructor() {
//   const firsDal = delayRef.value;
//   const delay = stepRef.value;
//   const position = 1;
//   setTimeout(() => {
//     // if (currentAmount === amount) {
//     //   return;
//     // }
//     createPromise(position, firsDal)
//       .then(() => {
//         console.log(gg);
//       })
//       .catch(() => {
//         console.log(ff);
//       });
//     currentAmount += 1;
//     position += 1;
//   }, firsDal);
//   setInterval(() => {
//     // if (currentAmount === amount) {
//     //   return;
//     // }
//     createPromise(position, delStep)
//       .then(() => {
//         console.log(gg);
//       })
//       .catch(() => {
//         console.log(ff);
//       });
//   }, delStep);
// }
