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
document.getElementById("update-btn").addEventListener("click", function () {
  const inputT = document.getElementById("input-text").value;
  const updateName = document.getElementById("update-name");
  updateName.innerText = inputT;
});

//Comment
document.getElementById("post-btn").addEventListener("click", function () {
  const comment = document.getElementById("input-field");
  const newComment = comment.value;
  console.log(newComment);
  const commentContainer = document.getElementById("comment-section");
  console.log(commentContainer);
  const newDiv = document.createElement("div");
  newDiv.innerText = newComment;
  commentContainer.appendChild(newDiv);
  //clear text area
  comment.value = "";
});

// Micky Mouse

// document.getElementById('mouse').addEventListener('mouseenter', function (){
//     console.log("Mouse Enter");
// })
// document.getElementById('mouse').addEventListener('mousemove', function (){
//     console.log("Mouse Enter");
// })
// document.getElementById('mouse').addEventListener('mouseout', function (){
//     console.log("Mouse Enter");
// })

// document.getElementById('input1').addEventListener('focus', function (){
//     console.log('focus listener.');
// })
// document.getElementById('input2').addEventListener('blur',function(){
//     console.log('this is blur');
// } )
// document.getElementById('input1').addEventListener('blur', function(){
//     console.log('first input done')
// })

// document.getElementById('input1').addEventListener('keydown', function(event){
//     console.log('typing : ',event.target.value);
// })

// document.getElementById('input1').addEventListener('keyup', function(event){
//     console.log('typing : ',event.target.value);
// })

//Delete attribute
document.getElementById("delete-item").addEventListener("keyup", function (e) {
  const text = e.target.value;
  const deleteBtn = document.getElementById("delete-btn");
  if (text == "delete") {
    console.log('yes')
    deleteBtn.removeAttribute('disabled');
  } else {
    console.log('no')
    deleteBtn.setAttribute("disabled", true);
  }
});
