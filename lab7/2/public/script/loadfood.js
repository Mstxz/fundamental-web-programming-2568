let gallery = document.getElementById('gallery');

Promise.all(
    [
        fetch('/components/foodmenu.html').then(r => r.text()),
        fetch('/data/food.json').then(r => r.json())
    ]
).then(([comp,data]) => {
    data.forEach(element => {
        let content = document.createElement('div');

        content.innerHTML = comp;
        content.className = "menulist";

        content.querySelector('img').src = element.image;
        content.querySelector('a').textContent = element.name;
        content.querySelector('a').href = element.id;

        let icon = document.createElement('i');
        icon.className = "fa-solid fa-angle-right"

        content.querySelector('a').appendChild(icon);

        gallery.appendChild(content);
    });

});