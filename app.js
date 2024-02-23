//sets the count variable, counting the amount of turns have been taken so far.
var count = 0
//sets the xWin variable, counting the amount of wins the 'X' player has.
var xWin = 0;
////sets the xWin variable, counting the amount of wins the 'O' player has.
var oWin = 0;
//function that runs everytime a user clicks a box on the tictactoe board.
function whenClicked(box) {
    //checks if the box is empty or not. If it is not empty, nothing will happen. This is to prevent cheating and the change of boxes that are already full (functionality)
    if(!document.getElementById(box).innerHTML){
        //checks which players turn it is
        if (document.getElementById('playerTurn').innerHTML == 'Player: X') {
            //another way to prevent cheating and the change of boxes that are already full
            if (document.getElementById(box).innerHTML == 'X' || document.getElementById(box).innerHTML == 'O') {
                return;
            }
            //the set of code that will run when the 'X' player chooses a box.
            else {
                //the board is updated to show the user
                document.getElementById(box).innerHTML = "X";
                //changes the turn to the opposing player
                document.getElementById('playerTurn').innerHTML = 'Player: O'
                //increases the turn count by 1
                count++;
                //updates the count score on the user's screen
                document.getElementById('turn').innerHTML = 'Turn: ' + count;
            }
            //calls the getWinner(letter) functon to check if there is a winner after every turn.
            getWinner("X")
        }
        else {
            //the board is updated to show the user
            document.getElementById(box).innerHTML = "O";
            //changes the turn to the opposing player
            document.getElementById('playerTurn').innerHTML = 'Player: X'
            //increases the turn count by 1
            count++;
            //updates the count score on the user's screen
            document.getElementById('turn').innerHTML = 'Turn: ' + count;
            //calls the getWinner(letter) functon to check if there is a winner after every turn.
            getWinner("O")
        }
}
    
    
}
//function to check if there is a winner
function getWinner(letter) {
    //the following else if elements are game winning scenarios that the function checks for.
    if (document.getElementById('a1').innerHTML == letter && document.getElementById('a2').innerHTML == letter && document.getElementById('a3').innerHTML == letter) {
        //highlights the winning row. This is consistent for all the other statements as well.
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("a2").style.color = "yellow";
        document.getElementById("a3").style.color = "yellow";
        //displays and congrats the winning player.
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        //ends the game and makes the functionality better. The players can't change the board anymore and a new game can be started if desired. Consistent for all the other statements as well.
        document.getElementById('tic').style.pointerEvents = 'none';
        //updates the score count if X or O wins.
        getCount(letter)
    }
    else if (document.getElementById('a1').innerHTML == letter && document.getElementById('b1').innerHTML == letter && document.getElementById('c1').innerHTML == letter) {
        document.getElementById("b1").style.color = "yellow";
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("c1").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('a2').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c2').innerHTML == letter) {
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("a2").style.color = "yellow";
        document.getElementById("c2").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('a3').innerHTML == letter && document.getElementById('b3').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("b3").style.color = "yellow";
        document.getElementById("a3").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('b1').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('b3').innerHTML == letter) {
        document.getElementById("b1").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("b3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('c1').innerHTML == letter && document.getElementById('c2').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("c1").style.color = "yellow";
        document.getElementById("c2").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('a1').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c3').innerHTML == letter) {
        document.getElementById("a1").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("c3").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    else if (document.getElementById('a3').innerHTML == letter && document.getElementById('b2').innerHTML == letter && document.getElementById('c1').innerHTML == letter) {
        document.getElementById("a3").style.color = "yellow";
        document.getElementById("b2").style.color = "yellow";
        document.getElementById("c1").style.color = "yellow";
        document.getElementById('title').innerHTML = letter + " WON! Congrats!"
        document.getElementById('tic').style.pointerEvents = 'none';
        getCount(letter)
    }
    //the condition to check if the game is a tie. Checks if all boxes are full. This is ran if all the other conditions are not met.
    else if (document.getElementById('a1').innerHTML != "" && document.getElementById('a2').innerHTML != "" && document.getElementById('a3').innerHTML != "" && document.getElementById('b1').innerHTML != "" && document.getElementById('b2').innerHTML != "" && document.getElementById('b3').innerHTML != "" && document.getElementById('c1').innerHTML != "" && document.getElementById('c2').innerHTML != "" && document.getElementById('c3').innerHTML != ""){
        //updates the user's screen to indicate a tie game.
        document.getElementById('title').innerHTML = "TIE GAME"
        document.getElementById('tic').style.pointerEvents = 'none';
    }
}
//keeps track of the wins each user has
function getCount(letter) {
    //runs if X won
    if (letter == "X") {
        //adds a win to the xWin variable, counting the number of X wins.
        xWin += 1;
        //updates the user's screen with the current amount of wins.
        document.getElementById("xwin").innerHTML = 'X Wins: ' + xWin;
        //highlights the user who just won
        document.getElementById("xwin").style.color = "yellow";
    }
    //runs if O won
    else {
        //adds a win to the oWin variable, counting the number of O wins.
        oWin += 1;
        //updates the user's screen with the current amount of wins.
        document.getElementById("owin").innerHTML = 'O Wins: ' + oWin;
        //highlights the user who just won
        document.getElementById("owin").style.color = "yellow";
    }
}
//runs when the New Game button is clicked
function reset() {
    //allows the user to play the game and click the boxes again.
    document.getElementById('tic').style.pointerEvents = 'auto';
    //resets the title
    document.getElementById('title').innerHTML = "Tic-Tac-Toe"
    //resets the turn count on the user's screen
    document.getElementById('turn').innerHTML = 'Turn: 0';
    //resets the count variable to keep new track.
    count = 0;
    //resets the highlighted text to normal.
    document.getElementById("owin").style.color = "#F1D3B2";
    document.getElementById("xwin").style.color = "#F1D3B2";
    //resets the board to empty
    document.getElementById("a1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    //resets the highlighted text to normal.
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
