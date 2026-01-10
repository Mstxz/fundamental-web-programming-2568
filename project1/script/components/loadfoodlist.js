fetch('data/menulist.json').then(res => res.text()).then(data =>
    {
        console.log(data);
        let menu = JSON.parse(data);

        for(let i  = 0; i < menu.length; i++){
            fetch('components/foodlist.html').then(res => res.text()).then(comp => {
                let menuelm = document.createElement('a');

                menuelm.id = "menu";
                menuelm.className = "flex flex-col items-center w-[250px] border p-5 rounded-xl cursor-pointer opacity-0";
                menuelm.innerHTML = comp;
                menuelm.querySelector('img').src = menu[i].imglinks;
                menuelm.querySelector('h1').textContent = menu[i].name;

                document.getElementById('menulist').appendChild(menuelm);

                menuelm.animate(
                    {
                        opacity: [0,1],
                        transform: ['translateY(20px)', 'translateY(0px)']
                    },
                    {
                        fill: "forwards",
                        duration: 500,
                        delay: i * 100,
                        easing: 'ease-out'
                    }
                );
            });
        }
    }
);

