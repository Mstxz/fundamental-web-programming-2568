function createMultiplicationTable() {
    const num = Number(document.getElementById('number').value.trim());
    const tb = document.getElementById('multitable');

    tb.innerHTML = `
        <tr>
            <th>สูตรคูณ</th>
            <th>ผลลัพธ์</th>
        </tr>
    `;


    for (let i = 1; i <= 12; i++) {
        const res = document.createElement('tr');
        const detail = document.createElement('td');
        const ans = document.createElement('td');

        // stagger delay: 50ms per row
        res.style.animationDelay = `${i * 50}ms`;

        res.classList.add('fade-row');
        tb.appendChild(res);
        detail.textContent = `${num} × ${i}`;
        ans.textContent = `${num * i}`;
        res.appendChild(detail);
        res.appendChild(ans);
    }
}
