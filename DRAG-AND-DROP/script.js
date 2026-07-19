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
