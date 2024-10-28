const dataGame = {
	round: 0,
	pointsGamer: 0,
  pointsComputer: 0,
  computerMove: 0,
  randomNumber: 0,
  getRandomNumber: () => Math.floor(Math.random() * 3 + 1)
} 
  
const handlesButtons = {
  rock: document.getElementById('rock'),
  paper: document.getElementById('paper'),
  scissors: document.getElementById('scissors')
}

const handlesDisplay = {
  messages: document.getElementById('messages'),
  result: document.getElementById('result'), 
  restart: document.getElementById('restart')
}

const movesNames = {
  rock: "kamień",
  paper: "papier",
  scissors: "nożyce"
}

for (let key in movesNames) {
  handlesButtons[key].addEventListener('click', function() {
    buttonClicked(movesNames[key], dataGame);
  });
}

document.getElementById('restartGame').addEventListener('click', function(){ restart(dataGame) });