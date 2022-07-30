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
  // console.log(delay);
  const step = Number(stepRef.value);
  const amount = Number(amountRef.value);
  let newDelay = delay + step;
  let position = 1;
  let counter = 1;
  setTimeout(() => {
    // console.log(delay);
    createPromise(position, delay)
      .then(result => {
        Notify.success(result);
      })
      .catch(error => Notify.failure(error));
    counter += 1;
    position += 1;
  }, delay);

  const intId = setInterval(() => {
    console.log(step);
    if (counter > amount) {
      clearInterval(intId);
      return;
    }

    createPromise(position, newDelay)
      .then(result => {
        Notify.success(result);
      })
      .catch(error => Notify.failure(error));
    counter += 1;
    position = position + 1;
    newDelay = newDelay + step;
    // position = i;
  }, newDelay);
}

// let newDelay =

//     setTimeout(() => {
//       // if (counter === amount - 1) {
//       //   return;
//       // }
//       createPromise(position, newDelay)
//         .then(result => {
//           Notify.success(result);
//         })
//         .catch(error => Notify.failure(error));
//       counter = counter + 1;
//       position = position + 1;
//       newDelay = newDelay + step;
//     }, newDelay);
// }

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
