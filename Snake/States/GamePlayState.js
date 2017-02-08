var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var GamePlayState = (function (_super) {
        __extends(GamePlayState, _super);
        function GamePlayState() {
            _super.call(this);
            this.START_POSITION = 150;
            this.SQUARE_SIZE = 15;
            this.level = 1;
        }
        GamePlayState.prototype.create = function () {
            this.playScreenImage = this.add.sprite(0, 0, 'scene');
            this.playScreenImage.scale.setTo(this.game.width / this.playScreenImage.width, this.game.height / this.playScreenImage.height);
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.addNew = false;
            this.cursors = this.game.input.keyboard.createCursorKeys();
            //this.checkScreen();
            this.snake = new GameFromScrach.Player(this.game, this.START_POSITION, this.START_POSITION, 'snake');
            // Initial snake
            for (var i = 1; i < 5; i++) {
                this.snake.snakeBody[i] = this.game.add.sprite(this.START_POSITION + i * this.SQUARE_SIZE, this.START_POSITION, 'snake');
            }
            // Style for text
            this.textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
            this.textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
            // Score.
            this.game.add.text(30, 20, "SCORE", this.textStyle_Key);
            this.scoreTextValue = this.game.add.text(90, 18, this.snake.score.toString(), this.textStyle_Value);
            // Speed.
            this.game.add.text(500, 20, "SPEED", this.textStyle_Key);
            this.speedTextValue = this.game.add.text(558, 18, this.snake.speed.toString(), this.textStyle_Value);
            // Level.
            this.game.add.text(300, 20, "LEVEL", this.textStyle_Key);
            this.levelTextValue = this.game.add.text(280, 18, this.level.toString(), this.textStyle_Value);
            this.game.physics.enable(this.snake.snakeHead, Phaser.Physics.ARCADE);
            // Sounds
            this.food = this.game.sound.add('food', 1, false, true);
            this.moveSound = this.game.sound.add('move', 0.5, true, true);
            this.moveSound.play();
            this.generateApple();
        };
        GamePlayState.prototype.update = function () {
            if (this.cursors.right.isDown && this.snake.direction != 'left') {
                this.snake.newDirection = 'right';
            }
            else if (this.cursors.left.isDown && this.snake.direction != 'right') {
                this.snake.newDirection = 'left';
            }
            else if (this.cursors.up.isDown && this.snake.direction != 'down') {
                this.snake.newDirection = 'up';
            }
            else if (this.cursors.down.isDown && this.snake.direction != 'up') {
                this.snake.newDirection = 'down';
            }
            this.snake.speed = Math.min(10, Math.floor(this.snake.score / 5));
            this.speedTextValue.text = '' + this.snake.speed;
            this.level = Math.min(10, Math.floor(this.snake.score / 3));
            this.levelTextValue.text = '' + this.level;
            this.snake.updateDelay++;
            if (this.snake.updateDelay % (10 - this.snake.speed) == 0) {
                // Snake movement
                var firstCell = this.snake.snakeBody[this.snake.snakeBody.length - 1], lastCell = this.snake.snakeBody.shift(), oldLastCellx = lastCell.x, oldLastCelly = lastCell.y;
                // If a new direction has been chosen from the keyboard, make it the direction of the snake now.
                if (this.snake.newDirection) {
                    this.snake.direction = this.snake.newDirection;
                    this.snake.newDirection = null;
                }
                // Change the last cell's coordinates relative to the head of the snake, according to the direction.
                if (this.snake.direction == 'right') {
                    lastCell.x = firstCell.x + this.SQUARE_SIZE;
                    lastCell.y = firstCell.y;
                }
                else if (this.snake.direction == 'left') {
                    lastCell.x = firstCell.x - this.SQUARE_SIZE;
                    lastCell.y = firstCell.y;
                }
                else if (this.snake.direction == 'up') {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y - this.SQUARE_SIZE;
                }
                else if (this.snake.direction == 'down') {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y + this.SQUARE_SIZE;
                }
                // Place the last cell in the front of the stack.
                // Mark it the first cell.
                this.snake.snakeBody.push(lastCell);
                firstCell = lastCell;
                if (this.addNew) {
                    this.snake.snakeBody.unshift(this.game.add.sprite(oldLastCellx, oldLastCelly, 'snake'));
                    this.addNew = false;
                }
                this.appleCollision();
                this.selfCollision(firstCell);
                this.wallCollision(firstCell);
            }
        };
        GamePlayState.prototype.generateApple = function () {
            // Chose a random place on the grid.
            var randomX = Math.floor(Math.random() * 40) * this.SQUARE_SIZE, randomY = Math.floor(Math.random() * 30) * this.SQUARE_SIZE;
            // Add a new apple.
            this.apple = new GameFromScrach.Apple(this.game, randomX, randomY);
        };
        GamePlayState.prototype.appleCollision = function () {
            for (var i = 0; i < this.snake.snakeBody.length; i++) {
                if (this.snake.snakeBody[i].x == this.apple.x && this.snake.snakeBody[i].y == this.apple.y) {
                    this.food.play();
                    this.addNew = true;
                    this.apple.killApple();
                    this.generateApple();
                    this.snake.score++;
                    this.scoreTextValue.text = this.snake.score.toString();
                }
            }
        };
        GamePlayState.prototype.selfCollision = function (head) {
            for (var i = 0; i < this.snake.snakeBody.length - 1; i++) {
                if (head.x == this.snake.snakeBody[i].x && head.y == this.snake.snakeBody[i].y) {
                    this.game.state.start('GameOverState');
                    this.moveSound.stop();
                }
            }
        };
        GamePlayState.prototype.wallCollision = function (head) {
            if (head.x >= this.game.canvas.width || head.x < 0 || head.y >= this.game.canvas.height || head.y < 0) {
                this.game.state.start('GameOverState');
                this.moveSound.stop();
            }
        };
        return GamePlayState;
    }(Phaser.State));
    GameFromScrach.GamePlayState = GamePlayState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GamePlayState.js.map