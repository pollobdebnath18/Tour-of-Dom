let thrivingList = [];
let strugglingList = [];

const total = document.getElementById("total");
const thriving = document.getElementById("thrivingCount");
const struggling = document.getElementById("strugglingCount");
// console.log(total, thriving, struggling);
const allCardSection = document.getElementById("allCards");
// console.log(allCardSection.children.length);

const mainContainer = document.querySelector("main");
// console.log(mainContainer);

function calculateCount() {
  total.innerText = allCardSection.children.length;
  thrivingCount.innerText = thrivingList.length;
  strugglingCount.innerText = strugglingList.length;
}
calculateCount();

const allBtn = document.getElementById("all-btn");
const thrivingBtn = document.getElementById("thriving-btn");
const strugglingBtn = document.getElementById("struggling-btn");
// console.log(allBtn,thrivingBtn,strugglingBtn);
function toggleStyle(id) {
  allBtn.classList.remove("bg-black", "text-white");
  thrivingBtn.classList.remove("bg-black", "text-white");
  strugglingBtn.classList.remove("bg-black", "text-white");

  allBtn.classList.add("bg-gray-200", "text-black");
  thrivingBtn.classList.add("bg-gray-200", "text-black");
  strugglingBtn.classList.add("bg-gray-200", "text-black");

  document.getElementById(id).classList.remove("bg-gray-200", "text-black");
  document.getElementById(id).classList.add("bg-black", "text-white");
}

mainContainer.addEventListener("click", function (event) {
  if (event.classList.contains("thriving-btn")) {
    const parentNode = event.target.parentNode.parentNode;
    const plantName = parentNode.querySelector(".plantName").innerText;
    const latinName = parentNode.querySelector(".latinName").innerText;
    const light = parentNode.querySelector(".light").innerText;
    const water = parentNode.querySelector(".water").innerText;
    const status = parentNode.querySelector(".status").innerText;
    const notes = parentNode.querySelector(".notes").innerText;
    console.log(plantName, latinName, light, water, status, notes);
    const cardInfo = {
      plantName,
      latinName,
      light,
      water,
      status,
      notes,
    };
    const plantExist = thrivingList.find(
      (item) => item.plantName == cardInfo.plantName,
    );
    if (!plantExist) {
      thrivingList.push(cardInfo);
    }
    renderThriving();
  }
});

const filteredSection = document.getElementById("filtered-section");
function renderThriving() {
  filteredSection.innerHTML = "";
  for (const thrive of thrivingList) {
    console.log(thrive);
    const div = document.createElement("div");
    div.className = "card flex justify-between items-center border p-4 mt-5";
    div.innerHTML = `
    <div class="space-y-6">
            <div>
              <p class="plantName text-3xl">Plant Name 1</p>
              <p class="latinName">Latin Name</p>
            </div>
            <div class="flex gap-4">
              <p class="light bg-gray-200 px-4">Bright Indicate</p>
              <p class="water bg-gray-200 px-4">Weekly</p>
            </div>
            <p class="status">Not Applicable</p>
            <p class="notes">Now leaf unfurling by the east window</p>

            <div class="">
              <button class="thriving-btn px-4 py-2 bg-green-200">
                Thrive
              </button>
              <button class="struggling-btn px-4 py-2 bg-red-200">
                Struggling
              </button>
            </div>
    `;
  }
}
