const numOfCat = document.querySelectorAll(".item").length;

console.log(`Number of categories: ${numOfCat}`);

const titelEl = document.querySelectorAll("h2");
const numOfEl = document.querySelectorAll("#categories ul");

console.log(`Category: ${titelEl[0].textContent}`);
console.log(`Elements: ${numOfEl[0].children.length}`);

console.log(`Category: ${titelEl[1].textContent}`);
console.log(`Elements: ${numOfEl[1].children.length}`);

console.log(`Category: ${titelEl[2].textContent}`);
console.log(`Elements: ${numOfEl[2].children.length}`);
