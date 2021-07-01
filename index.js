window.onload = function (){
    displayBoard()
    runBingo()
    clearBingo()
}
// TODO: display board

const displayBoard = function(){

    let board = document.getElementById('board')

    for (let cellNum = 1; cellNum <= 76; cellNum++){
        let newCellNode = document.createElement('div')
        newCellNode.innerText = cellNum
        newCellNode.classList.add('cell')
        board.appendChild(newCellNode)
    }
}

const runBingo = function(){
    let button = document.getElementById('btn')
    button.onclick = function(){
        randomNum()

    }
}

const clearBingo = function(){
    let button = document.getElementById('clr-btn')
    button.onclick = function(){
        let clearNodeList = document.querySelectorAll('div .selected')
        clearNodeList[0].classList.remove('selected')
    }
}

const randomNum = function(){
    let num = Math.floor(Math.random() * 76) + 1
    let cellNodeList = document.querySelectorAll('div .cell')
    cellNodeList[num - 1].classList.add('selected')
} 