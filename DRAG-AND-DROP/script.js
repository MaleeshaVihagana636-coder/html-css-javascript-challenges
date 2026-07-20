const Cards = document.querySelectorAll(".card");
const Lists = document.querySelectorAll(".list");

for (const card of Cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}

for (const list of Lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

function dragStart(e) {
  //! This Allow us to use the id of the card that we're dragging
  e.dataTransfer.setData("text/plain", this.id);
}

function dragEnd() {
  console.log("Drag Ending");
}

function dragOver(e) {
  e.preventDefult();
}

function dragEnter(e) {
  e.preventDefult();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  this.appendChild(card);
  this.classList.remove("over");
}
