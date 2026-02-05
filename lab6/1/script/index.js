let table = document.getElementById('tb');

async function loadEmployees() {
    const res = await fetch('data/employees.json');
    a = await res.json();
    return a;
}

async function init(){
    let dat = await loadEmployees();

    for(let i = 0; i < dat.length; i++){
        let row = document.createElement('tr');
        row.className = 'detail';

        row.appendChild(createTableContent(dat[i].id));
        row.appendChild(createTableContent(`${dat[i].FirstName} ${dat[i].LastName}`));
        row.appendChild(createTableContent(dat[i].Gender.charAt(0)));
        row.appendChild(createTableContent(dat[i].Position));
        row.appendChild(createTableContent(dat[i].Address));

        table.appendChild(row);
        row.animate({
            opacity: [0,1],
            transform: ['translateY(50px)','translateY(0px)']
        },
        {
            fill: "forwards",
            delay: i * 200,
            duration: 300,
            easing: 'ease-in-out'
        })
    }
}

function createTableContent(data){
    let cont = document.createElement('td');
    cont.textContent = data;
    return cont;
}

init();