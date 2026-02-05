Promise.all([
    fetch('data/questionanswerdata.json').then(res => res.json()),
    fetch('components/question.html').then(res => res.text())
]).then( ([data,comp]) => {

    let form = document.querySelector('form')

    data.forEach(element => {
        console.log(element);
        let a = document.createElement('div');

        a.innerHTML = comp;

        a.querySelector('label').textContent = element.question;
        a.querySelector("#qa").textContent = element.answers.a;
        a.querySelector("#qb").textContent = element.answers.b;
        a.querySelector("#qc").textContent = element.answers.c;
        form.appendChild(a);
    });
});