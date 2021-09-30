
let bingoCells

const bingoBoard = function() {

    const cellsContainerNode = document.getElementById("cells-container")

    for (let cellsNumber = 1; cellsNumber < 77; cellsNumber++) {

        let newCellsNode = document.createElement("div")
        newCellsNode.classList.add("cell")
        newCellsNode.innerText = cellsNumber

        newCellsNode.onclick = selectCells

        cellsContainerNode.appendChild(newCellsNode)
    }
}

const selectCells = function(eventData) {
    const currentSelectedCells = getSelectedCells()
    if (currentSelectedCells != null) {
        currentSelectedCells.classList.remove("selected")
    }
    const clickedCellsNumber = eventData.target

    clickedCellsNumber.classList.add("selected")
}

const getSelectedCells = function() {
    return document.querySelector(".selected")
}

const saveToDisk = function() {

    let json = JSON.stringify(bingoCells)

    // Save our serialized JSON string to the local storage
    localStorage.setItem("strive-bingo-data", json)
}

const readFromDisk = function() {

    // Read saved data from the local storage
    let json = localStorage.getItem("strive-bingo-data")

    if (json === null) {
        bingoCells = { }
    }
    else {
        bingoCells = JSON.parse(json)
    }
}

window.onload = function() {

    readFromDisk()

    bingoBoard()
}