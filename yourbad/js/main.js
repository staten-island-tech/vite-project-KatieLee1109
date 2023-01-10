import "../style.css";
import "../btn.css";
import { DOMSelectors } from "./dom";
import { menu } from "./pizza";
console.log(createmenu);

function createmenu() {
  createmenu.forEach((menu) => {
    DOMSelectors.opt.insertAdjacentHTML(
      "beforeend",
      `<div class="make-card">
          <h2 class="pizza-name">${menu.name}</h2>
          <img class="pizza-img" src="${menu.img}">
          <p class="pizza-price">$${menu.price}</p>
          <p class="pizza-info">${menu.info}</p>
      </div>`
    );
  });
};

function food() {
  allitems
    .filter((food) => food.size.includes("pizza"))
    .forEach((pizza) => {
      DOMSelectors.allitems.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
          <h2 class="pizza-name">${pizza.name}</h2>
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
          <h2 class="pizza-name">${drink.name}</h2>
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
      DOMSelectors.pizza.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
          <h2 class="pizza-name">${fruit.name}</h2>
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

document.getElementById("opt").addEventListener("click", function () {
  opt();
  clear();
});

document.getElementById("pizza").addEventListener("click", function () {
  pizza();
  clear();
});

document.getElementById("drink").addEventListener("click", function () {
  drink();
  clear();
});

document.getElementById("fruit").addEventListener("click", function () {
  fruit();
  clear();
});

