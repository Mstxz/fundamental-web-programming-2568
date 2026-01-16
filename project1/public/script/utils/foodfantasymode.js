
function toggleFoodFantasyMode(){
    let fftoggle = document.getElementById('ffmode');
    let ff = document.getElementById('ffopt');

    if (!fftoggle.checked){
        ff.style.display = "none";
    }
    else {
        ff.style.display = "block";
    }

    console.log(ff.style.display);
}

toggleFoodFantasyMode();