let token = localStorage.getItem("token") || "";

if (token) {
  window.location.replace("../admin.html");
}

const loginbtn = document.querySelector("#login");

loginbtn.addEventListener("click", () => {
  window.location.replace("../admin.html");
});

localStorage.setItem("toke");
