fetch('components/menu.html').then(res => res.text()).then(data => {
    document.getElementById('menu').innerHTML = data;
});