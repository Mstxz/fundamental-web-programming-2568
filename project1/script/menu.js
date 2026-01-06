function openMenu() {
    document.querySelector('#menu').classList.remove('hidden');
    document.querySelector('#menu').classList.add('block');
}

function closeMenu() {
    document.querySelector('#menu').classList.add('hidden');
    document.querySelector('#menu').classList.remove('block');
}

function toggleMenu() {
    if (document.querySelector('#menu').classList.contains('hidden')) {
        openMenu();
    } else {
        closeMenu();
    }
}
