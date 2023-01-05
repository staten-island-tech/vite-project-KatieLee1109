import "../style.css";
import { DOMSelectors } from "./dom";
import { DOMSelectorsTwo } from "./dom";
import { pizza } from "./pizza";
console.log(pizza);

DOMSelectorsTwo.light.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
});

DOMSelectorsTwo.dark.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});


function all() {
  allitems
    .forEach((items) => {
      DOMSelectors.allitems.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
                <h2 class="name">${items.name}</h2>
                <img class="pizza-img" src="${items.img}">
                <p class="pizza-price">$${items.price}</p>
                <p class="pizza.info">${items.info}</p>
            </div>`
      );
    });
}
console.log(all);

function food() {
  allitems
    .filter((food) => food.size.includes("pizza"))
    .forEach((pizza) => {
      DOMSelectors.allitems.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
          <h2 class="name">${pizza.name}</h2>
          <img class="pizza-img" src="${pizza.img}">
          <p class="pizza-price">$${pizza.price}</p>
          <p class="pizza-info">${pizza.info}</p>
      </div>`
      );
    });
}
console.log(food);

function drink() {
  allitems
    .filter((drink) => drink.size.includes("drink"))
    .forEach((drink) => {
      DOMSelectors.allitems.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
          <h2 class="name">${drink.name}</h2>
          <img class="pizza-img" src="${drink.img}">
          <p class="pizza-price">$${drink.price}</p>
          <p class="pizza-info">${drink.info}</p>
      </div>`
      );
    });
}
console.log(drink);

function fruit() {
  allitems
    .filter((fruit) => fruit.size.includes("fruit"))
    .forEach((fruit) => {
      DOMSelectors.allitems.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
          <h2 class="name">${fruit.name}</h2>
          <img class="pizza-img" src="${fruit.img}">
          <p class="pizza-price">$${fruit.price}</p>
          <p class="pizza-info">${fruit.info}</p>
      </div>`
      );
    });
}
console.log(fruit);


function clear() {
  DOMSelectors.allitems.insertAdjacentHTML = "";
}
console.log(clear);

document.getElementById("all").addEventListener("click", function () {
  allitems();
});

document.getElementById("pizza").addEventListener("click", function () {
  pizza();
});

document.getElementById("drink").addEventListener("click", function () {
  drink();
});

document.getElementById("fruit").addEventListener("click", function () {
  fruit();
});

