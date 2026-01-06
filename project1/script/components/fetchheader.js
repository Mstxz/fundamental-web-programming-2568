let comp = [
    {name: 'header', class: 'flex justify-around items-center p-4 h-[100px] fixed top-0 left-0 right-0 z-50 bg-blue-500'},
    {name: 'menu', class: 'hidden absolute top-0 left-0 w-[250px] h-full bg-black/50 z-10'}
]

for (let i = 0; i < comp.length; i++) {
    fetch(`components/${comp[i].name}.html`).then(res => res.text()).then(data => {
        let elm = document.getElementById(comp[i].name);
        elm.className = comp[i].class;
        elm.innerHTML = data;
    });
}