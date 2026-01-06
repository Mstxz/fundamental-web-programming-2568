let menu = [
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page1.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page2.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page3.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page4.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page5.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page6.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page7.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page8.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page9.html'
    },
    {
    name: 'Elysia',
    image: 'https://i.pinimg.com/736x/96/eb/b8/96ebb8833e72dfea87b2a8b7ff7ee29b.jpg',
    page: 'page10.html'
    },
]


for (let i = 0; i < menu.length; i++) {
    fetch(`components/foodlist.html`).then(res => res.text()).then(data => {
        let elm = document.getElementById(`foodlist${i+1}`);
        elm.className = 'w-[350px] h-[400px] text-center border border-gray-200 rounded-lg p-6 hover:bg-gray-200 hover:scale-105 transition-all flex justify-center items-center flex-col opacity-0';
        elm.innerHTML = data;
        elm.animate({
            opacity: [0, 1],
            transform: ['translateY(50px)', 'translateY(0)']
        }, {
            duration: 1000,
            easing: 'ease-in-out',
            fill: 'forwards',
            delay: i * 100
        });
        elm.querySelector('img').src = menu[i].image;
        elm.querySelector('h1').textContent = menu[i].name;
        elm.href = menu[i].page;
    });
}