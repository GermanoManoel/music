import { playList } from './platlistOfMusics.js';

export function generationIdMusic() {

    let musicOfid = Math.floor(Math.random() * playList.length);
    genarationMusic(musicOfid);
}

function genarationMusic(valueId) {

   for (let i = 0; i < playList.length; i++) {

        if (playList[i].id === valueId){

            let idMusic = document.querySelector('#idMusic');
            idMusic.innerHTML = valueId + 1;

            let nameMusic = document.querySelector('#nameMusic');
            nameMusic.innerHTML = `" ${playList[i].name} "`;

            let musics = document.querySelector('.musics');
            musics.setAttribute('src', playList[i].caminho);
        }
   }
}
