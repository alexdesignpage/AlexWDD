export default class GameView {
    constructor(root) {
        this.root = root;
        this.root.innerHTML = `
        <div class = "header">
                <div class = "header__turn">
                X's turn
        </div>
        <div class = "header__status">
            In Progress
        </div>
        <button type = "button" class = "header__restart">
            <i class="material-icons"> refresh</i>
        </button>
        </div>
        <div class="board">
            <div class="board__tile" data-index="0">0</div>
            <div class="board__tile" data-index="1">0</div>
            <div class="board__tile board__tile--winner" data-index="2">0</div>
            <div class="board__tile" data-index="3">0</div>
            <div class="board__tile" data-index="4">0</div>
            <div class="board__tile" data-index="5">0</div>
            <div class="board__tile" data-index="6">0</div>
            <div class="board__tile" data-index="7">0</div>
            <div class="board__tile" data-index="8">0</div>
        
        </div>
        
       
        `;

        this.onTileClick = undefined;
        this.onRestartClick = undefined;

        this.root.querySelectorAll(".board__tile").forEach(tile => {
            tile.addEventListener("click", () => {
                if(this.onTimeClick){
            this.onTileClick(tile.dataset.index);
                }
        });
    });

    this.root.querySelector(".header__restart").addEventListener("click", () => {
        
        if(this.onRestartClick){
            this.onRestartClick();
        }
    })

    }
    update(game){
        this.updateTurn(game);
        this.updateStatus(game);
        this.updateBoard(game);
        
    }

    update(Turn){
        this.root.querySelector(".header__turn").textContent =

    }
    update(Status){

    }

    update(Board){
        
    }
    }