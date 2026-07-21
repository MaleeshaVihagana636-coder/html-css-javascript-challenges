const Cards = document.querySelectorAll(".card");
const Lists = document.querySelectorAll(".list");

// Ensure every card has a unique ID so dragging always works
Cards.forEach((card, index) => {
  if (!card.id) {
    card.id = "card-auto-" + index;
  }
});

for (const card of Cards) {
  card.addEventListener("dragstart", dragStart);
  card.addEventListener("dragend", dragEnd);

  // Touch support for mobile
  card.addEventListener("touchstart", touchStart, { passive: true });
  card.addEventListener("touchmove", touchMove, { passive: false });
  card.addEventListener("touchend", touchEnd, { passive: true });
}

for (const list of Lists) {
  list.addEventListener("dragover", dragOver);
  list.addEventListener("dragenter", dragEnter);
  list.addEventListener("dragleave", dragLeave);
  list.addEventListener("drop", dragDrop);
}

let draggedCard = null;

function dragStart(e) {
  draggedCard = this;
  e.dataTransfer.setData("text/plain", this.id);
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
  draggedCard = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("over");
}

function dragLeave(e) {
  this.classList.remove("over");
}

function dragDrop(e) {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const card = document.getElementById(id);
  if (card) {
    this.appendChild(card);
  }
  this.classList.remove("over");
}

// ----- Touch support for mobile devices -----
let touchDragCard = null;
let touchClone = null;

function touchStart(e) {
  touchDragCard = this;
  this.style.opacity = "0.5";
}

function touchMove(e) {
  e.preventDefault();
  const touch = e.touches[0];
  // Highlight the list under the finger
  Lists.forEach((list) => {
    const rect = list.getBoundingClientRect();
    if (
      touch.clientX >= rect.left &&
      touch.clientX <= rect.right &&
      touch.clientY >= rect.top &&
      touch.clientY <= rect.bottom
    ) {
      list.classList.add("over");
    } else {
      list.classList.remove("over");
    }
  });
}

function touchEnd(e) {
  if (!touchDragCard) return;
  touchDragCard.style.opacity = "1";

  const touch = e.changedTouches[0];
  Lists.forEach((list) => {
    const rect = list.getBoundingClientRect();
    if (
      touch.clientX >= rect.left &&
      touch.clientX <= rect.right &&
      touch.clientY >= rect.top &&
      touch.clientY <= rect.bottom
    ) {
      list.appendChild(touchDragCard);
    }
    list.classList.remove("over");
  });
  touchDragCard = null;
}
