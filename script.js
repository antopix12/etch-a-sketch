const container = document.querySelector(".container");


const square = document.createElement("div");
square.classList.add("square");


function createSquare() {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", handleSquareHover);
  return square;
}

function handleSquareHover(event) {
  event.target.style.backgroundColor = 'red';
}

for (let i = 0; i < 256; i++) {
  container.appendChild(createSquare());
}
