const date = new Date();

const message = ['Good Night','Good Morning', 'Good Afternoon', 'Good Evening'];

let greetingelm = document.getElementById('greeting');

const clock = document.getElementById("clock");

function updateClock() {
    const date = new Date();

    const hours   = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.textContent = `${hours}:${minutes}:${seconds}`;
    greetingelm.textContent = message[Math.floor(date.getHours() / 6)]
}

updateClock();

setInterval(updateClock, 1000);
