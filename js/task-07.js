const inputConrolEl = document.querySelector("#font-size-control");

const spanTextEl = document.querySelector("#text");

inputConrolEl.addEventListener("input", () => {
  spanTextEl.style.fontSize = `${inputConrolEl.value}px`;
});
