// Your code goes here!
const frm = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");
const gridRows = document.querySelector("#inputHeight");
const gridColumns = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
function makeGrid(event) {
  table.innerHTML = "";
  // Select size input
  for (let i = 0; i < gridRows.value; i++) {
    const tr = document.createElement("tr");
    table.append(tr);
    for (let j = 0; j < gridColumns.value; j++) {
      const td = document.createElement("td");
      tr.append(td);
    }
  }
  event.preventDefault();
}
frm.addEventListener("submit", makeGrid);

// Select color input
function disColor(evt) {
  const newColor = document.querySelector("#colorPicker").value;
  evt.target.style.backgroundColor = newColor;
}
table.addEventListener("click", disColor);
