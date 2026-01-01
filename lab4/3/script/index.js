let recdate = document.getElementById('date');
let topic = document.getElementById('topic');
let amnt = document.getElementById('amount');
let type = document.getElementById('type');

let data = []
let row = []

let balance = 0;
let balanceelm = document.getElementById('balance');

let orderlist = document.getElementById('orderlist');

function addToTable(){
    let row = orderlist.appendChild(document.createElement('tr'));
    for (let i = 0; i < 4; i++){
        let cont = document.createElement('td');
        let a = row.appendChild(cont);
        a.textContent = data[i];
    }

    balanceelm.textContent = balance;
}

function addData(){
    data = []

    if (recdate.value == NaN){
        data.push(Date.now());
    }
    else {
        data.push(recdate.value);
    }
    data.push(topic.value);
    if(type.value == "income"){
        data.push(amnt.value);
        data.push(0);
        balance += Number(amnt.value);
        addToTable();
    }
    else if(type.value == "expense" && balance - amnt.value >= 0){
        data.push(0);
        data.push(amnt.value);
        balance -= Number(amnt.value);
        addToTable();
    }

}