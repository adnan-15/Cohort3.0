let dark = document.querySelector("#btnDL");
let body = document.querySelector("body");
let formDiv = document.querySelector(".formDiv");
console.log("Current Theme :- ", body.dataset.theme);
dark.addEventListener("click", () => {
  if (body.classList.toggle("dark")) {
    body.classList.remove("light");
    body.classList.add("dark");
    body.setAttribute("data-theme", "dark");
    body.style.backgroundColor = "black";
    body.style.color = "white";
    formDiv.style.color = "black";
    console.log("Current Theme :- ", body.dataset.theme);
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    body.setAttribute("data-theme", "light");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    formDiv.style.color = "black";
    console.log("Current Theme :- ", body.dataset.theme);
  }
});

let create = document.querySelector(".create");
let close = document.querySelector(".x");

create.addEventListener("click", () => {
  formDiv.style.display = "flex";
  formDiv.children[0].querySelector("input").value = "";
  formDiv.children[0].querySelector("select").value = "Work";
});

close.addEventListener("click", (e) => {
  e.preventDefault();
  formDiv.style.display = "none";
});

let titleArr = [];
let categoryArr = [];
let Status = [];
let totalTask = document.createElement("h3");
totalTask.textContent = `Total Task :- ${titleArr.length}`;
document.querySelector(".mainCenter").before(totalTask);
document.querySelector("form").addEventListener("submit", (e) => {
  if (e.target.querySelector("input").value === "") {
    alert("Write a Task Title");
    e.preventDefault();
    return;
  }
  e.preventDefault();
  let input = e.target.querySelector("input");
  let title = input.value;
  // diff btw input.value and input.getAttribute("value");
  // input.value gives a value of input at that time when form is submitted
  // input.getAttribute("value") gives the initial HTML attribute value
  console.log(
    "input.value gives a value of input at that time when form is submitted :- ",
    input.value,
  );
  console.log(
    "input.getAttribute(value) gives the initial HTML attribute value :- ",
    input.getAttribute("value"),
  );

  let category = e.target.querySelector("select").value;
  titleArr.push(title);
  categoryArr.push(category);
  Status.push("pending");

  showTask();
  formDiv.style.display = "none";
  e.target.querySelector("input").value = "";
  e.target.querySelector("select").value = "Work";
});
let nT = "New Task";
function showTask() {
  document.querySelector(".mainCenter").innerHTML = "";

  for (let i = 0; i < titleArr.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", i + 1);
    card.setAttribute("data-status", Status[i]);
    card.setAttribute("data-category", categoryArr[i]);
    if (i === titleArr.length - 1) card.prepend(nT);
    // just for practicing
    card.setAttribute("data-test", "Task manager card");
    console.log("Test concept", card.hasAttribute("data-test"));
    card.removeAttribute("data-test");
    console.log("Test concept", card.hasAttribute("data-test"));

    let title = document.createElement("h1");
    title.classList.add("cardTitle");
    title.appendChild(document.createTextNode(titleArr[i]));
    let cate = document.createElement("p");
    cate.classList.add("cardCategory");
    cate.appendChild(document.createTextNode(categoryArr[i]));
    let li = document.createElement("li");
    li.classList.add("cardStatus");
    li.appendChild(document.createTextNode(Status[i]));
    let cardBtn = document.createElement("div");
    cardBtn.classList.add("cardBtn");
    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerHTML = `Edit <i class="ri-pencil-ai-fill"></i>`;
    let compltBtn = document.createElement("button");
    compltBtn.classList.add("complt");
    compltBtn.innerHTML = `Complete <i class="ri-check-line"></i>`;
    let dltBtn = document.createElement("button");
    dltBtn.classList.add("dlt");
    dltBtn.innerHTML = `Delete <i class="ri-delete-bin-fill"></i>`;
    cardBtn.append(editBtn, compltBtn, dltBtn);
    let div = document.createElement("div");
    div.append(title, cate);
    card.append(div, li, cardBtn);
    document.querySelector(".mainCenter").append(card);
    console.log("Card ID :-", card.getAttribute("data-id"));
    console.log("Card Category :-", card.getAttribute("data-category"));
    console.log("Card Status :-", card.getAttribute("data-status"));
    let showID = document.createElement("h6");
    showID.textContent = `Task ID : ${card.getAttribute("data-id")}`;
    div.after(showID);
  }
  document.querySelector("h3").textContent = `Total Task :- ${titleArr.length}`;
}
document.querySelector(".reset").addEventListener("click", () => {
  titleArr = [];
  categoryArr = [];
  Status = [];
  showTask();
});

let editDiv = document.querySelector(".editDiv");
let closeEdit = document.querySelector(".xEdit");
closeEdit.addEventListener("click", (e) => {
  e.preventDefault();
  editDiv.style.display = "none";
});

document.querySelector(".editForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let id = editDiv.dataset.id;
  titleArr[id - 1] = e.target[1].value;
  categoryArr[id - 1] = e.target[2].value;
  editDiv.style.display = "none";

  showTask();
});

document.querySelector(".mainCenter").addEventListener("click", (e) => {
  if (e.target.closest(".dlt")) {
    let id =
      Number(e.target.closest(".dlt").parentElement.parentElement.dataset.id) -
      1;
    titleArr = titleArr.filter((n, i) => i !== id);
    categoryArr = categoryArr.filter((n, i) => i !== id);
    Status = Status.filter((n, i) => i !== id);
    e.target.closest(".dlt").parentElement.parentElement.remove();
    showTask();
    alert("Task Deleted Successfully");
  } else if (e.target.closest(".complt")) {
    let id =
      Number(
        e.target.closest(".complt").parentElement.parentElement.dataset.id,
      ) - 1;
    Status[id] = "completed";

    showTask();
    alert("Task Completed");
  } else if (e.target.closest(".edit")) {
    editDiv.style.display = "flex";
    editDiv.dataset.id =
      e.target.closest(".edit").parentElement.parentElement.dataset.id;
    let oldT =
      e.target.closest(".edit").parentElement.parentElement.children[0]
        .children[0].textContent;
    let oldC =
      e.target.closest(".edit").parentElement.parentElement.children[0]
        .children[1].textContent;
    editDiv.children[0].children[3].value = oldC;

    let title = document.createElement("input");
    title.value = oldT;
    editDiv.children[0].children[2].replaceWith(title);
  }
});


// In event bubbling, the event moves from Children → Parent → Grandparent.
document.querySelector(".grandParent").addEventListener("click", () => {
  console.log("Grandparent");
});
document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent");
});
document.querySelector(".child").addEventListener("click", () => {
  console.log("EVENT BUBBLING");
  
  console.log("Children");
});

// In event capturing, the event moves from Grandparent → Parent → Children.
document.querySelector(".grandParent1").addEventListener(
  "click",
  () => {
    console.log("EVENT CAPTURING");
    
    console.log("Grandparent");
  },
  true,
);
document.querySelector(".parent1").addEventListener(
  "click",
  () => {
    console.log("Parent");
  },
  true,
);
document.querySelector(".child1").addEventListener(
  "click",
  () => {
    console.log("Children");
  },
  true,
);
