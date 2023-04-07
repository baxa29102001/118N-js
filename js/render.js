const saveBookBtn = document.querySelector("#saveBook");
import { getAllBooks } from "./books.js";
let step = 2;
let page = 1;

export function choppedBookItems(books) {
  let start = page * step - step;

  let end = start + step;

  return books.slice(start, end);
}

function loaderForBooks(show) {
  if (show) {
    document.querySelector("#loader").classList.add("d-flex");
  } else {
    document.querySelector("#loader").classList.remove("d-flex");
    document.querySelector("#loader").classList.add("d-none");
  }
}
function deleteBookItem() {
  console.log("ssall");
}
function renderBookElements(booksArray) {
  let result = booksArray
    .map((item, index) => {
      let d = new Date(item.date_publish);

      let datestring =
        d.getDate() +
        "." +
        (d.getMonth() + 1) +
        "." +
        d.getFullYear() +
        " " +
        d.getHours() +
        ":" +
        d.getMinutes();

      let starElement = "";
      for (let i = 0; i < item.rate; i++) {
        starElement += ` <img src="./img/star.svg" alt="" />`;
      }
      let result = `<li class="mb-3">
          <div class="d-flex bg-secondary">
            <div class="bg-gray p-3">
              <img src=${item.img_url} width="200" height="180" alt="" />
            </div>
            <div>
              <h2 class="text-lg">
               ${item.title_book}
              </h2>
              <p>by  ${item.author}. | ${datestring}</p>
  
              <div class="d-flex align-items-center">
                      ${starElement}
              </div>
  
              <div>
                <p>Cost <span class="text-bold">${item?.price?.replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  " "
                )} so'm</span></p>
              </div>
  
              <div class="d-flex justify-content-end">
                <button class="btn btn-success">Edit</button>
                <button class="btn btn-danger" data-id=${
                  item.id
                }  >Delete</button>
              </div>
            </div>
          </div>
        </li>`;

      return result;
    })
    .join(" ");

  document.querySelector("#list").innerHTML = result;
}

// export { loaderForBooks, renderBookElements };

function showBtnLoading(show) {
  if (show) {
    saveBookBtn.innerHTML = ` <div
        class="spinner-border text-light"
        style="width: 15px; height: 15px"
        role="status"
      ></div>`;
  } else {
    saveBookBtn.innerHTML = `Save`;
  }
}

function renderPageinationNumbers(length) {
  let pageNumbers = Math.ceil(length / step);
  let result = "";

  for (let i = 0; i < pageNumbers; i++) {
    result += ` <li>
    <button class="page-btn ${page == i + 1 ? "active" : ""}">${i + 1}</button>
      </li>`;
  }

  document.querySelector("#pages").innerHTML = result;

  document.querySelectorAll(".page-btn").forEach((item) => {
    item.addEventListener("click", (e) => {
      page = +e.target.innerHTML;

      getAllBooks();
    });
  });
}

export {
  loaderForBooks,
  renderBookElements,
  showBtnLoading,
  renderPageinationNumbers,
};
