let turn = 'X'

let squares = document.querySelectorAll('.square');
console.log(squares[1]);
let showButton = document.querySelector('.show');
console.log(showButton)
let winDiv = document.querySelector('.win');

// Write some code for the 8 winning conditions
let winningConditions = [
    [squares[0], squares[1], squares[2]],
    [squares[3], squares[4], squares[5]],
    [squares[6], squares[7], squares[8]],
    [squares[0], squares[3], squares[6]],
    [squares[1], squares[4], squares[7]],
    [squares[2], squares[5], squares[8]],
    [squares[0], squares[4], squares[8]],
    [squares[2], squares[4], squares[6]],
]

console.log(winningConditions)

squares.forEach(square => {
    square.addEventListener('click', function () {
        // console.log(`The inner HTML is: ${square.innerHTML}`)
        if(turn === 'X' && square.innerHTML === '') {
            square.classList.add('blue');
            square.innerHTML = turn;
            turn = 'O'
        } else if(turn === 'O' && square.innerHTML === '') {
            square.classList.add('red');
            square.innerHTML = turn;
            turn = 'X';
        } else {
            console.log(`Stop trying to cheat! It's no fun!`)
        }
        console.log("This is being run")
        win();
    })
})

function win() {
    // console.log(winningConditions[0][0].innerHTML)
    // Set these as variables and see if the innerHTML of any of the winning conditions has the same spot
    // Loop through the 8 winning conditions
    // Within each loop let me check if the innerHTML of all 3 is X, if it's all O otherwise go to the next
    for(let i = 0; i < winningConditions.length; i++) {
        // console.log(winningConditions[i][0].innerHTML)
        if(winningConditions[i][0].innerHTML === 'X' && winningConditions[i][1].innerHTML === 'X' && winningConditions[i][2].innerHTML === 'X') {
            winDiv.innerHTML = "X is the winner"
        }
        if(winningConditions[i][0].innerHTML === 'O' && winningConditions[i][1].innerHTML === 'O' && winningConditions[i][2].innerHTML === 'O') {
            winDiv.innerHTML = "O is the winner"
        }
    }
}

function showItems () {
    squares.forEach(square => {
        square.classList.remove('hidden');
    })
}

showButton.addEventListener('click', showItems)