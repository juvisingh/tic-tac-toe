var count = 0
function whenClicked(box) {
    if (document.getElementById('playerTurn').innerHTML == 'Player: X') {
        if (document.getElementById(box).innerHTML == 'X' || document.getElementById(box).innerHTML == 'O') {
            return;
        }
        else {
            document.getElementById(box).innerHTML = "X";
            document.getElementById('playerTurn').innerHTML = 'Player: O'
            count++;
            document.getElementById('turn').innerHTML = 'Turn: ' + count;
        }
        getWinner(box,"X")
    }
    else {
        document.getElementById(box).innerHTML = "O";
        document.getElementById('playerTurn').innerHTML = 'Player: X'
        count++;
        document.getElementById('turn').innerHTML = 'Turn: ' + count;
        getWinner(box,"O")
    }
    
    
}
function getWinner(box, letter) {
    console.log(box)
    if (document.getElementById('a1').innerHTML == "X" && document.getElementById('a2').innerHTML == "X" && document.getElementById('a3').innerHTML == "X") {    
        document.getElementById(box).innerHTML= letter
            
        alert('X Won!')
    }
}
    