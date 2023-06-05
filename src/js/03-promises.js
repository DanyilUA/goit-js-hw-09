const formEl = document.querySelector('.form');
const buttonEl = document.querySelector('button[type="submit"]');

buttonEl.addEventListener('click', onStart);

function onStart(evt) {
  evt.preventDefault();

  const { delay, step, amount } = formEl.elements;

  const stepEl = Number(step.value);
  const delayEl = Number(delay.value);
  const amountEl = Number(amount.value);


  
  for (let i = 1; i <= amountEl; i += 1) {
    
createPromise(amountEl, delayEl)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });

  }
}


function createPromise(position, delay) {
    
  return new Promise((resolve, reject) => {
      
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }
  )
}