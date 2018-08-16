var turn = 'O';
var winner;

function changeTurn(){
    turn = (turn === 'O' ? 'X' : 'O');
    $("#player").text(turn);
}

$("#TicTacToe button").click(function(){
    if($(this).html() == '&nbsp;'){
        $(this).text(turn);
        changeTurn();
    }
});
