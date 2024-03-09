// function play(){
//     // console.log('Connected');

//     // step-1 : hide the home screen. to hide the home screen and and add the class hidden to the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the play-ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// } 
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}

function getRandomAlphabet(){
    //  step-2 : generate random alphabet 
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetSplit = alphabetString.split('');
    // console.log(alphabetSplit);

    //  get random number between 0 - 25
    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    // console.log(index);

    const alphabet = alphabetSplit[index];
    // console.log(index,alphabet);
    return alphabet;
} 

