// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// "Bohodir".slice();

// function slice2(str, start, end) {
//   let result = "";
//   for (let i = start; i < end; i++) {
//     result = result + str[i];
//   }

//   console.log(result);
// }

// slice2("Bohodir", 1, 4);

// console.log(arr.includes("Salom"));

// const searchElement = "sa";
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     console.log(arr[i].toLowerCase().includes(searchElement));
//   }
// }

// console.log(arr.indexOf("Salom"));

// arr.forEach((item,index,arr2)=> {
//   console.log(item)

// })

// const arrNums = [1, 2, 3, 5, 6, 8];
// const arr2 = arrNums.map((item, index, arr) => {
//   let result = item ** 2 + index;
//   return result;
// });

// console.log(arr2);

// const findelement = arr.find((item, index, obj) => item === 1);

// console.log(findelement);
// const arr = [0, "Salom", "Salom", "8 data type", {}, 233444555555, []];

// const arr2 = arr.filter((item, index, array) => {
//   return item !== "Salom";
// });

// console.log(arr2);
// const form = document.querySelector("#form");

// const emailInput = document.querySelector("#emailInput");
// const list = document.querySelector("#list");

// const todoAppText = [];
// function createHtmlElements(e) {
//   e.preventDefault();

//   todoAppText.push(emailInput.value);

//   let result = "";

//   todoAppText.forEach((item, index) => {
//     result = result + `<li class=""> ${item}</li>`;
//   });

//   list.innerHTML = result;
// }

// form.addEventListener("submit", createHtmlElements);

// console.log(arr.push("Oxiriga qoshildim"));
// console.log(arr);

// function frontBack(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (i > 0 && i < str.length - 1) {
//       result += str[i];
//     }
//   }

//   console.log(str[str.length - 1] + result + str[0]);

//   return str[str.length - 1] + result + str[0];
// }

// frontBack("code");

function delDel(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && i < 4 && str[1] === "d") {
      if (str.slice(1, 4) === "del") {
        // console.log("Ha");
      }
    } else {
      result += str[i];
    }
  }

  console.log(result);
}

// delDel("adelbc");
// delDel("abcdel");

function hashPlasticCard(numbers, position) {
  let result = "";
  for (let index = 0; index < numbers.length; index++) {
    if (index < position) {
      result += numbers[index];
    } else {
      result += "#";
    }
  }

  console.log(result);
}

hashPlasticCard("986000007878787", 5);

// const arr = [0, "Bohodir", 0];

// arr.find((item) => item);
