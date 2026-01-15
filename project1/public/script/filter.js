function filterMenu(menuList, filters) {
    if (!Array.isArray(menuList)) return [];

    return menuList.filter(menu => {
        const matchType =
            !filters.type ||
            filters.type === 'all' ||
            (Array.isArray(menu.type)
                ? menu.type.includes(filters.type)
                : menu.type === filters.type);

        const matchRegion =
            !filters.region ||
            filters.region === 'all' ||
            (Array.isArray(menu.region)
                ? menu.region.includes(filters.region)
                : menu.region === filters.region);

        const matchRPGClass =
            !filters.rpgClass ||
            filters.rpgClass === 'all' ||
            menu.foodsoulinfo?.class === filters.rpgClass;

        return matchType && matchRegion && matchRPGClass;
    });
}

async function loadEmptyComponent() {
    const res = await fetch('components/empty.html');
    const html = await res.text();

    const container = document.getElementById('menulist');
    container.innerHTML = html;
}

async function reloadList() {
    const typeSelect = document.getElementById('filtertype');
    const regionSelect = document.getElementById('filterregion');
    const classSelect = document.getElementById('filterrpgclass');
    const ffToggle = document.getElementById('ffmode');

    const filters = {
        type: typeSelect?.value || '',
        region: regionSelect?.value || '',
        rpgClass: ffToggle?.checked ? (classSelect?.value || '') : ''
        // ↑ ignore RPG class when unchecked
    };

    const menuList = window.menuState?.menuList;

    if (!Array.isArray(menuList)) {
        await loadEmptyComponent();
        return;
    }

    const filteredMenus = filterMenu(menuList, filters);

    if (filteredMenus.length === 0) {
        await loadEmptyComponent();
        return;
    }

    window.menuState.renderMenuList(filteredMenus);
}

window.reloadList = reloadList;
