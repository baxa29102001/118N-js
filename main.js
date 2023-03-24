// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     const heading = document.querySelector("h1");
//     heading.textContent = "Hello, DOM!";
//   }, 500);
// });

const array = [3, 1, 5, 4, 10, 2];
// 1, 3, 4,5,2,10; 1 sikl
// 1,3,4,2,   5,10 sikl

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    console.count("Sikl j");
    if (array[j] > array[j + 1]) {
      let temp = array[j];

      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);

// for (let i = 0; i < 1; i++) {
//   console.log(i);
// }
