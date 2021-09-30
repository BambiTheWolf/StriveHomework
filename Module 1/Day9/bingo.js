
let bingoCells

const bingoBoard = function() {

    const cellsContainerNode = document.getElementById("cells-container")

    for (let cellsNumber = 1; cellsNumber < 76; cellsNumber++) {

        let newCellsNode = document.createElement("div")
        newCellsNode.classList.add("cell")
        newCellsNode.innerText = cellsNumber

        newCellsNode.onclick = selectCells

        cellsContainerNode.appendChild(newCellsNode)
    }
}

const = selectCells = function(eventData) {
    const current
}

window.onload = function() {

    readFromDisk()

    bingoBoard()
}