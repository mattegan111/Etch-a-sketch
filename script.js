var pen = "green";

buildGrid();

function buildGrid() {
    var squaresPerSide = prompt("how many squares per side?");
    var totalSquares = squaresPerSide * squaresPerSide;
    
    document.getElementById("grid-container-id").style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;
    document.getElementById("grid-container-id").style.gridTemplateRows = `repeat(${squaresPerSide}, 1fr)`;

    var i;
    for (i = 0; i < totalSquares; i++) {
        const container = document.querySelector('#grid-container-id');
        const content = document.createElement('div');
        content.classList.add('content');
        content.className = "grid-item";
        content.style.backgroundColor = "rgb(0,255,255)";
        container.appendChild(content);
    }
}

function darken(e) {
    let oldColor = e.target.style.backgroundColor;
    let rgbaString = oldColor.slice(4, -1);
    let rgbaArray = rgbaString.split(',');

    let red = rgbaArray[0] - 26;
    let green = rgbaArray[1] - 26;
    let blue = rgbaArray[2] - 26;

    if (red < 0) {red = 0;}
    if (green < 0) {green = 0;}
    if (blue < 0) {blue = 0;}

    return `rgb(${red}, ${green}, ${blue})`;
}

document.addEventListener('mouseover', function(e){

    if(e.target.className=="grid-item"){
        if (pen == "rainbow") {
            e.target.style.backgroundColor = 
                `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)})`;
        }
        if (pen == "green") {
            e.target.style.backgroundColor = "rgb(127, 255, 0)";
        }
        if (pen == "shader") {
            e.target.style.backgroundColor = darken(e);
        }
    }
})

const whitePenButton = document.querySelector("#greenPenSelector");
whitePenButton.onclick = () => {
    pen = "green";
}

const rainbowPenButton = document.querySelector("#rainbowPenSelector");
rainbowPenButton.onclick = () => {
    pen = "rainbow";
}

const shaderPenButton = document.querySelector("#shaderPenSelector");
shaderPenButton.onclick = () => {
    pen = "shader";
}

const button = document.querySelector("#button");
button.onclick = () => {
    const container = document.querySelector('#grid-container-id');
    container.innerHTML = "";
    buildGrid();
}