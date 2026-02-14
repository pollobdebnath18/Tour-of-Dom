console.log("This is child node");

const newChild1 = document.createElement("li");
newChild1.innerText = "Tuni is my favorite cat of all time";
const animalParent = document.getElementById("animal");
animalParent.appendChild(newChild1);

// create new section
const mainSection = document.getElementById("main-section");
const newSection = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Visited Chattogram for mind fresh.";
newSection.appendChild(h1);
const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Bandorban is nice place.";
const li2 = document.createElement("li");
li2.innerText =
  "sundorbon is also nice place but i dont have money after that i dont going to visited this place";

  ul.appendChild(li1);
  ul.appendChild(li2);

  newSection.appendChild(ul);

mainSection.appendChild(newSection);
