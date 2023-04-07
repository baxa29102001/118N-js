const author = document.querySelector("#author");
const title_book = document.querySelector("#title_book");
const category = document.querySelector("#category");
const price = document.querySelector("#price");
const date_publish = document.querySelector("#date_publish");
const rate = document.querySelector("#rate");

const form = document.querySelector("#form");
import {
  renderBookElements,
  loaderForBooks,
  renderPageinationNumbers,
  choppedBookItems,
} from "./render.js";

let globalImages;

import uploadImages from "./upload.js";
import { showBtnLoading } from "./render.js";

const myModal = new bootstrap.Modal("#exampleModal");

export function saveBookData() {
  const bookObj = {
    author: author.value,
    title_book: title_book.value,
    category: category.value,
    price: price.value,
    date_publish: date_publish.value,
    rate: rate.value,
    // img_url: res,
  };
  let arr = Object.keys(bookObj).filter((key) => !bookObj[key]);

  if (arr.length) {
    arr.forEach((item) => {
      document.querySelector(`#${item}`).classList.add("error_border");
    });

    return;
  }
  uploadImages(globalImages)
    .then((res) => {
      bookObj.img_url = res;
      fetch(
        "https://book-shelter-fa2c3-default-rtdb.firebaseio.com/books.json",
        {
          method: "POST",
          // headers: {}
          body: JSON.stringify(bookObj),
        }
      )
        .then((res) => {
          if (!res.ok) throw new Error("Something wrong :(");
          return res.json();
        })
        .then((res) => {
          form.reset();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          showBtnLoading(false);

          myModal.hide();

          getAllBooks();
        });

      showBtnLoading(true);
    })
    .catch(() => {});
}

async function deleteBookItem(id) {
  // fetch(
  //   `https://book-shelter-fa2c3-default-rtdb.firebaseio.com/books/${id}.json`,
  //   {
  //     method: "DELETE",
  //   }
  // )
  //   .then((res) => {
  //     if (!res.ok) throw new Error("Something wrong :(");
  //     return res.json();
  //   })
  //   .then((res) => {
  //     getAllBooks();
  //   })
  //   .catch((err) => {})
  //   .finally(() => {});

  try {
    let res = await fetch(
      `https://book-shelter-fa2c3-default-rtdb.firebaseio.com/books/${id}.json`,
      {
        method: "DELETE",
      }
    );

    await res.json();

    getAllBooks();
  } catch (error) {
  } finally {
  }
}

export function getAllBooks() {
  fetch("https://book-shelter-fa2c3-default-rtdb.firebaseio.com/books.json")
    .then((res) => {
      if (!res.ok) throw new Error("Something wrong :(");
      return res.json();
    })
    .then((res) => {
      let booksArray = Object.keys(res || {}).map((item) => {
        return {
          ...res[item],
          id: item,
        };
      });

      renderPageinationNumbers(booksArray.length);
      renderBookElements(choppedBookItems(booksArray));
      document.querySelectorAll(".btn-danger").forEach((item) => {
        item.addEventListener("click", (e) => {
          const id = e.target.dataset.id;
          deleteBookItem(id);
        });
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      loaderForBooks(false);
    });
}

function postImage(e) {
  globalImages = e.target.files;
}

document.querySelector("#img_url").addEventListener("change", postImage);
