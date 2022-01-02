const length = 16;
const height = 16;
const numSquares = length * height;

const container = document.querySelector(".container");
let squareDiv;

for (let i = 0; i < numSquares; i++) {
    squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    
    // if it is the last square in the row, move to next row with float/clear
    if ((i % length === 0) && i !== 0) {
        squareDiv.style.clear = "left";
    }

    
    container.appendChild(squareDiv);

}

let squares = document.querySelectorAll(".square");
squares.forEach((square) => {
    square.addEventListener("mouseover", hover);
    // square.addEventListener("mouseout", unhover);
});

function hover() {
    this.classList.add("hover");
}

function unhover() {
    this.classList.remove("hover");
}