//set important constants and variables
const gridContainer = document.getElementById("grid-container")

function destroyGrid() {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild)
    }
}

function makeGrid(rows, cols) {
    gridContainer.style.setProperty('--grid-rows', rows);
    gridContainer.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement('div');
        gridContainer.appendChild(cell).className = 'grid-item';
    };
    // add hover effect on each grid cell to colour when hovering
    let gridItems = document.getElementsByClassName('grid-item');

    let colourCell = function(elem) {
        elem.target.style.background = 'black';
    };

    for (let i = 0; i < gridItems.length; i++) {
        gridItems[i].addEventListener('mouseover', colourCell);
}
};

makeGrid(16, 16); //create grid

//add resetButton functionality
let resetBoard = function() {
    let gridItems = document.getElementsByClassName('grid-item');
    for(let i = 0; i < gridItems.length; i++) {
        gridItems[i].style.background = 'white';
    }
}
const resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', resetBoard);

//add change size button functionality
const sizeBtn = document.getElementById('size-btn');
sizeBtn.addEventListener('click', ()=> {
    let sizePrompt = prompt("Enter what size square grid you would like. (Max 50 x 50 grid)");
    if (sizePrompt > 50 || sizePrompt < 0) {
        alert('Invalid Size, must be in range 0-50!');

    } else {
        destroyGrid();
        makeGrid(sizePrompt, sizePrompt);
        resetBoard;
    }
});