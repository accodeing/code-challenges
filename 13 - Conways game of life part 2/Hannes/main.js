let grid;
let columns;
let rows;
let resolution = 40;

const make2DArray = (nrOfColumns, nrOfRows) => {
  let array = new Array(nrOfColumns);

  for (let index = 0; index < array.length; index++) {
    array[index] = new Array(nrOfRows);
  }

  return array;
};

const draw = () => {
  cols = width / resolution;
  rows = height / resolution;
  grid = make2DArray(columns, rows);

  for (let colsIndex = 0; colsIndex < columns; colsIndex++) {
    for (let rowsIndex = 0; rowsIndex < rows; rowsIndex++) {
      grid[colsIndex][rowsIndex] = Math.round(Math.random(2));
    }
  }

  console.table(grid);

  const canvas = document.getElementById('canvas');

  if (canvas.getContext) {
    var context = canvas.getContext('2d');

    context.beginPath();
    context.moveTo(75, 50);
    context.lineTo(100, 75);
    context.lineTo(100, 25);
    context.fill();
  }
};

draw();
