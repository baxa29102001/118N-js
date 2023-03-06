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
let todoApptext = [];
let index = 0;
function createHtmlElemenets(e) {
  e.preventDefault();

  todoApptext.push({
    text: input.value,
    id: index,
  });

  index++;

  let result = "";

  todoApptext.forEach((item, index) => {
    result =
      result +
      `<li class="item"> ${item.text}

    <img class="krug"  src="./img/green_krug.svg" alt="icon">
    <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
  });

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

  list.innerHTML = result;
}
form.addEventListener("submit", createHtmlElemenets);

function removeTodoApp(id) {
  todoApptext = todoApptext.filter((item) => item.id !== id);
  console.log(todoApptext);
  let result = "";

  todoApptext.forEach((item, index) => {
    result =
      result +
      `<li class="item"> ${item.text}

    <img class="krug"  src="./img/green_krug.svg" alt="icon">
    <img class=" icon" src="./img/delete.svg" onclick="removeTodoApp(${item.id})" alt="icon"> </li>`;
  });

  list.innerHTML = result;
}
