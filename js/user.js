const loginbtn = document.querySelector("#login");

loginbtn.addEventListener("click", () => {
  window.location.replace("../login.html");
});

let url = new URLSearchParams(window.location.search);

console.log(window.location);

document.querySelector("h2").textContent = "Page " + url.get("page");

// function debounce(func, wait) {
//   let timeout;

//   return function () {
//     // let context = this;
//     let args = arguments;

//     clearTimeout(timeout);

//     timeout = setTimeout(function () {
//       func.apply(this, args);
//     }, wait);
//   };
// }

// function searchFun(search) {
//   const params = new URLSearchParams();
//   params.append("search", search);
//   const queryString = params.toString();

//   const baseUrl = window.location.href;
//   const url = new URL(baseUrl);

//   url.search = queryString;

//   window.history.pushState({ path: url.toString() }, "", url.toString());
// }

// // console.log(window.location);

// const debounceer = debounce(searchFun, 1000);

// document.querySelector("input").addEventListener("input", (e) => {
//   debounceer(e.target.value);
// });

function debounce(func, wait) {
  let timeout;

  return function () {
    let context = this;
    let args = arguments;

    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };
}

function searchElements(searchValue) {
  console.log(searchValue);

  let url = new URL(window.location.href);

  let query = new URLSearchParams();

  query.append("search", searchValue);

  const urlSearchQuery = query.toString();

  url.search = urlSearchQuery;

  // window.location.replace(url);

  window.history.pushState("", "", url.toString());
}

const debounceChild = debounce(searchElements, 300);

document.querySelector("input").addEventListener("input", (e) => {
  debounceChild(e.target.value);
});
