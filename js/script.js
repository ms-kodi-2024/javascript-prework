const playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
const playerMove = getMoveName(playerInput);
const randomNumber = Math.floor(Math.random() * 3 + 1);
const computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);
printMessage('Twój ruch to: ' + playerMove);
displayResult(playerMove, computerMove);

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wpisał: ' + playerInput);