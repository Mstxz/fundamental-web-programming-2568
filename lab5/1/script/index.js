let lan = [
    {name: 'Python', desc: 'Python remains the most popular language due to its simplicity, readability, and extensive libraries. It is widely used in data science, machine learning, web development, and automation.'},
    {name: 'Javascript', desc: 'JavaScript is essential for web development, powering both front-end (via frameworks like React) and back-end (via Node.js).'},
    {name: 'Java', desc: 'Java remains a staple for enterprise applications, Android development, and large-scale systems. Its platform independence and robust frameworks like Spring make it a favorite among enterprises.'},
    {name: 'C++', desc: 'C++ excels in performance-critical applications like game development, real-time simulations, and system programming.'},
]

for(let i = 0; i < lan.length; i++){
    fetch('components/box.html').then(res => res.text()).then(data => {
        let elm = document.getElementById(`cont${i+1}`);
        elm.innerHTML = data;
        elm.querySelector('h1').textContent = lan[i].name;
        elm.querySelector('p').textContent = lan[i].desc;
        elm.animate(
            {
                opacity: [0, 1],
                transform: ['translateY(50px)', 'translateY(0)']
            },
            {
                duration: 500,
                easing: 'ease-in-out',
                fill: "forwards",
                delay: i * 100
            }
        );
    });
}
