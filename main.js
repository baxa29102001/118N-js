// const arr = [0, 1, "String", true, false, 999989989898989, {}, []];
// const arr2 = arr;
// Elemetni oxiridan qoshib beradi

// console.log(arr2.push("Eng oxirgi qoshiluchi elements"));

// console.log(arr);

// Elementni oxiridan ochirib beradi
// console.log(arr2.pop());
// console.log(arr);
// Elementni boshidan ochiriib berarakan
// console.log(arr2.shift());

// console.log(arr2);

// Elementni boshidan qoshib berarkan

// console.log(arr2.unshift("Salom man birinchilardan qoshildim"));

// console.log(arr2);

// Elementni har yerdan qoshish uchun splice degan method kerak

// console.log(arr2.splice(0, 1, 3, 5, 6));

// console.log(arr);

// console.log(arr2.slice(0, 2));

// console.log(arr);

// let result = [];
// for (let i = 0; i < name.length; i++) {
//   result.push(name[i]);
// }
// let name = "Saluomuuuqalesila";

// console.log(name.split("u"));

// console.log(arr.join("-"));
// let qiymat = "gender";

// let person = {
//   name: "Shavkat",
//   age: 20,
//   gender: "male",

//   subjects: {
//     sports: ["rUNING"],
//   },
// };

// console.log(person[qiymat]);

// person[qiymat] = "Salom";

// console.log(person);

// delete person.age;

// console.log(person);

const form = document.getElementById("form");
const input = document.getElementById("input");
const list = document.getElementById("list");
const modalaayer = document.querySelector(".modalaayer");
const editedInput = document.querySelector("#editedInput");
const editForm = document.querySelector("#editForm");

let todoApptext = [
  {
    text: "Salom",
    id: 99999999,
  },
];
let index = 0;

let editItem;

renderHtmlElements();
function createHtmlElemenets(e) {
  e.preventDefault();

  todoApptext.push({
    text: input.value,
    id: index,
  });

  index++;

  renderHtmlElements();

  // const li = document.createElement("li");
  // li.setAttribute("class", "item");
  // let listContent = document.createElement("div");
  // todoApptext.forEach((item) => {
  //   const li = document.createElement("li");
  //   li.setAttribute("class", "item");

  //   const img = document.createElement("img");
  //   img.setAttribute("src", "./img/green_krug.svg");
  //   const p = document.createElement("p");
  //   p.textContent = item;
  //   li.appendChild(p);
  //   li.appendChild(img);
  //   console.log(li);
  //   // result += li;
  //   listContent.appendChild(li);
  // });
  // console.log(listContent);
  // list.replaceChildren(listContent);
}

function renderHtmlElements() {
  let result = "";

  todoApptext.forEach((item, index) => {
    result =
      result +
      `<li class="item"> ${item.text}

    <img class="krug"  src="./img/green_krug.svg" onclick="showModal(${item.id})" alt="icon">
    <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
  });

  list.innerHTML = result;
}
form.addEventListener("submit", createHtmlElemenets);

function removeTodoApp(id) {
  todoApptext = todoApptext.filter((item) => item.id !== id);

  renderHtmlElements();
}

function showModal(id) {
  modalaayer.style.display = "flex";

  let findEndObject = todoApptext.find((item) => {
    return item.id === id;
  });
  let findEndObjectIndex = todoApptext.findIndex((item) => {
    return item.id === id;
  });
  editedInput.value = findEndObject.text;

  editItem = {
    index: findEndObjectIndex,
    id: id,
  };
}

function editFormHandler(e) {
  e.preventDefault();

  todoApptext.splice(editItem.index, 1, {
    text: editedInput.value,
    id: editItem.id,
  });

  modalaayer.style.display = "none";
  renderHtmlElements();
}

editForm.addEventListener("submit", editFormHandler);
modalaayer.addEventListener("click", (e) => {
  console.log(e.target);
  if (e.target == modalaayer) modalaayer.style.display = "none";
});

const arr = ["Yanvar", "Fevral", "Mart"];
// console.log(new Date().getFullYear());
// console.log(new Date().getDay());
// console.log(arr[new Date().getMonth()]);
// console.log(
//   `${new Date("2030-01-31T19:00:00").getFullYear()}.${new Date(
//     "2030-01-31T19:00:00"
//   ).getMonth()}`
// );

// let d = new Date("2030-01-31T19:10:00");

// let datestring =
//   d.getDate() +
//   "." +
//   (d.getMonth() + 1) +
//   "." +
//   d.getFullYear() +
//   " " +
//   d.getHours() +
//   ":";
// console.log(d.getMinutes());
// if (
//   d.getMinutes().toString().length === 1 &&
//   d.getMinutes().toString() === "0"
// ) {
//   datestring += "00";
// } else {
//   datestring += d.getMinutes();
// }
// // 16.5.2015 9:50

// console.log(datestring);

// console.log("00004555555".padStart(15, "#"));

// const person = {
//   name: "Shavkat",
//   age: 20,
//   gender: "Male",
// };

// for (let key in person) {
//   console.log(person[key]);
// }

// console.log();

// Object.keys(person).forEach((item) => {
//   console.log(person[item]);
// });

// console.log(Object.values(person));
