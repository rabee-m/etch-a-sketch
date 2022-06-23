//set important constants and variables
const gridContainer = document.getElementById("grid-container")

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'grid-item';
    };
};

makeGrid(16, 16); //create grid

// add hover effect on each grid cell to colour when hovering
let gridItems = document.getElementsByClassName('grid-item');

let colourCell = function(elem) {
    elem.target.style.background = 'black';
};

for (let i = 0; i < gridItems.length; i++) {
    gridItems[i].addEventListener('mouseover', colourCell);
}

//add resetButton functionality
let resetBoard = function() {
    let gridItems = document.getElementsByClassName('grid-item');
    for(let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.background = 'white';
    }
}
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetBoard);

