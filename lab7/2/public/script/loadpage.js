let m = document.querySelector('main');

// get current route: "/food1"
const page = window.location.pathname.replace('/', ''); // "food1"

Promise.all([
    fetch('/components/foodpage.html').then(r => r.text()),
    fetch('/data/food.json').then(r => r.json())
]).then(([comp, data]) => {
    let sec = document.createElement('section');

    // find matching food item
    const food = data.find(item => item.id === page);

    if (!food) {
        sec.innerHTML = `<h1>Food not found</h1>`;
        m.appendChild(sec);
        return;
    }

    sec.innerHTML = comp;
    sec.querySelector('#foods').src = food.image
    sec.querySelector('#title').textContent = food.name;
    let inuls = sec.querySelector('#ingredient');

    food.ingredient.forEach(ing => {
        let inlis = document.createElement('li');
        inlis.textContent = ing;

        inuls.appendChild(inlis);
    });

    let neuuls = sec.querySelector('#nutrient');

    Object.entries(food.nutrition).forEach(([key, value]) => {
        let neulis = document.createElement('li');
        neulis.textContent = `${key}: ${value}`;
        neuuls.appendChild(neulis);
    });

    sec.querySelector('#souls').src = food.foodsoulimg;

    let relis = document.createElement('li');
    relis.textContent = food.region;

    sec.querySelector('#region').appendChild(relis);


    m.appendChild(sec);
});
