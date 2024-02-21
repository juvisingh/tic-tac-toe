var count = 0
function whenClicked(box) {
    if (document.getElementById('playerTurn').innerHTML == 'Player: X') {
        if (document.getElementById(box).innerHTML == 'X' || document.getElementById(box).innerHTML == 'O') {
            break;
        }
        else {
            document.getElementById(box).innerHTML = "X";
            document.getElementById('playerTurn').innerHTML = 'Player: O'
            count++;
            document.getElementById('turn').innerHTML = 'Turn: ' + count;
        }
    }
    else {
        document.getElementById(box).innerHTML = "O";
        document.getElementById('playerTurn').innerHTML = 'Player: X'
        count++;
        document.getElementById('turn').innerHTML = 'Turn: ' + count;
    }
}