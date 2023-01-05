import "../style.css";
import { DOMSelectors } from "./dom";
import { DOMSelectorstwo } from "./dom";
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
  
  
  function allitems() {
    allitems
      .forEach((items) => {
      DOMSelectors.dogtype.insertAdjacentHTML(
        "beforeend",
        `<div class="make-card">
                <h2 class="name">${pizza.name}</h2>
                <img class="dog-image" src="${pizza.img}">
                <p class="dog-price">$${pizza.price}</p>
                <p class="dog-description">${pizza.info}</p>
            </div>`
      );
    });
  }
  
  allitems();
  
  function pizza() {
    allitems
      .filter((pizza) => pizza.size.includes("pizza"))
      .forEach((pizza) => {
        DOMSelectors.allitems.insertAdjacentHTML(
          "beforeend",
          `<div class="make-card">
          <h2 class="name">${pizza.name}</h2>
          <img class="dog-image" src="${pizza.img}">
          <p class="dog-price">$${pizza.price}</p>
          <p class="dog-description">${pizza.info}</p>
      </div>`
        );
      });
  }
  
  function drink() {
    allitems
      .filter((drink) => dog.size.includes("drink"))
      .forEach((drink) => {
        DOMSelectors.allitems.insertAdjacentHTML(
          "beforeend",
          `<div class="make-card">
          <h2 class="name">${pizza.name}</h2>
          <img class="dog-image" src="${pizza.img}">
          <p class="dog-price">$${pizza.price}</p>
          <p class="dog-description">${pizza.info}</p>
      </div>`
        );
      });
  }
  
  function fruit() {
    allitems
      .filter((fruit) => dog.size.includes("fruit"))
      .forEach((fruit) => {
        DOMSelectors.allitems.insertAdjacentHTML(
          "beforeend",
          `<div class="make-card">
          <h2 class="name">${pizza.name}</h2>
          <img class="dog-image" src="${pizza.img}">
          <p class="dog-price">$${pizza.price}</p>
          <p class="dog-description">${pizza.info}</p>
      </div>`
        );
      });
  }
  
  
  function clear() {
    DOMSelectors.allitems.innerHTML = "";
  }
  
  document.getElementById("all").addEventListener("click", function () {
    clear();
    allitems();
  });
  
  document.getElementById("pizza").addEventListener("click", function () {
    clear();
    pizza();
  });
  
  document.getElementById("drink").addEventListener("click", function () {
    clear();
    drink();
  });
  
  document.getElementById("fruit").addEventListener("click", function () {
    clear();
    fruit();
  });
  
