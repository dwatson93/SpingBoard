const gameContainer = document.getElementById("game");
let tries = 0;
let Choice = [""," "];
let click = ["", " "];


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
  
  if(tries <= 2)
  {
    click[tries] = event.target;
    Choice[tries] = event.target.className;
  if (click[0] !== click[1])
  { 
    tries++;
    event.target.style.background = event.target.className;
    
 
    
    
      CheckMatch(event);
      console.log(tries);
      console.log(click[tries]);
  }
  
  
 
  
  
  

  


  
  
  }

  
  
  
}



function CheckMatch(event)
{
  if(Choice[0] === Choice[1])
  {
    console.log("MATCH");
    
    return tries = 0;
  }

  else if ( tries == 2 && Choice[0] != Choice[1] )
  {
    setTimeout(function() {click[0].style.background = "white";}, 1000);
    
    setTimeout(function() {click[1].style.background = "white";}, 1000);

    return tries = 0;
  }
}
// when the DOM loads
createDivsForColors(shuffledColors);
