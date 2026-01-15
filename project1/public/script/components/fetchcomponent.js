fetch('components/header.html').then(res => res.text()).then(data => {
    let head = document.querySelector('header');

    head.className = "h-[100px] flex justify-around items-center fixed w-full z-30 bg-ci-red-1 text-white";
    head.innerHTML = data;
})

fetch('components/menu.html').then(res => res.text()).then(data => {
    let mainmenu = document.getElementById('menu')

    mainmenu.className = "hidden right-0 top-0 bg-[rgba(30,30,30,0.5)] w-full lg:w-3/12 md:w-1/2 sm:w-full h-screen fixed z-40 text-ci-beige-1";
    mainmenu.innerHTML = data;

});

fetch('components/filteroption.html').then(res => res.text()).then(data => {
    let filter = document.getElementById('filter');
    filter.innerHTML = data;
})