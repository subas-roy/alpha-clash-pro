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
        console.log('you get a  point');
        // update score
        // 1. get the current score
        // 2. increase the score by 1
        // 3. show the updated score

        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }else{
        console.log('you missed!, you lost a life')
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
    showElementById('play-ground');
    continueGame()
}