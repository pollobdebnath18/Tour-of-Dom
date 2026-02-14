console.log("Event is working.");
function changeDisplay() {
  document.body.style.backgroundColor = "gray";
}
const makeBlue = document.getElementById("make-blue");
makeBlue.onclick = changeBlue;

function changeBlue() {
  document.body.style.backgroundColor = "blue";
}
document
  .getElementById("make-purple")
  .addEventListener("click", function makePurple() {
    document.body.style.backgroundColor = "purple";
  });

//updated text
document
  .getElementById("update-text")
  .addEventListener("click", function changeText() {
    const info = document.getElementById("title");
    // console.log(info);
    info.innerText = "Now this is Updated";
  });

//update input field
document.getElementById('update-btn').addEventListener('click', function (){
   const inputT = document.getElementById('input-text').value;
   const updateName = document.getElementById('update-name');
   updateName.innerText= inputT;
})