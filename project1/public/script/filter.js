function filterMenu(menuList, filters) {
    return menuList.filter(menu => {

        /* ---- type filter ---- */
        const matchType = !filters.type || filters.type === 'all' || menu.type.includes(filters.type);

        /* ---- region filter ---- */
        const matchRegion = !filters.region || filters.region === 'all'|| menu.region === filters.region || (Array.isArray(menu.region) && menu.region.includes(filters.region));

        return matchType && matchRegion;
    });
}

function reloadList() {
    const typeSelect = document.getElementById('filtertype');
    const regionSelect = document.getElementById('filterregion');

    const filters = {
        type: typeSelect.value,
        region: regionSelect.value
    };

    const filteredMenus = filterMenu(
        window.menuState.menuList,filters
    );

    window.menuState.renderMenuList(filteredMenus);
}

window.reloadList = reloadList;
