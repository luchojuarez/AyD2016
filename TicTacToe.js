const emptyBoard =
	["--","--","--",
	 "--","--","--",
	 "--","--","--"];

var board = emptyBoard;
var currentPlayer = "O"


function putPiece (pos) {
	var posInt = charToInt(pos)-1;
	if (Boolean(board[posInt]=="--")){ // si el lugar esta vacio
		board[posInt] = currentPlayer; //actualizo en el tablero
		document.getElementById(pos).innerHTML = currentPlayer;
		if (Boolean(gameIsDone())){
			document.getElementById("boton").innerHTML = "Reiniciar";
			window.alert("el jugador "+currentPlayer+" gano!");
		}else{
			if (Boolean(currentPlayer=="O") ){
				currentPlayer="X";
			}else{
				currentPlayer="O";
			}
			document.getElementById("boton").innerHTML = "Es el turno de : "+currentPlayer;
		}
	}
	else {
		window.alert("LUGAR OCUPADO")
	}
}

function restart() {
	board = ["--","--","--", "--","--","--","--","--","--"];;
	updateBoard();
	document.getElementById("boton").innerHTML = "Es el turno de : "+currentPlayer;
}

function pushButton() {
	if (Boolean(gameIsDone())){
		restart();
		return 0;
	}
	else {
		window.alert("Es el turno del jugador "+currentPlayer);
		return 0;
	}
}

function gameIsDone() {
	var horizontal1 = Boolean(Boolean(board[0]==board[1]) && Boolean(board[1]==board[2]) && Boolean(board[0]!="--"));
	var horizontal2 = Boolean(Boolean(board[3]==board[4]) && Boolean(board[4]==board[5]) && Boolean(board[3]!="--"));
	var horizontal3 = Boolean(Boolean(board[6]==board[7]) && Boolean(board[7]==board[8]) && Boolean(board[6]!="--"));
	var vertical1   = Boolean(Boolean(board[6]==board[3]) && Boolean(board[3]==board[0]) && Boolean(board[6]!="--"));
	var vertical2   = Boolean(Boolean(board[7]==board[4]) && Boolean(board[4]==board[1]) && Boolean(board[7]!="--"));
	var vertical3   = Boolean(Boolean(board[8]==board[5]) && Boolean(board[5]==board[2]) && Boolean(board[8]!="--"));
	var diagonal1   = Boolean(Boolean(board[6]==board[4]) && Boolean(board[4]==board[2]) && Boolean(board[6]!="--"));
	var diagonal2   = Boolean(Boolean(board[0]==board[4]) && Boolean(board[4]==board[8]) && Boolean(board[0]!="--"));
	var state = Boolean(Boolean(horizontal1)||Boolean(horizontal2)||Boolean(horizontal3)||Boolean(vertical1)||Boolean(vertical2)||Boolean(vertical3)||Boolean(diagonal2)||Boolean(diagonal1));
	return state;
}

function updateBoard() {
	document.getElementById("1").innerHTML = board[0];
	document.getElementById("2").innerHTML = board[1];
	document.getElementById("3").innerHTML = board[2];
	document.getElementById("4").innerHTML = board[3];
	document.getElementById("5").innerHTML = board[4];
	document.getElementById("6").innerHTML = board[5];
	document.getElementById("7").innerHTML = board[6];
	document.getElementById("8").innerHTML = board[7];
	document.getElementById("9").innerHTML = board[8];
}

function charToInt(a) {
	var value=0;
	switch (a) {
		case "1":
		value=1;
		break;
		case "2":
		value=2;
		break;
		case "3":
		value=3;
		break;
		case "4":
		value=4;
		break;
		case "5":
		value=5;
		break;
		case "6":
		value=6;
		break;
		case "7":
		value=7;
		break;
		case "8":
		value=8;
		break;
		case "9":
		value=9;
		break;
	}
	return value;
}
//
// switch (pos) {
// 	case "1":
// 		board[0]=currentPlayer;
// 		break;
// 	case "2":
// 		board[1]=currentPlayer;
// 		break;
// 	case "3":
// 		board[2]=currentPlayer;
// 		break;
// 	case "4":
// 		board[3]=currentPlayer;
// 		break;
// 	case "5":
// 		board[4]=currentPlayer;
// 		break;
// 	case "6":
// 		board[5]=currentPlayer;
// 		break;
// 	case "7":
// 		board[6]=currentPlayer;
// 		break;
// 	case "8":
// 		board[7]=currentPlayer;
// 		break;
// 	case "9":
// 		board[8]=currentPlayer;
// 		break;
// }
