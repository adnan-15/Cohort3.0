// let h1 = document.createElement("h1")
// h1.textContent= "hello"
// document.body.append(h1)

// let obj = {
//     name:"adnan"
// }
// let rh1 = React.createElement("h1",null,React.createElement('span',null,"i am under child"))

// console.log("REAL DOM ->",h1)
// console.log("VIRTUAL DOM ->",rh1);

// let rh1 = React.createElement("h1",null,React.createElement('span',null,"i am under child"))
// let realDomElem = document.querySelector('#root')
// ReactDOM.createRoot(realDomElem).render( rh1)

import { a, sum } from "./main.js";
console.log(a);
console.log(sum(90, 60));

let reactDiv = React.createElement("div", {}, [
  React.createElement(
    "h1",
    {},
    React.createElement("span", {}, "i am in h1 span"),
  ),
  React.createElement(
    "h2",
    {},
    React.createElement("span", {}, "i am in h2 span"),
  ),
]);
let RDomElem = document.querySelector("#root");
ReactDOM.createRoot(RDomElem).render(reactDiv);
