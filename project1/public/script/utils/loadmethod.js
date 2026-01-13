const a = fetch('data/menulist.json').then(res => res.json());

let method = document.getElementById('method');
let page = window.location.pathname.replace('/','');

a.then(data => {
    data.forEach(item => {

        if(item.id === page){
            console.log('found');
            item.method.forEach(m => {
                let elm = document.createElement('p');
                elm.className = "p-4";
                elm.textContent = m;

            method.appendChild(elm);
            })
        }
        else {
            console.log(item.id);
        }
    });
});