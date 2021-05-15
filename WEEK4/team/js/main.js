import Game from "./Game.js";
import GameView from "./GameView.js";
let game = new Game();

let gameView = new GameView(document.getElementById("app"));

gameView.onTileClick = function(i){
    console.log('tile clicked: i')
};
gameView.onRestartClick = function(){
    console.log("Game is restarted!")
};
