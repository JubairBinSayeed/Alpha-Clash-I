function play(){
    // console.log('Connected');

    // step-1 : hide the home screen. to hide the home screen and and add the class hidden to the home screen.
    const homeSection = document.getElementById('home-screen');
    homeSection.classList.add('hidden');
    // show the play-ground
    const playGroundSection = document.getElementById('play-ground');
    playGroundSection.classList.remove('hidden');
}