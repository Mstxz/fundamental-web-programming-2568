let menu = document.querySelector('#menu');

function openMenu() {
    menu.classList.remove('hidden');
    menu.classList.add('block');

    menu.animate(
        [
            { transform: 'translateX(300px)' },
            { transform: 'translateX(0px)' }
        ],
        {
            duration: 200,
            easing: 'ease-out',
            fill: 'forwards'
        }
    );
}

function closeMenu() {
    const animation = menu.animate(
        [
            { transform: 'translateX(0px)' },
            { transform: 'translateX(300px)' }
        ],
        {
            duration: 200,
            easing: 'ease-in',
            fill: 'forwards'
        }
    );

    animation.onfinish = () => {
        menu.classList.add('hidden');
        menu.classList.remove('block');
    };
}
