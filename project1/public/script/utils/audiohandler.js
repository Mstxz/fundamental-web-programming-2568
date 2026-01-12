let audioelm = document.querySelector('audio');
let musiccover = document.getElementById('musiczone');
audioelm.muted = false; //for development, will be removed in production

let curr = 0;

const music = [
    {
        "id": "gloriville",
        "name": "Gloriville",
        "source": "audio/FoodFantasy_Gloriville.mp3"
    },
    {
        "id": "lightkingdom",
        "name": "Light Kingdom",
        "source": "audio/FoodFantasy_LightKingdom.mp3"
    },
    {
        "id": "nevras",
        "name": "Nevras",
        "source": "audio/FoodFantasy_Nevras.mp3"
    },
    {
        "id": "sakurajima",
        "name": "Sakurajima",
        "source": "audio/FoodFantasy_Sakurajima.mp3"
    },
]

audioelm.volume = 0.4;
audioelm.src = music[curr].source;

function toggleAudio(){
    if(audioelm.muted == false){
        audioelm.muted = true;
        document.querySelector('#mute').className = 'fa-solid fa-volume-xmark';
    }
    else {
        audioelm.muted = false;
        document.querySelector('#mute').className = 'fa-solid fa-volume-high';
    }
}

function playNext(){
    let cover = `bg-${music[curr].id}`;
    if(curr == 3){
        curr = 0;
    }
    else {
        curr += 1;
    }

    audioelm.src = music[curr].source;
    document.querySelector('#musicname').textContent = music[curr].name;
    document.querySelector('#musiczone').classList.replace(cover,`bg-${music[curr].id}`);
}

function playBefore(){
    let cover = `bg-${music[curr].id}`;
    if(curr == 0){
        curr = 3;
    }
    else{
        curr -= 1;
    }

    audioelm.src = music[curr].source;
    document.querySelector('#musicname').textContent = music[curr].name;
    document.querySelector('#musiczone').classList.replace(cover,`bg-${music[curr].id}`);
}

function togglePauseAudio() {
    const cd = document.getElementById('cd');

    if (audioelm.paused) {
        audioelm.play();
        cd.classList.add("animate-spin");
        document.getElementById('pause').className = "fa-solid fa-pause";
    } else {
        audioelm.pause();
        cd.classList.remove("animate-spin");
        document.getElementById('pause').className = "fa-solid fa-play";
    }
}
