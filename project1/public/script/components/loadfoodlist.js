async function loadMenuData() {
    const res = await fetch('data/menulist.json');
    return await res.json();
}

async function loadFoodTemplate() {
    const res = await fetch('components/foodlist.html');
    return await res.text();
}

function buildMenuItem(menu, template, index) {
    const menuelm = document.createElement('a');

    menuelm.className = "flex flex-row lg:flex-col md:flex-col sm:flex-row items-center border-b-4 border-r-4 border-t border-l rounded-tl-3xl rounded-br-lg border-amber-500 bg-red p-5 cursor-pointer opacity-0 w-[500px] lg:w-[250px] md:w-[250px] sm:w-[500px]";
    menuelm.href = `${menu.id}`
    menuelm.innerHTML = template;

    menuelm.querySelector('img').src = menu.imglinks;
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
