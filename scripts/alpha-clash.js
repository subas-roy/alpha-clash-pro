function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    // stop the game if player pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }
    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed);

    // check matched or not
    if(expectedAlphabet === playerPressed){
        console.log('you get a point');
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }else{
        console.log('you missed!, you lost a life')
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife)
        if(updatedLife === 0){
            gameOver();
        }
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent);

function continueGame(){
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet()
    
    // step-2: set current alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set background color to the key
    setBackgroundColorById(alphabet)
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    setTextElementValueById('current-life', 5)
    setTextElementValueById('current-score', 0)
    continueGame()
}

function gameOver(){
    hideElementById('play-ground')
    showElementById('final-score')
    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}