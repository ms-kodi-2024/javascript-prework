class Game {
    #dataGame = {
      round: 0,
      pointsGamer: 0,
      pointsComputer: 0,
      computerMove: 0,
      randomNumber: 0,
      getRandomNumber: () => Math.floor(Math.random() * 3 + 1)
    } 
      
    #handlesButtons = {
      rock: document.getElementById('rock'),
      paper: document.getElementById('paper'),
      scissors: document.getElementById('scissors')
    }
    
    #handlesDisplay = {
      messages: document.getElementById('messages'),
      result: document.getElementById('result'), 
      restart: document.getElementById('restart')
    }
    
    #movesNames = {
      rock: "kamień",
      paper: "papier",
      scissors: "nożyce"
    }
  
    printMessage(msg) {
      let div = document.createElement('div');
      div.innerText = msg;
      this.#handlesDisplay.messages.appendChild(div);
    }
  
    clearMessages() {
      this.#handlesDisplay.messages.innerText = '';
    }
  
    getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return this.#movesNames.rock;
      } else if (argMoveId == 2) {
        return this.#movesNames.paper;
      } else if (argMoveId == 3) {
        return this.#movesNames.scissors;
      } else {
        this.printMessage(`Nie znam ruchu o id ${argMoveId}. Zakładam, że chodziło o "kamień".`);
        return this.#movesNames.rock;
      }
    }
  
    updateResult(result) {
      if (result === 'win') {
        this.printMessage(`Wygrywasz!`);
        this.#dataGame.pointsGamer++;
        this.#handlesDisplay.messages.style.backgroundColor = '#00ee00';
      } else if (result === 'lose') {
        this.printMessage(`Przegrywasz :(`);
        this.#dataGame.pointsComputer++;
        this.#handlesDisplay.messages.style.backgroundColor = '#ee0000';
      } else if (result === 'draw') {
        this.printMessage(`Remis`);
        this.#handlesDisplay.messages.style.backgroundColor = '#e0e0e0';
      }
    }
  
    restart() {
      this.#dataGame.round = 0;
      this.#dataGame.pointsGamer = 0;
      this.#dataGame.pointsComputer = 0;
      for (let key in this.#handlesDisplay) {
        this.#handlesDisplay[key].classList.remove('display');
      }
    }
  
    displayResult(argPlayerMove, { computerMove }) {
      console.log(`wywołano funkcję displayResults z argumentami: ${argPlayerMove}, ${computerMove}`);
      if (argPlayerMove == 'papier' && computerMove == 'kamień') {
        this.updateResult('win');
      } else if (argPlayerMove == 'kamień' && computerMove == 'nożyce') {
        this.updateResult('win');
      } else if (argPlayerMove == 'nożyce' && computerMove == 'papier') {
        this.updateResult('win');
      } else if (argPlayerMove == 'papier' && computerMove == 'papier') {
        this.updateResult('draw');
      } else if (argPlayerMove == 'kamień' && computerMove == 'kamień') {
        this.updateResult('draw');
      } else if (argPlayerMove == 'nożyce' && computerMove == 'nożyce') {
        this.updateResult('draw');
      } else {
        this.updateResult('lose');
      }  
      this.printMessage(`Zagrałem ${computerMove}, a Ty ${argPlayerMove}`);
    }
  
    logsButtonClicked(argButtonName) {
      console.log(`${argButtonName} został kliknięty`);
      console.log(`wylosowana liczba to: ${this.#dataGame.randomNumber}`);
      console.log(`ruch komputera to: ${this.#dataGame.computerMove}`);
    }
  
    buttonClicked(playerMove) {
      this.clearMessages();
      for (let key in this.#handlesDisplay) {
        this.#handlesDisplay[key].classList.add('display');
      }
      this.#dataGame.round++;
      this.#dataGame.randomNumber = this.#dataGame.getRandomNumber();
      this.#dataGame.computerMove = this.getMoveName(this.#dataGame.randomNumber);
      this.logsButtonClicked(playerMove);
      this.displayResult(playerMove, this.#dataGame);
      this.#handlesDisplay.result.innerText = `Runda: ${this.#dataGame.round}:
      Punkty gracza: ${this.#dataGame.pointsGamer} - Punkty komputera: ${this.#dataGame.pointsComputer}`;
    }  
  
    init() {
      for (let key in this.#movesNames) {
        this.#handlesButtons[key].addEventListener('click', () => {
          this.buttonClicked(this.#movesNames[key]);
        });
      }
      document.getElementById('restartGame').addEventListener('click', () => this.restart());
    }
  }