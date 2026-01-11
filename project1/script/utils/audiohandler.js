let audioelm = document.querySelector('audio');
let curr = 0;

const music = [
    {
        "name": "Gloriville",
        "source": "audio/FoodFantasy_Gloriville.mp3"
    },
    {
        "name": "Light Kingdom",
        "source": "audio/FoodFantasy_LightKingdom.mp3"
    },
    {
        "name": "Nevras",
        "source": "audio/FoodFantasy_Nevras.mp3"
    },
    {
        "name": "Sakurajima",
        "source": "audio/FoodFantasy_Sakurajima.mp3"
    },
]

audioelm.volume = 0.4;
audioelm.src = music[curr].source;

function toggleAudio(){
    if(audioelm.muted == false){
        audioelm.muted = true;
        document.querySelector('#music').className = 'fa-solid fa-volume-xmark';
    }
    else {
        audioelm.muted = false;
        document.querySelector('#music').className = 'fa-solid fa-volume-high';
    }
}

function playNext(){
    if(curr == 3){
        curr = 0;
    }
    else {
        curr += 1;
    }

    audioelm.src = music[curr].source;
}

function playBefore(){
    if(curr == 0){
        curr = 3;
    }
    else{
        curr -= 1;
    }

    audioelm.src = music[curr].source;
}

function togglePauseAudio(){
    if (audioelm.paused){
        audioelm.play();
    }
    else {
        audioelm.pause();
    }
}