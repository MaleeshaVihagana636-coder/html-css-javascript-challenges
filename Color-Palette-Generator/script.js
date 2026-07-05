const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palettes-container");


generateBtn.addEventListener("click",generatePalette)

function generatePalette(){
    let color = [];
    for (let i = 0; i < 5; i++) {
        color.push(generateRandomColor())
    }

    updatePaletteDisplay(color);
};
function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updatePaletteDisplay(colors){
    const ColorBox = document.querySelector(".color-box");
    ColorBox.forEach((colorBox, index) => {
        const color = colors[index];
        const colorDiv =  document.querySelector(".color");
        const colorCode = document.querySelector(".color-code");
        colorDiv.style.backgroundColor = color;
        colorCode.textContent = color;
    })
    paletteContainer.innerHTML = "";
}

generatePalette();
