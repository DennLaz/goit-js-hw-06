const counterValue = document.querySelector("#value");

const btnDecrement = document.querySelector('button[data-action="decrement"]');
btnDecrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

const btnIncrement = document.querySelector('button[data-action="increment"]');
btnIncrement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
