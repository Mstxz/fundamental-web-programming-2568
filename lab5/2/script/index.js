let pet = [
    {
        name: 'Oatmeal',
        image: 'Aglaea'
    },
    {
        name: 'Candied Apple',
        image: 'Tribbie'
    },
    {
        name: 'Fig Stew',
        image: 'Mydeimos'
    },
    {
        name: 'Vigethos',
        image: 'Phainon'
    },
    {

        name: 'Butterfly Cake',
        image: 'Castorice',
    },
    {
        name: 'Nanus',
        image: 'Anaxa'
    },
    {
        name: 'Krenabis',
        image: 'Hyacine'
    },
    {
        name: 'Master Cat-Thief',
        image: 'Cipher'
    },
]

for (let i = 0; i < pet.length; i++){
    fetch('components/box.html').then(res => res.text()).then(data => {
        let elm = document.getElementById(`cont${i+1}`);
        elm.innerHTML = data;
        elm.querySelector('img').src = `image/Chimera_${pet[i].image}.webp`;
        elm.querySelector('img').draggable = false;
        elm.querySelector('h1').textContent = pet[i].name;

        elm.animate({
            opacity: [0,1],
            transform: ['translateY(50px)','translateY(0px)']
        },
        {
            fill: "forwards",
            delay: i * 200,
            duration: 1000,
            easing: 'ease-in-out'
        })
    })
}