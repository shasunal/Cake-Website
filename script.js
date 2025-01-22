//  dragging of elements
function dragElement(terrariumElement) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    terrariumElement.onpointerdown = pointerDrag;

    function pointerDrag(e) {
        e.preventDefault();

        const clone = terrariumElement.cloneNode(true);
        clone.style.position = "absolute"; 
        clone.style.top = terrariumElement.offsetTop + "px";
        clone.style.left = terrariumElement.offsetLeft + "px";
        terrariumElement.parentElement.appendChild(clone);

        dragElement(clone);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
        terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }

    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}


const elements = [
    'top1', 'top2', 'top3', 'top4', 'top5', 'top6',
    'top7', 'top8', 'top9', 'top10', 'top11', 'top12',
    'top13', 'top14'
];

elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        dragElement(element);
    }
});

let currentColorIndex = 0;
const cakeColors = ['#FADADD', '#f7ecd0', '#A16207']; 

//change the color of all cake layers
function changeCakeColor() {
    
    const cakeParts = document.querySelectorAll(
        '.caketop, .cakemiddle, .cakebottom, .caketop2, .cakemiddle2, .cakebottom2'
    );
    
    const newColor = cakeColors[currentColorIndex];

    cakeParts.forEach(part => {
        part.style.backgroundColor = newColor;
    });

    currentColorIndex = (currentColorIndex + 1) % cakeColors.length;
}

// cake layers
function toggleCakeLayers() {
    const caketop2 = document.getElementById('caketop2');
    const cakemiddle2 = document.getElementById('cakemiddle2');
    const cakebottom2 = document.getElementById('cakebottom2');

 const isHidden = caketop2.style.display === 'none';

    
    const newDisplay = isHidden ? 'block' : 'none';
    caketop2.style.display = newDisplay;
    cakemiddle2.style.display = newDisplay;
    cakebottom2.style.display = newDisplay;
}






