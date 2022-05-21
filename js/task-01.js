const numOfCat = document.querySelectorAll(".item");

console.log(`Number of categories: ${numOfCat.length}`);

numOfCat.forEach((el) => {
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.querySelectorAll("li").length}`);
});
