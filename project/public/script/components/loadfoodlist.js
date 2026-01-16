async function loadMenuData() {
    const res = await fetch('data/menulist.json');
    return await res.json();
}

async function loadFoodTemplate() {
    const res = await fetch('components/foodlist.html');
    return await res.text();
}

let menuList = [];
let template = '';
let container = null;

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    const panel = document.getElementById('panel');

    if (!overlay || !panel) return;

    panel.animate(
        {
            opacity: [1, 0],
            transform: ['translateY(0)', 'translateY(20px)']
        },
        {
            duration: 400,
            easing: 'ease-in'
        }
    ).onfinish = () => overlay.remove();
}

window.closeOverlay = closeOverlay;

function buildMenuItem(menu, template, index) {
    const menuelm = document.createElement('button');
    let themecolor = getTheme();

    let dark = "text-ci-beige-1 bg-ci-brown-2";
    let light = "text-ci-brown-1 bg-ci-beige-2";

    let themecolorcon = light;

    if (themecolor == 'time'){
        let d = new Date();

        if (d.getHours() < 18 && d.getHours() > 6) {
            themecolorcon = light;
        }
        else {
            themecolorcon = dark;
        }
    }
    else if(themecolor == 'dark') {
        themecolorcon = dark;
    }
    else if(themecolor == 'light') {
        themecolorcon = light;
    }

    menuelm.className =
        'flex flex-row items-center border-b-8 border-r-4 border-t border-l ' +
        'rounded-tl-3xl rounded-br-lg border-red-800 p-5 cursor-pointer ' +
        'opacity-0 w-[350px] bg-linear-to-b from-ci-beige-1 to-ci-red-1 ' +
        'text-xl text-center hover:scale-110 transition-transform ' +
        'ease-in-out duration-100 gap-4 text-white';

    menuelm.onclick = () => {
        fetch('components/information.html')
            .then(res => res.text())
            .then(data => {
                const overlay = document.createElement('div');
                overlay.id = 'overlay';
                overlay.className =
                    'flex fixed inset-0 bg-black/30 z-50 items-center justify-center';
                overlay.innerHTML = data;
                overlay.onclick = closeOverlay;
                document.body.appendChild(overlay);

                const panel = overlay.querySelector('#panel');
                panel.className = `m-10 rounded-tl-3xl rounded-br-lg h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden relative w-[80%] border-b-8 border-r-4 border-ci-red-1` + themecolorcon;
                panel.onclick = e => e.stopPropagation();

                /* ---- description ---- */
                const desc = document.getElementById('description');
                let images = desc.querySelectorAll('img');
                images[0].src = menu.imglinks;
                desc.querySelector('h1').textContent = menu.name;
                desc.querySelector('a').href = menu.source;
                desc.querySelector('p').textContent = menu.desc;

                /* ---- Food Fantasy Mode ---- */
                let foodfantasy = document.getElementById('ff');
                let fftoggle = document.getElementById('ffmode');

                images[1].src = `images/icon/foodsouls/${menu.id}.webp`;
                document.getElementById('rarity').src = `images/icon/icon_${menu.foodsoulinfo.rarity}.webp`;
                document.getElementById('rpgclass').src = `images/icon/icon_${menu.foodsoulinfo.class}.webp`;

                console.log(fftoggle, foodfantasy);

                if (!fftoggle.checked){
                    foodfantasy.style.display = 'none';
                }
                else {
                    foodfantasy.style.display = "block";
                }


                /* ---- ingredients ---- */
                const ingredientelm = document.getElementById('ingredients');
                ingredientelm.innerHTML = '';
                menu.ingredient.forEach(a => {
                    const li = document.createElement('li');
                    li.textContent = a;
                    ingredientelm.appendChild(li);
                });

                /* ---- method ---- */
                const methodelm = document.getElementById('method');
                methodelm.innerHTML = '';
                menu.method.forEach((step, i) => {
                    const elm = document.createElement('div');
                    const h = document.createElement('h1');
                    const p = document.createElement('p');

                    elm.className = 'p-4';
                    h.className = 'text-2xl font-bold';
                    h.textContent = `ขั้นตอนที่ ${i + 1}`;
                    p.textContent = step;

                    elm.append(h, p);
                    methodelm.appendChild(elm);
                });

                panel.animate(
                    {
                        opacity: [0, 1],
                        transform: ['translateY(20px)', 'translateY(0)']
                    },
                    {
                        fill: 'forwards',
                        duration: 500,
                        easing: 'ease-out'
                    }
                );
            });
    };

    menuelm.innerHTML = template;

    menuelm.querySelector('#foodimg').src = menu.imglinks;
    menuelm.querySelector('#foodsouls').src = menu.foodsoulimg;
    menuelm.querySelector('h1').textContent = menu.name;

    /* ---- type badges ---- */
    const foodtype = menuelm.querySelector('#type');
    foodtype.innerHTML = '';

    const typeMap = {
        food: { cname: 'bg-food', icon: 'fa-burger', text: 'อาหาร' },
        dessert: { cname: 'bg-dessert', icon: 'fa-ice-cream', text: 'ขนมหวาน' },
        drinks: { cname: 'bg-drinks', icon: 'fa-martini-glass', text: 'เครื่องดื่ม' }
    };

    const wrapper = document.createElement('div');
    wrapper.className = 'grid grid-cols-2 gap-2';

    menu.type.forEach(t => {
        const cfg = typeMap[t];
        if (!cfg) return;

        const badge = document.createElement('div');
        badge.className =
            `flex text-sm items-center gap-1 px-2 py-1 rounded ${cfg.cname}`;
        badge.innerHTML =
            `<i class="fa-solid ${cfg.icon}"></i><span>${cfg.text}</span>`;
        wrapper.appendChild(badge);
    });

    const rpgClassMap = {
    mage:    { bg: 'bg-mage' },
    attack:  { bg: 'bg-attack' },
    support: { bg: 'bg-support' },
    defense: { bg: 'bg-defense' },
};

    let fftoggle = document.getElementById('ffmode');

    if (fftoggle.checked){
        const rpgClass = menu.foodsoulinfo.class;
        const rpgStyle = rpgClassMap[rpgClass] ?? { bg: 'bg-gray-400' };

        const rpgbadge = document.createElement('div');
        rpgbadge.className = `
            flex items-center gap-1
            text-sm
            px-2 py-1
            rounded
            ${rpgStyle.bg}
        `;

        rpgbadge.innerHTML = `
            <img width="20" height="20" src="images/icon/icon_${rpgClass}.webp" alt="${rpgClass}">
            <span>${rpgClass}</span>
        `;

        wrapper.appendChild(rpgbadge);
    }

    foodtype.appendChild(wrapper);

    menuelm.animate(
        {
            opacity: [0, 1],
            transform: ['translateY(20px)', 'translateY(0)']
        },
        {
            fill: 'forwards',
            duration: 500,
            delay: index * 100,
            easing: 'ease-out'
        }
    );

    return menuelm;
}

function renderMenuList(menus) {
    container.innerHTML = '';
    menus.forEach((menu, i) => {
        container.appendChild(buildMenuItem(menu, template, i));
    });
}

async function initMenu() {
    [menuList, template] = await Promise.all([
        loadMenuData(),
        loadFoodTemplate()
    ]);

    container = document.getElementById('menulist');
    renderMenuList(menuList);
}

initMenu();

window.menuState = {
    get menuList() {
        return menuList;
    },
    renderMenuList
};