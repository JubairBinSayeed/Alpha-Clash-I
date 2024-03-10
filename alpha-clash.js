// function play(){
//     // console.log('Connected');

//     // step-1 : hide the home screen. to hide the home screen and and add the class hidden to the home screen.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // show the play-ground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');

// } 
function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key
    // console.log(playerPressed);
    // expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    
    // checked if right or wrong
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const score = getTextElementValueById('current-score');
        const updatedScore = score + 1;
        setTextElementValueById('current-score', updatedScore);
        // -------------------------
        // update score
        // // step 1 get the current score 
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
        // // step 2 increase score by 1
        // const newScore = currentScore + 1;

        // // step 3 show the updated score
        // currentScoreElement.innerText = newScore 
        // start a new round
        removeBackgroundColorByElement(expectedAlphabet);
        continueGame();
    } else {
        console.log('you missed a life');
        const life = getTextElementValueById('current-life');
        const updatedLife = life - 1;
        setTextElementValueById('current-life', updatedLife); 
        // updated life
        // step 1 get the current life
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // console.log(currentLife);
        // // step 2 if user get's wrong key - 1
        // const newLife = currentLife - 1;
        // // step 3 how the updated life
        // currentLifeElement.innerText = newLife 
    if(updatedLife === 0){
        console.log('game over');
        gameOver();
    } 
    }
} 
document.addEventListener('keyup',handleKeyboardKeyupEvent);
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

