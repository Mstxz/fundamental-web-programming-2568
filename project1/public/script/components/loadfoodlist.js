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

    menuelm.className = `flex flex-row items-center border-b-8 border-r-4 border-t border-l rounded-tl-3xl rounded-br-lg border-red-800 p-5 cursor-pointer opacity-0 w-[350px] bg-linear-to-b from-ci-beige-1 to-ci-red-1 text-black text-xl text-center hover:scale-110 transition-transform ease-in-out duration-100 gap-4 text-white`;
    menuelm.onclick = () => {

    /* ---------- Overlay ---------- */
    fetch('components/information.html').then(res => res.text()).then(data => {
        const overlay = document.createElement('div');
        overlay.id = "overlay";
        overlay.className = 'flex fixed inset-0 bg-black/30 z-50 flex items-center justify-center overflow-hidden';
        overlay.innerHTML = data;
        document.body.appendChild(overlay);

        const panel = overlay.querySelector('#panel');
        panel.className = 'bg-ci-beige-2 m-10 rounded-tl-3xl rounded-br-lg h-[80vh] overflow-y-auto relative';

        panel.onclick = e => e.stopPropagation();

        //information
        document.getElementById('description').querySelector('img').src = menu.imglinks;
        document.getElementById('description').querySelector('h1').textContent = menu.name;
        document.getElementById('description').querySelector('a').href = menu.source;
        document.getElementById('description').querySelector('p').textContent = menu.desc;

        //ingredients
        const ingredientelm = document.getElementById('ingredients');
        menu.ingredient.forEach(a => {
            let ingredientlist = document.createElement('li');
            ingredientlist.textContent = a;
            ingredientelm.appendChild(ingredientlist);
        });

        //method - how to make
        const methodelm = document.getElementById('method');

        menu.method.forEach((step,i) => {
            let elm = document.createElement('div');
            let steps = document.createElement('h1');
            let infoparam = document.createElement('p');
            elm.className = "p-4";
            steps.className = "text-2xl font-bold"
            steps.textContent = `ขั้นตอนที่ ${i + 1}`;
            infoparam.textContent = step;
            methodelm.appendChild(elm);
            elm.appendChild(steps);
            elm.appendChild(infoparam);
        });

        panel.animate(
            {
                opacity: [0,1],
                transform: ['translateY(20px)','translateY(0px)']
            },
            {
                fill: "forwards",
                duration: 500,
                easing: 'ease-out',
            }
        );
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
    [menuList, template] = await Promise.all([
        loadMenuData(),
        loadFoodTemplate()
    ]);

    container = document.getElementById('menulist');
    container.innerHTML = '';

    menuList.forEach((menu, i) => {
        container.appendChild(buildMenuItem(menu, template, i));
    });
}


function closeOverlay() {
    let overlay = document.getElementById('overlay');
    let panel = document.getElementById('panel');

    panel.animate(
        {
            opacity: [0,1],
            transform: ['translateY(20px)', 'translateY(0)']
        },
        {
            direction: "reverse",
            duration: 500,
            easing: 'ease-out'
        }
    ).onfinish = () => {
        overlay.remove();
    };
}

function reloadList() {
    const select = document.getElementById('filterprompt');
    const value = select.value;

    container.innerHTML = '';

    menuList
        .filter(menu => value === 'all' || menu.type === value)
        .forEach((menu, i) => {
            container.appendChild(buildMenuItem(menu, template, i));
        });
}

initMenu();
