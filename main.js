// let token = localStorage.getItem("token") || "";

// if (true) {
//   window.location.replace("./user.html?page=2");
// }

const form = document.querySelector("#form");
const saveBookBtn = document.querySelector("#saveBook");

import { saveBookData } from "./js/books.js";
import { getAllBooks } from "./js/books.js";

Array.from(form).forEach((item) => {
  item.addEventListener("change", (e) => {
    if (e.target.value) e.target.classList.remove("error_border");
    else e.target.classList.add("error_border");
  });
});

getAllBooks();



saveBookBtn.addEventListener("click", saveBookData);

// function showPostImage(e) {
//   const file = e.target.files[0];

//   document
//     .querySelector("#showImageUrl")
//     .setAttribute("src", URL.createObjectURL(file));
// }


