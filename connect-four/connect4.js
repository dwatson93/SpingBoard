/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let WIDTH = 7;
let HEIGHT = 6;
let TotalPieces = 0;

let currPlayer = 1; // active player: 1 or 2
let board = [6][7]; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  board = [
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
    [ null, null, null, null, null, null, null ],
  ];
  return board;
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() 
{
  // TODO: get "htmlBoard" letiable from the item in HTML w/ID of "board"
  htmlBoard = document.getElementById("board");

  // TODO: add comment for this code
  let top = document.createElement("tr"); // creates the top row
  top.setAttribute("id", "column-top");// adds a css class
  top.addEventListener("click", handleClick); // add a click eventlistner to this row 

  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // TODO: add comment for this code
  for (let y = 0; y < HEIGHT; y++) {// creates a row element
    const row = document.createElement("tr"); 
    for (let x = 0; x < WIDTH; x++) { // add 7 cell blocks horizontal
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let i = 5; i >= 0; i--)
    {
        if (board[i][x] == null)
        {
          console.log(board[i][x]);
          if (currPlayer === 1){board[i][x] = 1;}// update that spot has been taken
          
          else if (currPlayer === 2) {board[i][x] = 2;}

          return i;
        }

        
    }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y,x) {
  // TODO: make a div and insert into correct table cell
  console.log(y);
  TempTable = document.getElementById(`${y}-${x}`);
  console.log(TempTable);
  
  if (currPlayer === 1)
  {
    TempTable.classList.add("piece1");
    TotalPieces++;
  }

  else if (currPlayer === 2)
  {
    TempTable.classList.add("piece2");
    TotalPieces++;
  }

}

/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = evt.target.id;
  console.log(x);

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);
  
  //if(cellsFilled(board)){ return endGame("TIE!!!")}
 if(TotalPieces === 42){ return endGame("TIE!!!")}

 
  // check for win
    
  if (checkForWin()) 
  {
    return endGame(`Player ${currPlayer} won!`);
  }
   
  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  

   
  

  // switch players
  if (currPlayer === 1)
    {
      currPlayer = 2;
    }

    else if (currPlayer === 2)
    {
      currPlayer = 1;
    }
    
  // TODO: switch currPlayer 1 <-> 2
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
        

    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}
function cellsFilled(array) 
  { 
    return array.every(function(player)
    {
       if(player === 1 || player === 2){return true}
    })
    
   }
makeBoard();
makeHtmlBoard();
