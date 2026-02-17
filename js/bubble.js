console.log("hey bubble");
// const items = document.getElementsByClassName("item");
// for (const it of items) {
//   it.addEventListener("click", function (event) {
//     // console.log(event.target.parentNode);
//     event.target.parentNode.removeChild(event.target);
//   });
// }

document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

document.getElementById("add-item").addEventListener("click", function () {
  const section = document.getElementById("item-list");
  const li = document.createElement("li");
  li.innerText = "This is added parent section";
  section.appendChild(li);
});

//Summery of this module
//for btn-1
function addName() {
  const input = document.getElementById("input");
  const newInput = input.value;
  const li = document.createElement("li");
  li.innerText = newInput;

  //adding item list
  const itemList = document.getElementById("item-list");
  itemList.appendChild(li);
  input.value = "";
}

//for btn - 2
document.getElementById("add-name-btn").addEventListener("click", function () {
  const input = document.getElementById("input");
  const newInput = input.value;
  const li = document.createElement("li");
  li.innerText = newInput;

  //adding item list
  const itemList = document.getElementById("item-list");
  itemList.appendChild(li);
  input.value = "";
});
