const container = document.getElementById('container');

function makeDivs(numDivs) {
    for (let d = 0; d < numDivs**2; d++){
        let cells = document.createElement('div');
        container.appendChild(cells);
        for (let g = 0; g < numDivs**2; g++){
            if (d == numDivs*g + 1) {
                cells.setAttribute('class','row');
                cells.setAttribute('style', 'border: 0; width: 100%; height: 0;');
            };
        }
        cells.classList.add('pixels');
        cells.addEventListener('mouseover', () => {
            cells.style.backgroundColor = "black";
        })
    }
    //let row = document.querySelectorAll(`.pixels:nth-child(${numDivs}n + 1)`)
}

makeDivs(20);

const button = document.querySelector('button');

function killAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

button.addEventListener('click', ()=> {

    killAllChildNodes(container);

    let input = document.querySelector('input');

    let newSize = input.value;

    makeDivs(newSize);
})




