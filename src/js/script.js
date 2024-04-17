import { playMusic, pauseMusic } from './playMusic.js';
import { generationIdMusic } from './generation.js';


let buttonPlay = document.querySelector('#buttonPlayOrPause');
buttonPlay.addEventListener('click', () => {

    if (buttonPlay.classList.contains('play')) {
        pauseMusic();
        buttonPlay.classList.replace('play', 'pause');

    } else {
        playMusic();
        buttonPlay.classList.replace('pause', 'play');
    }

});

let buttonGenaration = document.querySelector('#buttonGenarationMusic');
buttonGenaration.addEventListener('click', generationIdMusic);