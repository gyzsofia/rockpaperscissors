const choices = ['Rock', 'Paper', 'Scissors'];
const tieMessage = ("It's a tie.");
const winMessage = ('You Win!');
const loseMessage = ('You Lost.');

let playerWin = 0;
let compWin = 0;

function getCompChoice() {
    let selection = choices[Math.floor(Math.random()*choices.length)];
    return selection
}

const rockb = document.querySelector('.rock');
rockb.addEventListener('click', () => {
    play('Rock', getCompChoice());
})

const paperb = document.querySelector('.paper');
paperb.addEventListener('click', () => {
    play('Paper', getCompChoice());
})

const scissorsb = document.querySelector('.scissors');
scissorsb.addEventListener('click', () => {
    play('Scissors', getCompChoice());
})

const container = document.querySelector('.container');
const divResult = document.createElement('div');
let playerScore = document.createElement('div');
let compScore = document.createElement('div');
const subContainer = document.createElement('div');

container.appendChild(divResult);
container.appendChild(subContainer);
subContainer.appendChild(playerScore);
subContainer.appendChild(compScore);

divResult.style.cssText= 'color: aliceblue; font-weight: bold; color: #e24d4e;';
playerScore.setAttribute('style', 'color: aliceblue; margin: 20px;');
compScore.setAttribute('style', 'color: aliceblue;');
subContainer.style.cssText = 'display: flex; align-items: center;';


playerScore.textContent = (`Human Player score: ${playerWin}`);
compScore.textContent = ('Computer Score: ' + compWin)
divResult.textContent = ('')

function play(humanHand, compHand) {
    if (humanHand === compHand) {
        divResult.textContent = tieMessage;

    } else if ((humanHand==='Rock' && compHand==='Scissors') || 
               (humanHand==='Paper' && compHand==='Rock') || 
               (humanHand==='Scissors' && compHand==='Paper')) {
                playerWin += 1;
                playerScore.textContent = (`Human Player score: ${playerWin}`);
                divResult.textContent = (`${humanHand} beats ${compHand}, ${winMessage}`);
                }

        else {
                compWin += 1;
                compScore.textContent = (`Computer Score: ${compWin}`);
                divResult.textContent = (`${compHand} beats ${humanHand}, ${loseMessage}`)
                } 
        
    if (playerWin >= 5) {
        playerWin = 0;
        compWin = 0;
        divResult.textContent = ('');
        playerScore.textContent = (`Human Player score: ${playerWin}`);
        compScore.textContent = (`Computer Score: ${compWin}`);
        alert('You Win!!');}
    else if (compWin >= 5) {
        playerWin = 0;
        compWin = 0;
        divResult.textContent = ('');
        playerScore.textContent = (`Human Player score: ${playerWin}`);
        compScore.textContent = (`Computer Score: ${compWin}`);
        alert('You Lost');}
}
