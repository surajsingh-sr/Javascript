# Project 3

## Link [Click](https://codesandbox.io/p/sandbox/project-4-wynhgd?file=%2Fsrc%2Findex.mjs%3A17%2C1)

# #HTML
```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript Sandbox</title>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="styles.css" />
    <script src="./index.mjs" type="module"></script>
  </head>

  <body>
    <div class="wrapper">
      <h1 class="text-wrapper">Number guessing game</h1>
      <p class="text-wrapper">Try and guesse a random number between 1 to 100</p>
      <p class="text-wrapper">You have 10 attempted to guess right number</p>
    </div>
    <form class="form">
      <label for="guessfield" id=|"guessfield">Guess a Number</label>
      <input type="text" id="guessfield" class="guessfield"><br>
      <input type="submit" value="Submit guess" id="subt" class="guessSubmit">
    </form>
    <div class="resultparas">
        <p>Previous guess: = <span id="guess"></span></p>
        <p>Guesses Remaining: = <span id="lastresult">10</span></p>
    </div>
    <p id="lowOrhi"></p>
  </body>
</html>
```
# #CSS
```css
body {
  background-color: #212121;
}
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.text-wrapper {
  color: #fff;
  font-size: 30px;
}
label {
  color: #fbff00;
  font-size: 40px;
  margin: 29%;
}
input {
  width: 190px;
  height: 50px;
  border: 2px solid grey;
  display: flex;
  margin-left: 35%;
  margin-top: 20px;
}
.guessSubmit {
  width: 150px;
  height: 40px;
  font-weight: bold;
  color: #fff;
  border: 2px solid grey;
  font-size: 20px;
  background-color: green;
  margin-left: 40%;
  margin-top: 40px;
}
.resultparas {
  color: #fff;
  font-size: 20px;
  text-align: center;
  margin-top: 10%;
}
#lowOrhi {
  color: #fff;
  text-align: center;
}
```
# #Javascript
```javascript
// const form = document.querySelector(".form");
const randomNumber = parseInt(Math.random() * 10 + 1);
console.log(randomNumber);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessfield");
const form = document.querySelector(".form");
const startOver = document.querySelector(".resultparas");
const guessSlot = document.querySelector("#guess");
const remaining = document.querySelector("#lastresult");
const lowOrhi = document.querySelector("#lowOrhi");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (true) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    let guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter valied number:");
  } else if (guess < 1) {
    alert("Please enter valied number:");
  } else if (guess > 100) {
    alert("Please enter valied number:");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displaymessage(`Game over, random Number:- ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displaymessage("Your guess right");
  } else if (guess > randomNumber) {
    displaymessage("Your guess too greater");
  } else if (guess < randomNumber) {
    displaymessage("Your guess too less");
  }
}
function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `[${guess}], `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displaymessage(message) {
  lowOrhi.innerHTML = `<h1>${message}</h1>`;
}
function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
}
function newGame() {
  //
}

```