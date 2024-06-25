// function play(){
//     // step-1: hide the home screen
//     const homeScreeen = document.getElementById('home-screen')
//     homeScreeen.classList.add('hidden')

//     // step-2: show the playground
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden')
// }

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