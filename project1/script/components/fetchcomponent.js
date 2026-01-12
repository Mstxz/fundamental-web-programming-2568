fetch('components/header.html').then(res => res.text()).then(data => {
    let head = document.querySelector('header');

    head.className = "h-[100px] flex justify-around items-center fixed w-full";
    head.innerHTML = data;
})

fetch('components/menu.html').then(res => res.text()).then(data => {
    let mainmenu = document.getElementById('menu')

    mainmenu.className = "hidden right-0 top-0 bg-[rgba(30,30,30,0.5)] w-full lg:w-3/12 md:w-1/2 sm:w-full h-screen fixed z-40";
    mainmenu.innerHTML = data;

    fetch('data/menulist.json').then(res => res.json()).then(data => {
        let a = data;

        for(let i = 0; i < a.length; i++){
            console.log(a[i].id);
        }
    });
});