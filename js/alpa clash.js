// function play(){
//     const homeSection = document.getElementById('home-screen');
//     //const 
//     //console.log(homeSection.classList);
//     homeSection.classList.add('hidden')
//     const playgroundSection = document.getElementById('play-ground')
//     playgroundSection.classList.remove('hidden');
// }
function contineuGame(){
    //stap -1 generate a randome alpabat
    const alpabat = getARandomeAlphabate();
    console.log('My random alphabet',alpabat);
    const currentAlphabetElement = document.getElementById('curent-alphabet');
    currentAlphabetElement.innerText = alpabat;
    setBackgroungColor(alpabat);

}

function play(){
    hidenElementById('home-screen');
    showElementById('play-ground');
    contineuGame()
}
