import { Notify } from 'notiflix/build/notiflix-notify-aio';

const promisesFormEl = document.querySelector('.form');

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => { 
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
    }, delay);
  });
  return promise;
}

const onPromisesFormElSubmit = event => {
  event.preventDefault();

  let delay = Number(event.target.elements.delay.value);
  const step = Number(event.target.elements.step.value);
  const amount = Number(event.target.elements.amount.value);
 
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
     delay += step;
  }
};

promisesFormEl.addEventListener('submit', onPromisesFormElSubmit);



