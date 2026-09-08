let dark = document.querySelector("#btnDL");
let body = document.querySelector("body");
dark.addEventListener("click", () => {
  let flag = dark.classList.toggle("light");
  if (flag) {
    dark.classList.add("light");
    dark.classList.remove("dark");
    body.style.backgroundColor = "black";
    body.style.color = "black";
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

let titleArr = [];
let categoryArr = [];
// showTask();
document.querySelector("form").addEventListener("submit", (e) => {
  if( e.target.querySelector("input").value===""){ 
    alert('Write a Task Title')
  e.preventDefault();
  return;}
  e.preventDefault();

  let title = e.target.querySelector("input").value;
  let category = e.target.querySelector("select").value;
  titleArr.push(title);
  categoryArr.push(category);
  showTask();
  formDiv.style.display = "none";
  e.target.querySelector("input").value="";
   e.target.querySelector("select").value="Work";
});
function showTask() {
  document.querySelector(".mainCenter").innerHTML ="";
  for (let i = 0; i < titleArr.length; i++) {
   let card = `<div class="card">
          <h1 class="cardTitle">${titleArr[i]}</h1>
          <p class="cardCategory">${categoryArr[i]}</p>
          </div>`;
    document.querySelector(".mainCenter").innerHTML += card;
  }
}

document.querySelector('.reset').addEventListener('click',()=>{
  titleArr=[];
  categoryArr=[];
  showTask();
})