var count = 0
var xWin = 0;
var oWin = 0;
function whenClicked(box) {
    if(!document.getElementById(box).innerHTML){
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
            getWinner("X")
        }
        else {
            document.getElementById(box).innerHTML = "O";
            document.getElementById('playerTurn').innerHTML = 'Player: X'
            count++;
            document.getElementById('turn').innerHTML = 'Turn: ' + count;
            getWinner("O")
        }
}
    
    
}
function getWinner(letter) {
    if (document.getElementById('a1').innerHTML == letter && document.getElementById('a2').innerHTML == letter && document.getElementById('a3').innerHTML == letter) {
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("a2").style.color = "yellow";
        document.getElementById("a3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a1').innerHTML == letter && document.getElementById('b1').innerHTML == letter && document.getElementById('c1').innerHTML == letter) {
        document.getElementById("b1").style.color = "yellow";
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("c1").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a2').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c2').innerHTML == letter) {
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("a2").style.color = "yellow";
        document.getElementById("c2").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a3').innerHTML == letter && document.getElementById('b3').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("b3").style.color = "yellow";
        document.getElementById("a3").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('b1').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('b3').innerHTML == letter) {
        document.getElementById("b1").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("b3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('c1').innerHTML == letter && document.getElementById('c2').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("c1").style.color = "yellow";
        document.getElementById("c2").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a1').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a3').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c1').innerHTML == letter) {
        document.getElementById("a3").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("c1").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON!"
        getCount(letter)
    }
    else if (document.getElementById('a1').innerHTML != "" && document.getElementById('a2').innerHTML != "" && document.getElementById('a3').innerHTML != "" && document.getElementById('b1').innerHTML != "" && document.getElementById('b2').innerHTML != "" && document.getElementById('b3').innerHTML != "" && document.getElementById('c1').innerHTML != "" && document.getElementById('c2').innerHTML != "" && document.getElementById('c3').innerHTML != ""){
        document.getElementById('title').innerHTML = "TIE GAME"
    }
}
function getCount(letter) {
    if (letter == "X") {
        xWin += 1;
        document.getElementById("xwin").innerHTML = 'X Wins: ' + xWin;
        document.getElementById("xwin").style.color = "yellow";
    }
    else {
        oWin += 1;
        document.getElementById("owin").innerHTML = 'O Wins: ' + oWin;
        document.getElementById("owin").style.color = "yellow";
    }
}
function reset() {
    document.getElementById('title').innerHTML = "Tic-Tac-Toe"
    document.getElementById('playerTurn').innerHTML == 'Player: X';
    document.getElementById('turn').innerHTML = 'Turn: 0';
    count = 0;
    document.getElementById("owin").style.color = "#F1D3B2";
    document.getElementById("xwin").style.color = "#F1D3B2";
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById("a1").style.color = "#F1D3B2";
    document.getElementById("a2").style.color = "#F1D3B2";
    document.getElementById("a3").style.color = "#F1D3B2";
    document.getElementById("b1").style.color = "#F1D3B2";
    document.getElementById("b2").style.color = "#F1D3B2";
    document.getElementById("b3").style.color = "#F1D3B2";
    document.getElementById("c1").style.color = "#F1D3B2";
    document.getElementById("c2").style.color = "#F1D3B2";
    document.getElementById("c3").style.color = "#F1D3B2";
}
    