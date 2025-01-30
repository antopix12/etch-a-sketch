const container = document.querySelector(".container");

const square = document.createElement("div");
square.classList.add("square");


function createSquare(size) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", handleSquareHover);
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  return square;
}

function handleSquareHover(event) {
  event.target.style.backgroundColor = 'red';
}

function resetGrid (gridSize) {
  // clear grid
  container.innerHTML = '';

  // calculate appropriate widths and heights to fit in a 960px container
  let x = 800 / gridSize;

  // run the for loop below to draw the appropriate amount of squares.
  for (let i = 0; i < Math.pow(gridSize, 2); i++) {
    container.appendChild(createSquare(x));
  }
}



const btn = document.querySelector('#btn');
btn.textContent = "Choose Grid Size";
document.body.appendChild(btn);

btn.addEventListener('click', () => {
  let input = prompt("Enter grid size");

  if (Number.isInteger(input)) {
    alert("Please enter an integer");
  } else if (input > 100 || input < 0) {
    alert("Please enter a number between 0 and 100");
  } else {
    resetGrid(input);
  }
})