const controls = document.querySelector(".controls");
const resetButton = document.querySelector(".reset");
const changeButton = document.querySelector(".change");

const container = document.querySelector(".container");


const ROWS = 16;
const COLS = 16;

function init(...args){
    let rowVar = ROWS;
    let colsVar = COLS;

    if((args.length === 2)
        && (typeof args[0] === 'number')
        && (typeof args[1] === 'number')
        && (args[0] > 0 && args[0] <= 100)
        && (args[1] > 0 && args[1] <= 100)){
            rowVar = args[0];
            colsVar = args[1];
        }

    for(let i = 0; i < rowVar; i++){
        let row = document.createElement("div");
        row.classList.add("row");

        for(let j = 0; j < colsVar; j++){
            let col = document.createElement("div");
            col.classList.add("cell");
            row.appendChild(col);
        }

        container.appendChild(row);
    }

    let cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", changeBackgroundColor);
    });

}

function resetBoard(){
    let cells = document.querySelectorAll(".cell");
        cells.forEach((cell) => {
            cell.style.backgroundColor = "";
    });
}

function changeBackgroundColor(event) {
    event.target.style.backgroundColor = "black";
}

function changeBoard(){
    if(document.querySelector(".prompt") !== null){
        document.querySelector(".prompt").remove();
        return;
    }

    let prompt = document.createElement("div");
    prompt.classList.add("prompt");
    prompt.style.display = "flex";

    let titles = ["X-Axis", "Y-Axis"]

    let pRow = document.createElement("div");
    pRow.classList.add("pRow");

    for(let i = 0; i < 2; i++){
        let pCol = document.createElement("div");
        pCol.style.display = "flex";
        pCol.style.flexDirection = "column";
        pCol.classList.add("pCol");

        let item = document.createElement("label");
        item.for = titles[i].toLowerCase();
        item.textContent = titles[i];

        pCol.appendChild(item);

        item = document.createElement("input");
        item.type = "text";
        item.name = titles[i].toLowerCase();
        item.style.width = "75px";

        pCol.appendChild(item);
        

        pRow.appendChild(pCol);
    }

    prompt.appendChild(pRow);
    
    pRow = document.createElement("div");
    pRow.classList.add("pRow");

    let item = document.createElement("p");
    item.textContent = "Must be between 1 < x|y < 100";
    item.style.fontSize = "10px";
    item.classList.add("bounds");

    pRow.appendChild(item);

    item = document.createElement("button");
    item.classList.add("submit");
    item.textContent = "Submit";

    pRow.appendChild(item);

    item = document.createElement("p");
    item.classList.add("error");
    
    pRow.appendChild(item);
    prompt.appendChild(pRow);

    controls.appendChild(prompt);

}

init();
resetButton.addEventListener("click", resetBoard);
changeButton.addEventListener("click", changeBoard);
