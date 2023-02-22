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

const form = document.getElementById("form");
const emailInputErorText = document.getElementById("emailInputErorText");

emailInput.addEventListener("input", (e) => {
  //   console.log(e.target.value);
  //   console.log(emailInput.value);

  if (e.target.value) {
    emailInputErorText.textContent = "";
    emailInput.style.border = "1px solid black";
  }
});

function sendToData(e) {
  e.preventDefault(); // browserni refresh bolishini oldini olish

  if (!emailInput.value ) {
    emailInput.style.border = "1px solid red";
    emailInputErorText.textContent =
      "Поле номер телефона обязательно для заполнения";
    return;
  }
  alert("Salom men jonaydigan dataman");
}

form.addEventListener("submit", sendToData);







