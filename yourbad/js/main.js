import "../style.css";
import { DOMSelectors } from "./dom";
import { pizza } from "./pizza"
console.log(pizza);
console.log(DOMSelectors);

function makemenu() {
    pizza.forEach((pizza) =>
        DOMSelectors.main.insertAdjacentHTML
            ("beforend",
                `
        <div id= "makecard" class="makecard">
        <h2>${pizza.name}</h2>
        <p><img src=${pizza.img}</p>
        <p id="outputText">Price: ${pizza.price}</p>
        <p id="outputText"> Info: ${pizza.info}</p>
        <button id="buy">Choose</button>
        </div>
        `
            ))
};











