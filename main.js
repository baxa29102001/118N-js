const btn = document.querySelector("#next");
const before = document.querySelector("#Before");
const carousel_container = document.querySelector(".carousel_container");
const carousel_containerImages = document.querySelectorAll(
  ".carousel_container img"
);
let index = 0;
btn.addEventListener("click", () => {
  index++;
  carousel_container.style.transition = "transform 0.5s ease-in-out";
  carousel_container.style.transform = `translateX(-${index * 400}px)`;
});

carousel_container.addEventListener("transitionend", (e) => {
  if (carousel_containerImages[index].id === "lastElement") {
    index = 0;
    carousel_container.style.transition = "none";
    carousel_container.style.transform = `translateX(-${index * 400}px)`;
  }
});

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.lang = "en-US";

btn.addEventListener("click", () => {
  recognition.start();
});

recognition.addEventListener("result", (e) => {
  console.log(
    Array.from(e.results)
      .map((item) => item[0])
      .map((item) => item.transcript)
      .join(" ")
  );

  console.log(e.results[0]);
});

recognition.addEventListener("end", () => {
  recognition.start();
});

// function repeatSeparator(word, seperator, count) {
//   let result = "";

//   for (let i = 0; i < count; i++) {
//     if (i < count - 1) {
//       result += word + seperator;
//     } else {
//       result += word;
//     }
//   }

//   return result;
// }

// console.log(repeatSeparator("Word", "X", 3));
// console.log(repeatSeparator("This", "And", 2));
// console.log(repeatSeparator("This", "And", 1));
// function getSandwich(str) {
//   let result = str;

//   for (let i = 0; i < result.length; i++) {
//     if (result[i] === "b") {
//       if (result.slice(i, i + 5) === "bread") {
//         result = choppedString(result, i, i + 5);
//         // i = 0;
//       }
//     }
//   }

//   console.log(result);
// }

// function choppedString(str, start, end) {
//   let result = "";

//   for (let i = 0; i < str.length; i++) {
//     if (!(start <= i && i < end)) {
//       result += str[i];
//     }
//   }

//   return result;
// }

// getSandwich("xxbreadyy");

function zipZap(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "z" && str[i + 2] === "p") {
      result += str[i];
      i += 2;
    } else {
      result += str[i];
    }
  }

  console.log(result);
}

zipZap("zipXzap");
