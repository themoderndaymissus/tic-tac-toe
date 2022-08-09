// // https://gist.github.com/textchimp/afcb3ddc676dccd59ccb18cb9391c87a

// Technical Requirements

// Your app must:

//     Render a game board in the browser
//     Switch turns between X and O (or whichever markers you select); your game should prevent users from playing a turn into a square that is already occupied
//     Visually display which side won if a player gets three in a row; or show a draw/"cat’s game" if neither wins
//     Include separate HTML / CSS / JavaScript files
//     Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
//     Use Javascript with jQuery (or vanilla DOM methods if you really prefer) for DOM manipulation
//     Deploy your game online, where the rest of the world can access it
//     Use semantic markup for HTML and CSS (adhere to best practices)


//     Bonus

// These are for extra credit! Don't focus on these until you've hit the core requirements.

//     Keep track of multiple game rounds with a win counter

//     Allow players to customize their tokens (X, O, name, picture, etc)

//     Get inventive with your styling, e.g. use hover effects or animations to spiff things up

//     Make your game layout responsive so it works on differently-sized screens by exploring CSS Media Queries, CSS variables, and CSS layout mechanisms like Flexbox or Grid

//     Use LocalStorage to persist data locally to allow games to continue after page refresh or loss of internet connectivity

//     Support custom board sizes: default is 3x3 but you could allow users to choose a larger board

//     Create an AI opponent: teach Javascript to play an unbeatable game against you
//         Start by implementing a few simple rules which can be easily checked and are always good moves, such as "always take the center square if it's available" - you can google these rules for yourself
//         You can build in as many AI player rules as you like but you'll quickly end up with a longwinded list of if-else-if statements. To make a truly unbeatable AI opponent you'll need to look into implementing a recursive full-game-tree algorithm like MiniMax - for advanced/bold students only!

//     Start again by implementing a totally different game: Try Checkers, or Battleships.... or Chess (if you're feeling very brave)

//     Support networked multiplayer: https://www.firebase.com/ has a nice quickstart guide

//     Necessary Deliverables

//     A working game, built by you, hosted on GitHub Pages
//     A git repository hosted on Github, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
//     A README.md file in your repo with a link to the live game, a list of features, explanations of the technologies used, the approach taken, known bugs, etc. Also, a screenshot or two is nice to have.
//     On Friday of project week everyone individually presents their project to the class, with an overview of the app and a brief code tour of the highlights (15 min total, maximum).

// Player types (X and O)
const boxes = document.querySelectorAll(".box");
const PLAYER_X = 'X';
const PLAYER_O = 'O';
let turn = PLAYER_X;

const boardState = Array(boxes.length);
boardState.fill(null);

// Elements and defining their roles//
const strike = document.getElementById("strike");
const gameOverArea = document.getElementById("game-over-area");
const gameOverText = document.getElementById("game-over-text");
const playAgain = document.getElementById("play-again");

// Sound Effects // 
// const gameOverSound = new Audio('tic-tac-toe/resources/audio/gameover.wav'); 
// const clickingSound = new Audio("tic-tac-toe/resources/audio/clickingSound.wav");
// const winnerSound = new Audio - 

// Loop to check each box to identify which box was cliked //
boxes.forEach((box) => box.addEventListener("click", boxClick));

function setHoverText(){
// remove all hover text values
    boxes.forEach(box=>{
        box.classList.remove("x-hover")
        box.classList.remove("o-hover")
    });
// string - defining what class based on the current players turn
    const hoverClass = `${turn.toLowerCase()}-hover`;
// loop through each box to identify what hover is needed based on if there is any text inside of the box
    boxes.forEach(box=>{
        if(box.innerText == ""){
            box.classList.add(hoverClass);
        }
    })
};

setHoverText();

// Game over box display - class "visible" or "hidden", if it is visible - return. //
function boxClick(event) {
    if(gameOverArea.classList.contains('visible')){
        return;
    }
// HTML box elements and the data-index of each boxNumber and what boxNumber that was clicked. This checks the box value (X or O) - return. //
    const box = event.target;
    const boxNumber = box.dataset.index;
    if (box.innerText != "") {
        return;
    }
// Check for next players turn - PLAYER_X turn
    if (turn === PLAYER_X) {
        box.innerText = PLAYER_X;
        boardState[boxNumber -1] = PLAYER_X;
        turn = PLAYER_O;
    }
// Check for next players turn - PLAYER_O turn  
    else {
        box.innerText = PLAYER_O;
        boardState[boxNumber -1] = PLAYER_O;
        turn = PLAYER_X;

    }
    // clickSound.play(); - Need to fix!!!!!!!!!!!!

    setHoverText();
    checkWinner();
}

// check for winner 


// check for draw


// reset game to appear


// potential winning combos






