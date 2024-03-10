

function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet',alphabet);

    // set randomly generated alphabet(show on screen)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color by Id
    setBackgroundColor(alphabet);
} 


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}