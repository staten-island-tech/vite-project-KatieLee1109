import "../style.css";
import { DOMSelectors } from "./dom";
import { menu } from "./pizza";
console.log(createmenu);

function createmenu() {
  menu.forEach((menu) => {
    DOMSelectors.display.innerHTML = " ";
    DOMSelectors.mainDiv.insertAdjacentHTML
      ("beforeend",
        `
    <h2> ${menu.name}<h2>
    <img class="img" src= ${menu.img}
    alt=""/>
    <p id="outputText"> Price: ${menu.price}<p>
    <p id="outputText"> Price: ${menu.info}<p>
    <button id="order" class="order"> choose <button>
    <div>
    <div id="mainCard">
    `);
  });
};
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("light")
  ) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  };
});

const pizza = document.getElementById("pizza-btn");
pizza.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  menu.filter((pizza) => pizza.type === "pizza")
    .forEach(pizza => {
      DOMSelectors.mainDiv.insertAdjacentHTML
        ("beforeend",
          `<h2> ${pizza.name}<h2>
      <img class="img" src= ${pizza.img}
      alt=""/>
      <p id="outputText"> Price: ${pizza.price}<p>
      <p id="outputText"> ${pizza.info}<p>
      <button id="order" class="order"> choose <button>
      <div>
      <div id="mainCard">`
        );
    });
});

const drink = document.getElementById("drinks-btn");
drink.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  menu.filter((drink) => drink.type === "drink")
    .forEach(drink => {
      DOMSelectors.mainDiv.insertAdjacentHTML
        (
          "beforeend",
          `<h2>${drink.name}</h2>
      <img class="img" src= ${drink.img}
      alt=""/>
      <p id="outputText"> Price: ${drink.price}</p>
      <p id="outputText">${drink.info}</p>
      <button id="order" class="order">Choose</button>
      <div>
      </div id="mainCard">`
        );
    });
});
const fruit = document.getElementById("fruit-btn");
fruit.addEventListener("click", function () {
  DOMSelectors.display.innerHTML = " ";
  menu.filter((fruit) => fruit.type === "fruit")
    .forEach(fruit => {
      DOMSelectors.mainDiv.insertAdjacentHTML
        (
          "beforeend",
          `<h2>${fruit.name}</h2>
      <img class="img" src= ${fruit.img}
      alt=""/>
      <p id="outputText"> Price: ${fruit.price}</p>
      <p id="outputText">${fruit.info}</p>
      <button id="order" class="order">Choose</button>
      <div>
      </div id="mainCard">`
        );
    });
});



