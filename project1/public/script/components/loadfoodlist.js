async function loadMenuData() {
    const res = await fetch('data/menulist.json');
    return await res.json();
}

async function loadFoodTemplate() {
    const res = await fetch('components/foodlist.html');
    return await res.text();
}

function buildMenuItem(menu, template, index) {
    const menuelm = document.createElement('button');

    menuelm.className = `flex flex-row items-center border-b-8 border-r-4 border-t border-l rounded-tl-3xl rounded-br-lg border-red-800 p-5 cursor-pointer opacity-0 w-[500px] md:w-[350px] sm:w-[500px] bg-ci-beige-1 text-black text-xl text-center hover:scale-110 transition-transform ease-in-out duration-100`;
    menuelm.onclick = () => {
    fetch('components/information.html')
        .then(res => res.text())
        .then(data => {
            const overlay = document.createElement('div');
            overlay.className = 'flex fixed inset-0 bg-black/30 z-50 flex items-center justify-center';

            const panel = document.createElement('div');
            panel.innerHTML = data;
            panel.className = 'bg-ci-beige-2 m-10 rounded-tl-3xl rounded-br-lg';

            overlay.appendChild(panel);

            overlay.onclick = () => overlay.remove();
            panel.onclick = e => e.stopPropagation();

            document.body.appendChild(overlay);
            console.log(document.querySelector('#method'));
        });
};

    menuelm.innerHTML = template;

    menuelm.querySelector('#foodimg').src =  menu.imglinks;
    menuelm.querySelector('#foodsouls').src =  menu.foodsoulimg;
    menuelm.querySelector('h1').textContent = menu.name;

    menuelm.animate(
        {
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0px)']
        },
        {
            fill: "forwards",
            duration: 500,
            delay: index * 100,
            easing: 'ease-out'
        }
    );

    return menuelm;
}

async function initMenu() {
    const [menuList, template] = await Promise.all([
        loadMenuData(),
        loadFoodTemplate()
    ]);

    const container = document.getElementById('menulist');

    for (let i = 0; i < menuList.length; i++) {
        const item = buildMenuItem(menuList[i], template, i);
        container.appendChild(item);
    }
}

initMenu();
