// function repeatSeparator(word, seperator, count) {
//   let result = "";
//   for (let i = 0; i < count; i++) {
//     if (i < count - 1) {
//       result += word + seperator;
//     } else {
//       result += word;
//     }
//   }

//   //   console.log(result.slice(0, result.length - seperator.length));
//   //   console.log(result);
// }

// repeatSeparator("Word", "X", 3);

// function getSandwich(str) {
//   let result = str;

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === "b") {
//       if (result.slice(i, i + 5) === "bread") {
//         result = choppingStr(result, i, i + 5);
//         i = 0;
//       }
//     }
//   }

//   console.log(result);
// }

// function choppingStr(str, start, end) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!(i >= start && i < end)) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// getSandwich("breadjambreadbreadx");
// let name = prompt("Ismingiz nima", "bohodir");

// const regex = new RegExp(name, "gimu");
// console.log("Bohodir😒 yaxshi \n bohodir😂😊🤣 bola".match(regex));

// const regex = /9/gimu;

// console.log("f9090 w bohodirf5".match(regex));

// console.log("90909090".replace(regex, "#"));




