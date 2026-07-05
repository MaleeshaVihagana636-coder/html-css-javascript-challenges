const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palettes-container");
const copyButtons = document.querySelectorAll(".copy-btn");

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("copy-btn")) {
    const colorCode = event.target.previousElementSibling.textContent;
    navigator.clipboard
      .writeText(colorCode)
      .then(() => showcopySuccses())
      .catch((err) => console.error("Failed to copy text: ", err));
  } else if (event.target.classList.contains("color")) {
    const hexValue =
      event.target.nextElementSibling.querySelector(".color-code").textContent;
    navigator.clipboard
      .writeText(hexValue)
      .then(() => showcopySuccses())
      .catch((err) => console.error("Failed to copy text: ", err));
  }
});

function showcopySuccses() {
  copyButtons.classList.remove("far", "fa-copy");
  copyButtons.classList.add("far", "fa-check");
  copyButtons.style.color = "green";

  setTimeout(() => {
    copyButtons.classList.remove("far", "fa-check");
    copyButtons.classList.add("far", "fa-copy");
    copyButtons.style.color = "";
  }, 2000);
}

function generatePalette() {
  let color = [];
  for (let i = 0; i < 5; i++) {
    color.push(generateRandomColor());
  }

  updatePaletteDisplay(color);
}
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updatePaletteDisplay(colors) {
  const colorBoxes = document.querySelectorAll(".color-box");
  colorBoxes.forEach((colorBox, index) => {
    const color = colors[index];
    const colorDiv = colorBox.querySelector(".color");
    const colorCode = colorBox.querySelector(".color-code");
    colorDiv.style.backgroundColor = color;
    colorCode.textContent = color;
  });
}

generatePalette();
