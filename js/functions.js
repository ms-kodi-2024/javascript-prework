/* Messages */

function printMessage(msg) {
	let div = document.createElement('div');
	div.innerText = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerText = '';
}

/* Option choice */

function getMoveName(argMoveId) {
  if(argMoveId == 1){
    return movesNames.rock;
  } else if(argMoveId == 2) {
    return movesNames.paper;
  } else if(argMoveId == 3) {
    return movesNames.scissors;
  } else {
    printMessage(`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`);
    return movesNames.rock;
  }
}

/* Change of object dataGame */

function updateResult(dataGame, result) {
  if (result === 'win') {
    printMessage(`Wygrywasz!`);
    dataGame.pointsGamer++;
    handlesDisplay.messages.style.backgroundColor = '#00ee00';
  } else if (result === 'lose') {
    printMessage(`Przegrywasz :(`);
    dataGame.pointsComputer++;
    handlesDisplay.messages.style.backgroundColor = '#ee0000';
  } else if (result === 'draw') {
    printMessage(`Remis`);
    handlesDisplay.messages.style.backgroundColor = '#e0e0e0';
  }
}

function restart(dataGame) {
	dataGame.round = 0;
	dataGame.pointsGamer = 0;
  dataGame.pointsComputer = 0;
  for (let key in handlesDisplay) {
    handlesDisplay[key].classList.remove('display');
  }
}

/* Display game result */

function displayResult(argPlayerMove, { computerMove }) {
  console.log(`wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${computerMove}`);
  if (argPlayerMove == 'papier' && computerMove == 'kamień') {
    updateResult(dataGame, 'win');
  } else if (argPlayerMove == 'kamień' && computerMove == 'nożyce') {
    updateResult(dataGame, 'win');
  } else if (argPlayerMove == 'nożyce' && computerMove == 'papier') {
    updateResult(dataGame, 'win');
  } else if (argPlayerMove == 'papier' && computerMove == 'papier') {
    updateResult(dataGame, 'draw');
  } else if (argPlayerMove == 'kamień' && computerMove == 'kamień') {
    updateResult(dataGame, 'draw');
  } else if (argPlayerMove == 'nożyce' && computerMove == 'nożyce') {
    updateResult(dataGame, 'draw');
  } else {
    updateResult(dataGame, 'lose');
  }  
  printMessage(`Zagrałem ${computerMove}, a Ty ${argPlayerMove}`);
}

/* Button related functions */

function logsButtonClicked(argButtonName, dataGame) {
	console.log(`${argButtonName} został kliknięty`);
	console.log(`wylosowana liczba to: ${dataGame.randomNumber}`);
	console.log(`ruch komputera to: ${dataGame.computerMove}`);
}

function buttonClicked(playerMove, dataGame) {
	clearMessages();
		for (let key in handlesDisplay) {
    handlesDisplay[key].classList.add('display');
  }
	dataGame.round++;
  dataGame.randomNumber = dataGame.getRandomNumber();
	dataGame.computerMove = getMoveName(dataGame.randomNumber);
  logsButtonClicked(playerMove, dataGame);
	displayResult(playerMove, dataGame);
	handlesDisplay.result.innerText = `Runda: ${dataGame.round}:
	Punkty gracza: ${dataGame.pointsGamer} - Punkty komputera: ${dataGame.pointsComputer}`;
}  