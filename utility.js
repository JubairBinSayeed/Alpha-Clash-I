
function continueGame(){
    const alphabet = getRandomAlphabet();
    console.log('your random alphabet',alphabet);
} 

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}