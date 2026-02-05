Promise.all([
    fetch('data/studentscore.json').then(r => r.json()),
    fetch('components/card.html').then(r => r.text())
]).then(([data, comp]) => {
    const m = document.querySelector('main');

    data.forEach((element, index) => {
        const card = document.createElement('div');
        card.className = 'cards';
        card.innerHTML = comp;

        card.querySelector('img').src = `images/img_${element.gender}.png`;
        card.querySelector('h1').textContent = `${index + 1}. ${element.name}`;

        card.querySelector("#physics").textContent += element.physics;
        card.querySelector("#math").textContent += element.maths;
        card.querySelector("#eng").textContent += element.english;

        m.appendChild(card);
    });
});
