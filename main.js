//Dom bilan aloqa
// const btnShowMessage = document.getElementById("btn"); // elementni id orqali olish
// const btnShowMessage = document.getElementsByClassName("btn"); // elementni class orqali olish
const btnShowMessage = document.querySelector(".container .btn");
//Es 5
function showMyMessage(e) {
  // e.target.style.backgroundColor
  //   btnShowMessage.style.backgroundColor = "red";
  //   e.target.style.backgroundColor = "red";
  //   e.target.style.color = "white";
  //   document.body.style.backgroundColor = "black";
  //   e.target.classList.add("node");
  if (e.target.classList.contains("node")) {
    e.target.classList.remove("node");
  } else {
    e.target.classList.add("node");
  }
}

// const showMyMessage = (event) => {
//   console.log(parametr);
// };

btnShowMessage.addEventListener("click", showMyMessage);

function getDarajaQiymat(num = 1) {
  return num ** 2;
}

console.log(getDarajaQiymat(4));
console.log(getDarajaQiymat(5));
console.log(getDarajaQiymat(10));
// console.log(getDarajaQiymat(5));
// console.log(getDarajaQiymat(2));
// console.log(getDarajaQiymat(1));

// console.log(result);
