//Global variables
const container = document.querySelector('#container');
const btn1 = document.querySelector('#btn1');

const gridSize = 400;
let choice = 16;
let previousChoice = 16;
let clickCounter = 0;

//Function Definitions
function turnOpaque(element) {
    element.onmouseover = function () {
                element.style.backgroundColor = '#00203FFF';
    };
}

function turnRGB(element) {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.onmouseover = function () {
                element.style.backgroundColor = randomColor;
    };
}

function createDiv(item) {
    let div = document.createElement('div');
    div.id = 'Grid';

    if(item < 22) { //grid gets messed up after 22
        div.style.height = (gridSize/item) - 2 ;    //taking into account of 1px border
        div.style.width = (gridSize/item) - 2;
    }

    container.appendChild(div);
    turnOpaque(div);
}

function createDivRGB(item) {
    let div = document.createElement('div');
    div.id = 'Grid';

    if(item < 22) {
        div.style.height = (gridSize/item) - 2 ;    
        div.style.width = (gridSize/item) - 2;
    }

    container.appendChild(div);
    turnRGB(div);
}

function createGrid(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            createDiv(size);
        }
    }
}

function createGridRGB(size) {
    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++) {
            createDivRGB(size);
        }
    }
}

function clearGrid(item) {
    for(let i = 0; i < item; i++) {
        for(let j = 0; j < item; j++) {
            let element = document.getElementById('Grid');
            element.parentNode.removeChild(element);
        }
    }
}

function clear() {
    if(clickCounter == 0) {
        clearGrid(16); //clears initial grid
        clickCounter++;
    }
    else {
        clearGrid(previousChoice); //previous choice needed to clear the previous grid
    }
}

function clearAndKeepGrid(item) {
    clear();
    createGrid(item);
} 

function promptUser() {
    choice = prompt("Enter the gridSize of grid (1-21)");

    if(choice > 21) {
        choice = prompt("Please Enter between 1 & 21");
    }
    return choice;
}
//End of Function Definitions

//Event listeners
btn1.addEventListener('click', () => {
    clearAndKeepGrid(previousChoice); //Clears grid on screen
});

btn2.addEventListener('click', () => {
    choice = promptUser();

    clear();
    createGrid(choice); //Creates a new grid based on user input
    
    previousChoice = choice; //needed for clearing grid that was present
});

btn3.addEventListener('click', () => {
    clear();
    createGridRGB(choice);
});

//Code
createGrid(16); //Creates 16X16 grid 
