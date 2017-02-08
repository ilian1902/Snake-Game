module GameFromScrach {

    export class Player extends Phaser.Sprite{

        public static MAX_SPEED: number = 30;
        game: Phaser.Game;
        speed: number;
        
        score: number;
        snakeHead: Phaser.Sprite;
        snakeBody: Array<Phaser.Sprite>;
        snakePath: Array<any>;
        numSnakeBodyStart: number = 4;
        snakeSpacer: number = 6;
        lastX: number;
        lastY: number;
        updateDelay: number;
        newDirection: string;
        direction: string;
        
        


        constructor(game: Phaser.Game, x: number, y: number, spriteName) {
            super(game, x, y, spriteName);

            this.speed = 0;
            this.score = 0;
            this.snakeBody = [];
            this.snakeBody.push(game.add.sprite(x, y, spriteName));
            this.snakeHead = this.snakeBody[0];
            this.snakePath = [];
            this.lastX = this.snakeBody[this.snakeBody.length - 1].x;
            this.lastY = this.snakeBody[this.snakeBody.length - 1].y;
            this.updateDelay = 0;
            this.newDirection = null;
            this.direction = 'right';
        }

        addBody(game,x, y, spriteName) {
            this.snakeBody.push(game.add.sprite(x, y, spriteName));
        }
    }
}