const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palettes-container");

generateBtn.addEventListener("click", generatePalette);

paletteContainer.addEventListener("click", (event) => {
  const copyBtn = event.target.closest(".copy-btn");
  const colorDiv = event.target.closest(".color");

  if (copyBtn) {
    const colorCode = copyBtn.previousElementSibling.textContent;
    copyToClipboard(colorCode, copyBtn);
  } else if (colorDiv) {
    const colorInfo = colorDiv.nextElementSibling;
    const hexValue = colorInfo.querySelector(".color-code").textContent;
    const btn = colorInfo.querySelector(".copy-btn");
    copyToClipboard(hexValue, btn);
  }
});

function copyToClipboard(text, button) {
  // Show visual feedback immediately (checkmark icon)
  showCopySuccess(button);

  // Attempt clipboard copy (may silently fail on file:// protocol)
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
    }
  } catch (e) {
    // Clipboard unavailable - visual feedback already shown
  }
}

function showCopySuccess(button) {
  button.classList.remove("fa-copy");
  button.classList.add("fa-check");
  button.style.color = "#15803d";

  setTimeout(() => {
    button.classList.remove("fa-check");
    button.classList.add("fa-copy");
    button.style.color = "";
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
