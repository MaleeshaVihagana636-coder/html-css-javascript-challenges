const Cards = document.querySelectorAll(".card");
const Lists = document.querySelectorAll(".list");

for (const card of Cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);
}
