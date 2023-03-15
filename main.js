// window.SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const start = document.querySelector("#start");
// const end = document.querySelector("#end");
// const list = document.querySelector("#list");
// const recognition = new window.SpeechRecognition();
// recognition.interimResults = true;
// recognition.lang = "en-US";

// let stop = false;
// recognition.addEventListener("result", (e) => {
//   if (e.results[0].isFinal) {
//     const arr = Array.from(e.results[0])
//       .map((item) => item.transcript)
//       .join("");

//     const li = document.createElement("li");
//     li.textContent = arr;

//     list.appendChild(li);
//   }
// });

// recognition.addEventListener("end", (e) => {
//   if (!stop) {
//     recognition.start();
//   }
// });

// start.addEventListener("click", () => {
//   recognition.start();
// });
// end.addEventListener("click", () => {
//   recognition.stop();

//   stop = true;
// });

// function zipZap(str) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "z" && str[i + 2] === "p") {
//       result += str[i] + str[i + 2];
//       i += 2;
//     } else {
//       result += str[i];
//     }
//   }

//   console.log(result);
//   return result;
// }

// zipZap("zipXzap");

function salom(memoryValue) {
  let counter = memoryValue;

  return function (num) {
    if (counter === num) {
      return "Siz Javobni topdingiz";
    }

    if (num > counter) {
      return "Siz kichkinaroq raqam ayting ayting";
    }
    if (num < counter) {
      return "Siz katarroq raqam ayting ayting";
    }
  };
}

// let makeCounter = salom(10);

// let num = 0;
// while (makeCounter(num) !== "Siz Javobni topdingiz") {
//   num = +prompt("Son ayting");
//   console.log(makeCounter(num));
// }

// console.log(this.salom);
