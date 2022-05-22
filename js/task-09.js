function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");

const spanColorEl = document.querySelector(".color");

bodyEl.addEventListener("click", changeBgColorBody);

function changeBgColorBody(event) {
  const color = event.currentTarget;
  color.style.backgroundColor = getRandomHexColor();
  spanColorEl.textContent = color.style.backgroundColor;
}
