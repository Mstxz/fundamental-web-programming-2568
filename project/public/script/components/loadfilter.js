fetch('data/menulist.json').then(res => res.json()).then(data => {
        const select = document.getElementById('filterregion');

        const regions = [...new Set(data.map(menu => menu.region))];

        regions.forEach(region => {
            const opt = document.createElement('option');
            opt.value = region;
            opt.textContent = region;
            select.appendChild(opt);
        });
    });
