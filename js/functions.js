function printMessage(msg){
	let div = document.createElement('div');
	div.innerText = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerText = '';
}

function getMoveName(argMoveId) {
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2) {
    return 'papier';
  } else if(argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage(`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`);
    return 'kamień';
  }
}

function winner() {
  printMessage('Wygrywasz!');
}

function looser() {
  printMessage('Przegrywasz :(');
}

function deadHeat() {
  printMessage('Remis');
}

function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    winner();
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    winner();
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    winner();
  } else if (argPlayerMove == 'papier' && argComputerMove == 'papier') {
    deadHeat();
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'kamień') {
    deadHeat();
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'nożyce') {
    deadHeat();
  } else {
    looser();
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}