const a = fetch('data/menulist.json').then(res => res.json());

let method = document.getElementById('method');
let page = window.location.pathname.replace('/','');

a.then(data => {
    data.forEach(item => {

        if(item.id === page){
            console.log('found');
            item.method.forEach((m,i) => {
                let elm = document.createElement('div');
                let steps = document.createElement('h1');
                let infoparam = document.createElement('p');

                elm.className = "p-4";

                steps.className = "text-2xl font-bold"
                steps.textContent = `Step ${i + 1}`;

                infoparam.textContent = m;

            method.appendChild(elm);

            elm.appendChild(steps);
            elm.appendChild(infoparam);
            });
        }
        else {
            console.log(item.id);
        }
    });
});