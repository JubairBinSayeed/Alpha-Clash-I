function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}
function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColorByElement(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function gameOver(){
    showElementById('final-score');
    hideElementById('play-ground');
    // update the final score
    // step 1 get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
}
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
    // hide everything show only play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // rest score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}