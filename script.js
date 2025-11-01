let createBtn = document.getElementById("create-note-btn");
let notesContainer = document.getElementById("notes-container");

function createInputBox() {
  let inputBox = document.createElement("p");
  inputBox.className = "input-box";
  inputBox.contentEditable = "true";
  let deleteIcon = document.createElement("img");
  deleteIcon.src = "/images/delete.png";
  deleteIcon.id = "delete-icon";
  notesContainer.appendChild(inputBox).appendChild(deleteIcon);
}

notesContainer.addEventListener("click", function (event) {
  if (event.target.id === "delete-icon") {
    event.target.parentElement.remove();
    saveNotesToLocalStorage();
  } 

});

createBtn.addEventListener("click", function () {
  createInputBox();
});

function saveNotesToLocalStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
  console.log(notesContainer.innerHTML);
}

function shwoNotesFromLocalStorage() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

shwoNotesFromLocalStorage();

