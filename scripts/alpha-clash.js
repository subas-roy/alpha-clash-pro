// function play(){
//     // step-1: hide the home screen
//     const homeScreeen = document.getElementById('home-screen')
//     homeScreeen.classList.add('hidden')

//     // step-2: show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
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
        // -----------------------
        // update score
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // 2. increase the score by 1
        // const newScore = currentScore + 1;
        // 3. show the updated score
        // currentScoreElement.innerText = newScore;
        // ----------------------------
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
        // ------------------------
        // 1. get the current life numner
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // 2. decrease the life
        // const newLife = currentLife - 1;
        // 3. display the life count
        // currentLifeElement.innerText = newLife;
        // -----------------------------
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
}