let pxLength = 960;
let length = 16;
let height = 16;
let squareBorderSize = 2;
let borders = true;

let rainbow = false;
let transitionInterval = 20;
let rgb = [255, 0, 0]

let sketch = true;

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset-button");
const bordersBtn = document.querySelector(".borders-button")
const rainbowBtn = document.querySelector(".rainbow-button")

let squareDiv;

let squaresNodeList;

buildSquares(length, height, pxLength);

resetBtn.addEventListener("click", resetSketch);
bordersBtn.addEventListener("click", () => {
    toggleBorders();
    if (borders) {
        bordersBtn.style.borderWidth = "4px";
    } else {
        bordersBtn.style.borderWidth = "1px";
    }
    
});
rainbowBtn.addEventListener("click", () => {
    toggleRainbow();
    if (rainbow) {
        rainbowBtn.style.borderWidth = "4px";
    } else {
        rainbowBtn.style.borderWidth = "1px";
    }
});


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
    if (rainbow) {
        this.style.backgroundColor = `rgb(
                ${rgb[0]},
                ${rgb[1]},
                ${rgb[2]}
            )`;
        rgb = rainbowTransition(rgb);
    } else {
        this.style.backgroundColor = "darkgrey";
    }
}



function rainbowTransition(rgb) {
    let [red, green, blue] = rgb;
    // red -> yellow
    if (red === 255 && green < 255 && blue === 0) {
        (green >= 255 - transitionInterval) ? green = 255 : green += transitionInterval;         
    }
    // yellow -> green
    else if (red > 0 && red <= 255 && green === 255 && blue === 0) {
        (red <= transitionInterval) ? red = 0 : red -= transitionInterval;
    }
    // green -> aqua
    else if (blue < 255 && red === 0 && green === 255 && blue >= 0) {
        (blue >= 255 - transitionInterval) ? blue = 255 : blue += transitionInterval;
    }
    // aqua -> blue
    else if (green > 0 && red === 0 && green <= 255 && blue <= 255) {
        (green <= transitionInterval) ? green = 0 : green -= transitionInterval;
    }
    // blue -> fuschia
    else if (red < 255 && red >= 0 && green === 0 && blue === 255) {
        (red >= 255 - transitionInterval) ? red = 255 : red += transitionInterval;
    }
    // fuschia -> red
    else if (red === 255 && green === 0 && blue <= 255) {
        (blue <= transitionInterval) ? blue = 0 : blue -= transitionInterval;
    }
    rgb = [red, green, blue];
    return rgb;
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
    rgb = [255, 0, 0];
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

function toggleRainbow() {
    if (rainbow === true) {
        rainbow = false;
    } else {
        rainbow = true;
    }
}

function togglesketch() {
    (sketch) ? sketch = false : sketch = true;
}