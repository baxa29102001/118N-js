// function name(){}

// const arrowFunc =() => {}

// if (true) {
//   var name2 = "Bohodir";

//   console.log(name2);
// } else {
//   console.log(name2);
// }

// console.log(name2);

// function showVariable() {
//   var name2 = "Bohodir";

//   console.log(name2);
// }

// showVariable();

// console.log(name2);

// if (true) {
//   let name2 = "Bohodir";
// }

// console.log(name2);

// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }

// console.log(i);
// name2 = "Bohodir";

// let name2;

// console.log(name2);

// let name2 = "Bohodir";

// name2 = "Akmal";

// console.log(name2);

// {

//     name2: 'Bohodir'
// }

// function counter(num) {
//   let count = num;
//   return function (num2) {
//     return count + num2;
//   };
// }

// console.log(Math.floor(Math.random() * 100));

// let makerCounter = counter(Math.floor(Math.random() * 100));

// (function () {
//   console.log("Salom men oz ozidan ishlovchi funksiyaman");
// // })();

// function makeWorker() {
//   let name = "Pete";

//   return function () {
//     alert(name);
//   };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   let sayHi = function () {
//     alert(phrase);
//   };
// }

// sayHi();

function split(string, delimiter) {
  var result = [];
  var startIndex = 0;
  var index = string.indexOf(delimiter);

  while (index !== -1) {
    result.push(string.slice(startIndex, index));
    startIndex = index + delimiter.length;
    index = string.indexOf(delimiter, startIndex);
  }

  result.push(string.slice(startIndex));
  return result;
}

console.log(split("Salom dostim qalesan", " "));
