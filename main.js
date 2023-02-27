// ES 5

// Function declaration
// showMyMessage();

// function showMyMessage() {
//   console.log("Hello world");
// }

// Function Expression

// const showMyMessage = function () {
//   console.log("Hello World");
// };

// showMyMessage();

// Function expression turiga kiruvchi lekin Es6 versiyasi arrow function deb nomlanadi.
// const showMyMessage = () => {};

// showMyMessage();

// const sleepIn = (isWorkingDay, onVacation) => {
//   if (!isWorkingDay || onVacation) {
//     return true;
//   }

//   return false;
// };

// console.log(sleepIn(true, true));
// console.log(sleepIn(true, false));
// console.log(sleepIn(false, false));

// const monkeyTrouble = (aSmile, bSmile) =>
//   (aSmile && bSmile) || (!aSmile && !bSmile);
// console.log(monkeyTrouble(true, true));
// console.log(monkeyTrouble(false, false));
// console.log(monkeyTrouble(true, false));

// const daraja = (a) => a ** 3;

// switch case tushunchasi

// const showStatus = (a) => {
//   switch (a) {
//     case 0:
//       console.log("Created");
//       break;
//     case 1:
//       console.log("ON the way");
//       break;
//     default:
//       console.log("Default Value");
//   }
// };

// showStatus(3);

const emailInput = document.querySelector("#emailInput");

// const form = document.getElementById("form");
// const emailInputErorText = document.getElementById("emailInputErorText");

// emailInput.addEventListener("input", (e) => {
//   //   console.log(e.target.value);
//   //   console.log(emailInput.value);

//   if (e.target.value) {
//     emailInputErorText.textContent = "";
//     emailInput.style.border = "1px solid black";
//   }
// });

// function sendToData(e) {
//   e.preventDefault(); // browserni refresh bolishini oldini olish

//   if (!emailInput.value ) {
//     emailInput.style.border = "1px solid red";
//     emailInputErorText.textContent =
//       "Поле номер телефона обязательно для заполнения";
//     return;
//   }
//   alert("Salom men jonaydigan dataman");
// }

// form.addEventListener("submit", sendToData);

// Methods haqida malumot

// const obj = {
//   name: "Bohodir",
//   fullName() {
//     // console.log(this.name);
//     return this.name;
//   },
// };

// console.log(obj.fullName());
// console.dir(emailInput.classList.add());

// const num = 0;

// Slice methodi
// const name = "Bohodir".slice(2, 5).includes("h");
// // Slice methodi
// const bInclude = "Bohodir".includes("Bo");

// console.log(name);
// console.log(bInclude);

// function daraja(n) {
//   return n ** 2;
// }

// for (let i = 10; i >= 0; i--) {
//   // console.log(daraja(i));
// }

function stringTimes(str, num) {
  for (let i = 0; i < num; i++) {
    let result = "";
    result = result + str;
  }
  console.log("ax");

  return result;
}

// console.log(stringTimes("hi", 2));
// console.log(stringTimes("hi", 3));

// function countXX(str){

// }

// let str = "abcxx";

// console.log(str[1]);

// for (let i = 0; i < str.length; i++) {
//   // console.log(str[i]);
// }

function countX(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      counter++;
    }
  }

  console.log(counter - 1);
}

// countX("xxxx");




