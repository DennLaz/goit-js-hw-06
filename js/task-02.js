const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const getIdIngredients = document.querySelector("#ingredients");

const addElIngredienrs = (arr) => {
  return arr.map((el) => {
    const elOfingredients = document.createElement("li");
    elOfingredients.classList.add("item");
    elOfingredients.textContent = el;
    return elOfingredients;
  });
};

const resultAddIng = addElIngredienrs(ingredients);

getIdIngredients.append(...resultAddIng);
