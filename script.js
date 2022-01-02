let pxLength = 960;
let length = 16;
let height = 16;

let squareBorderSize = 2;
let borders = true;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-button");
const bordersBtn = document.querySelector(".borders-button")

let squareDiv;

let squaresNodeList;

buildSquares(length, height, pxLength);

resetBtn.addEventListener("click", resetSketch);
bordersBtn.addEventListener("click", toggleBorders);

function buildSquares(length, height, pxLength) {

    // Removes all squares if there are any pre-existing ones
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (let i = 0; i < length * height; i++) {
        squareDiv = document.createElement("div");
        squareDiv.style.width = `${pxLength / length}px`;
        squareDiv.style.height = `${pxLength / height}px`;
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
        if (borders) {
            square.style.border = square.style.border = `${squareBorderSize}px solid black`;
        }
    });
    squaresNodeList = squares;
}

function hover() {
    this.classList.add("hover");
}

function unhover() {
    this.classList.remove("hover");
}

function resetSketch() {
    length = prompt("How many squares per side?");
    if (!length || length == 0) {
        return;
    } else if (length > 100) {
        alert("You cannot have more than 100 squares per side!");
        return;
    }
    height = length;
    buildSquares(length, height, pxLength);
}

function toggleBorders() {
    if (borders) {
        squaresNodeList.forEach(square => {
            square.style.border = "0";
        });
        borders = false;
    } else {
        squaresNodeList.forEach(square => {
            square.style.border = `${squareBorderSize}px solid black`;
        });
        borders = true;
    }
}