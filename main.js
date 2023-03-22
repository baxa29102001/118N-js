const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const form = document.getElementById("form");
const close = document.getElementById("close");
const username = document.getElementById("username");
const phoneNumber = document.getElementById("phoneNumber");
const address = document.getElementById("address");
const pizzaSize = document.querySelectorAll(".pizzaSize");
const pizzaSize1 = document.querySelectorAll(".pizzaSize1");
const productsCheck = document.querySelectorAll(".products-check");
const productsCheck1 = document.querySelectorAll(".products-check1");
const extraCheck = document.querySelectorAll(".extra-check");
const thickness = document.querySelector("#thickness");
const result5 = document.querySelector("#result");
const editPhoneNumber = document.getElementById("editPhoneNumber");
const editAddress = document.getElementById("editAddress");
const editUsername = document.getElementById("editUsername");
const editThickness = document.getElementById("editThickness");
const editForm = document.getElementById("editForm");

let sizeValue = 25;
let sizeValue1;

let onPizzaValues = [];
let onEditPizzaValues = [];
let orderArr = [];

let thicknessPrice = {
  none: 0,
  Thin: 10,
  Medium: 12,
};
let sizePrice = {
  20: 0,
  Thin: 10,
  Medium: 12,
};

let globalEditElement;

function saveOrder(e) {
  e.preventDefault();

  let orderObj = {
    id: Math.random().toFixed(2),
    username: username.value,
    phoneNumber: phoneNumber.value,
    address: address.value,
    thickness: thickness.value,
    sizeValue,
    onPizzaValues,
    onTotal: onPizzaValues.length * 5 + thicknessPrice[thickness.value],
  };

  orderArr.push(orderObj);
  renderHtmlElements();
}

function renderHtmlElements() {
  console.log(orderArr);
  let result = orderArr
    .map((item, index) => {
      let element = ` <div class="menu-info">
    <h1>Order: ${index + 1}</h1>
    <div class="form-info">
      <p><span>Name: </span> Palonchiyev Pistonchi</p>
      <p><span>Phone: </span> +99890 111 11 11</p>
      <p><span>Address: </span> Chilonzor t. Al-Xorazmiy, Lutfiy ko'chasi-56</p>
    </div>
  </div>
  <div class="pizza-info">
    <p><span>Dough thickness: </span> Medium</p>
    <p><span>Size: </span> 25sm</p>
    <p><span>On Pizza: </span> ${item.onPizzaValues.join(",")}</p>
    <p><span>Add: </span> Pepper</p>
  </div>
  <div class="total">
    <h3>Total:  <span>$${item.onTotal}</span></h3>


    <button onclick="removeElement(${item.id})">Delete</button>
    <button onclick="editItem(${item.id})">Edit</button>
  </div> `;

      return element;
    })

    .join(" ");

  result5.innerHTML = result;
}

function removeElement(id) {
  orderArr = orderArr.filter((item) => {
    return +item.id !== id;
  });
  renderHtmlElements();
}

function editItem(id) {
  modal.style.display = "flex";

  let findedElement = orderArr.find((item) => +item.id === id);
  let findedElementindex = orderArr.findIndex((item) => +item.id === id);
  globalEditElement = {
    index: findedElementindex,
    id,
  };
  editAddress.value = findedElement.address;
  editUsername.value = findedElement.username;
  editPhoneNumber.value = findedElement.phoneNumber;
  editThickness.value = findedElement.thickness;
  sizeValue1 = findedElement.sizeValue;
  let findedHtmlElement = Array.from(pizzaSize1).find((item) => {
    return +item.dataset.value === findedElement.sizeValue;
  });

  findedHtmlElement.classList.add("active");

  onEditPizzaValues = findedElement.onPizzaValues;

  findedElement.onPizzaValues.forEach((item) => {
    let findCheckboxValue = Array.from(productsCheck1).find((item1) => {
      return item1.value === item;
    });

    findCheckboxValue.checked = true;
  });
}

pizzaSize.forEach((item) => {
  item.addEventListener("click", (e) => {
    pizzaSize.forEach((item) => {
      item.classList.remove("active");
    });
    sizeValue = +e.target.id;
    e.target.classList.add("active");
  });
});
pizzaSize1.forEach((item) => {
  item.addEventListener("click", (e) => {
    pizzaSize1.forEach((item) => {
      item.classList.remove("active");
    });
    sizeValue1 = +e.target.dataset.value;
    e.target.classList.add("active");
  });
});

productsCheck.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (onPizzaValues.includes(e.target.value)) {
      onPizzaValues = onPizzaValues.filter((item) => item !== e.target.value);
    } else {
      onPizzaValues.push(e.target.value);
    }
  });
});
productsCheck1.forEach((item) => {
  item.addEventListener("change", (e) => {
    if (onEditPizzaValues.includes(e.target.value)) {
      onEditPizzaValues = onEditPizzaValues.filter(
        (item) => item !== e.target.value
      );
    } else {
      onEditPizzaValues.push(e.target.value);
    }
  });
});

function editSaveOrder(e) {
  e.preventDefault();

  let orderObj = {
    id: globalEditElement.id,
    username: editUsername.value,
    phoneNumber: editPhoneNumber.value,
    address: editAddress.value,
    thickness: editThickness.value,
    sizeValue: sizeValue1,
    onPizzaValues: onEditPizzaValues,
    onTotal: onPizzaValues.length * 5 + thicknessPrice[editThickness.value],
  };

  orderArr.splice(globalEditElement.index, 1, orderObj);
  modal.style.display = "none";
  document.querySelector(".container").style.display = "none";
  renderHtmlElements();
}

form.addEventListener("submit", saveOrder);
editForm.addEventListener("submit", editSaveOrder);
