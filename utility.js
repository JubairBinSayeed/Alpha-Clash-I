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
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
} 
function setElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value
}
function hideGameOverPlayGround(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showGameOver(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}