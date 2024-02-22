const container = document.getElementById('container');

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs; d++){
        let cells = document.createElement('div');
        container.appendChild(cells);
        cells.addEventListener('mouseover', () => {
            cells.style.backgroundColor = "black";
        })
    }
}

makeDivs(256);

