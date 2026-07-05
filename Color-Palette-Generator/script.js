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
    const colorBoxes = document.querySelectorAll(".color-box");
    colorBoxes.forEach((colorBox, index) => {
        const color = colors[index];
        const colorDiv =  colorBox.querySelector(".color");
        const colorCode = colorBox.querySelector(".color-code");
        colorDiv.style.backgroundColor = color;
        colorCode.textContent = color;
    })
}

generatePalette();
