let dark = document.querySelector("#btnDL");
let body = document.querySelector("body");
dark.addEventListener("click", () => {
  let flag = dark.classList.toggle("light");
  if (flag) {
    dark.classList.add("light");
    dark.classList.remove("dark");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    formDiv.style.color = "black";
  } else {
    dark.classList.add("dark");
    dark.classList.remove("light");
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});

let create = document.querySelector(".create");
let close = document.querySelector(".x");
let formDiv = document.querySelector(".formDiv");
create.addEventListener("click", () => {
  formDiv.style.display = "flex";
});
close.addEventListener("click", (e) => {
  e.preventDefault();
  formDiv.style.display = "none";
});
