const generateBtn = document.querySelector("#generate-btn");
const paletteContainer = document.querySelector(".palettes-container");


generateBtn.addEventListener("click",generatePalette)

function generatePalette(){
    let color = [];
    for (let i = 0; i < 5; i++) {
        color.push(generateRandomColor())
    }
};
function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
}
generatePalette();
