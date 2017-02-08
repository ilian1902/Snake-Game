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
            this.squareSize = 15;
            this.startPosition = 150;
            this.level = 1;
        }
        GamePlayState.prototype.create = function () {
            this.playScreenImage = this.add.sprite(0, 0, 'scene');
            this.playScreenImage.scale.setTo(this.game.width / this.playScreenImage.width, this.game.height / this.playScreenImage.height);
            this.game.physics.startSystem(Phaser.Physics.ARCADE);
            this.addNew = false;
            this.cursors = this.game.input.keyboard.createCursorKeys();
            //this.checkScreen();
            this.snake = new GameFromScrach.Player(this.game, this.startPosition, this.startPosition, 'snake');
            // Initial snake
            for (var i = 1; i < 5; i++) {
                this.snake.snakeBody[i] = this.game.add.sprite(this.startPosition + i * this.squareSize, this.startPosition, 'snake'); // Parameters are (X coordinate, Y coordinate, image)
            }
            //this.snake.snakeHead.anchor.setTo(0.5, 0.5);
            //this.game.physics.enable(this.snake.snakeHead, Phaser.Physics.ARCADE);
            //this.InitSnakeBodyArray();           
            //this.InitSnakePathArray();
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
            //this.snake.snakeHead.body.enable = true;
            //this.snake.snakeHead.checkWorldBounds = true;
            //this.snake.snakeHead.events.onOutOfBounds.add(this.wallCollision, this);
            this.generateApple();
        };
        GamePlayState.prototype.preLoad = function () {
        };
        GamePlayState.prototype.update = function () {
            //this.snake.snakeHead.body.velocity.setTo(0, 0);
            //this.snake.snakeHead.body.angularVelocity = 0;
            //
            //if (this.cursors.up.isDown) { //tuk spira igrata ako mahna ifa tragva sama
            //    this.snake.snakeHead.body.velocity.copyFrom(this.game.physics.arcade.velocityFromAngle(this.snake.snakeHead.angle, (this.snake.speed * 100)));
            //
            //    this.InitSnakePathArray()
            //    this.drawSnake();
            //    console.log(this.snake.snakeBody.length)
            //    console.log(this.snake.snakePath.length)
            //    for (var i = 1; i <= this.snake.snakeBody.length - 1; i++) {
            //        this.snake.snakeBody[i].x = (this.snake.snakePath[i * this.snake.snakeSpacer]).x;
            //        this.snake.snakeBody[i].y = (this.snake.snakePath[i * this.snake.snakeSpacer]).y;
            //    }
            //    
            //}
            //
            //----------------------------------------------------------------------------------
            //this.checkScreen();
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
                    lastCell.x = firstCell.x + 15;
                    lastCell.y = firstCell.y;
                }
                else if (this.snake.direction == 'left') {
                    lastCell.x = firstCell.x - 15;
                    lastCell.y = firstCell.y;
                }
                else if (this.snake.direction == 'up') {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y - 15;
                }
                else if (this.snake.direction == 'down') {
                    lastCell.x = firstCell.x;
                    lastCell.y = firstCell.y + 15;
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
            //----------------------------------------------------------------------------------
            // if (this.cursors.left.isDown) {
            //     this.snake.snakeHead.body.angularVelocity = -300;
            // }
            // else if (this.cursors.right.isDown) {
            //     this.snake.snakeHead.body.angularVelocity = 300;
            // }
            // this.game.physics.arcade.collide(this.apple, this.snake.snakeHead, this.appleCollision, null, this);
            // this.checkForCollision(this.apple);
        };
        GamePlayState.prototype.generateApple = function () {
            // Chose a random place on the grid.
            var randomX = Math.floor(Math.random() * 40) * this.squareSize, randomY = Math.floor(Math.random() * 30) * this.squareSize;
            // Add a new apple.
            this.apple = new GameFromScrach.Apple(this.game, randomX, randomY);
        };
        GamePlayState.prototype.checkScreen = function () {
            switch (this.level) {
                case 1:
                    this.playScreenImage = this.add.sprite(0, 0, 'iron');
                    this.playScreenImage.scale.setTo(this.game.width / this.playScreenImage.width, this.game.height / this.playScreenImage.height);
                    break;
                case 2:
                    this.playScreenImage = this.add.sprite(0, 0, 'scene');
                    this.playScreenImage.scale.setTo(this.game.width / this.playScreenImage.width, this.game.height / this.playScreenImage.height);
                    break;
            }
        };
        GamePlayState.prototype.addBodySnake = function () {
            this.snake.snakeBody.push(this.game.add.sprite(this.snake.snakeBody[this.snake.snakeBody.length - 1].x, this.snake.snakeBody[this.snake.snakeBody.length - 1].y, 'ball'));
            this.game.physics.arcade.enable(this.snake.snakeBody);
            this.game.physics.arcade.collide(this.snake.snakeHead, this.snake.snakeBody, this.selfCollision, null, this);
            this.snake.snakeBody[this.snake.snakeBody.length - 1].anchor.setTo(0.5, 0.5);
            //console.log(this.snake.snakeBody.length);
            this.drawSnake();
            this.snake.snakePath.unshift(this.game.add.sprite(this.snake.snakeBody[this.snake.snakeBody.length - 1].x, this.snake.snakeBody[this.snake.snakeBody.length - 1].y, 'ball'));
        };
        GamePlayState.prototype.appleCollision = function () {
            //this.apple.killApple();
            //this.snake.score++;
            //this.scoreTextValue.text = this.snake.score.toString();
            //this.addNew = true;
            ////this.addBodySnake();
            //this.generateApple();
            ////this.addBodySnake();
            for (var i = 0; i < this.snake.snakeBody.length; i++) {
                if (this.snake.snakeBody[i].x == this.apple.x && this.snake.snakeBody[i].y == this.apple.y) {
                    // Next time the snake moves, a new block will be added to its length.
                    this.addNew = true;
                    // Destroy the old apple.
                    this.apple.killApple();
                    // Make a new one.
                    this.generateApple();
                    // Increase score.
                    this.snake.score++;
                    // Refresh scoreboard.
                    this.scoreTextValue.text = this.snake.score.toString();
                }
            }
        };
        GamePlayState.prototype.selfCollision = function (head) {
            // Check if the head of the snake overlaps with any part of the snake.
            for (var i = 0; i < this.snake.snakeBody.length - 1; i++) {
                if (head.x == this.snake.snakeBody[i].x && head.y == this.snake.snakeBody[i].y) {
                    // If so, go to game over screen.
                    this.game.state.start('GameOverState');
                }
            }
        };
        GamePlayState.prototype.wallCollision = function (head) {
            if (head.x >= 600 || head.x < 0 || head.y >= 450 || head.y < 0) {
                this.game.state.start('GameOverState');
            }
        };
        GamePlayState.prototype.checkForCollision = function (apple) {
            // check for collide
            this.game.physics.enable(apple, Phaser.Physics.ARCADE);
            apple.body.collideWorldBounds = true;
            apple.body.checkCollision.up = true;
            apple.body.checkCollision.down = true;
            apple.body.checkCollision.left = true;
            apple.body.checkCollision.right = true;
            apple.body.immovable = true;
        };
        GamePlayState.prototype.drawSnake = function () {
            var part = this.snake.snakePath.pop();
            part.setTo(this.snake.snakeHead.x, this.snake.snakeHead.y);
            //part.setTo(this.snake.snakeBody[this.snake.snakeBody.length - 1].x, this.snake.snakeBody[this.snake.snakeBody.length-1].y);
            this.snake.snakePath.unshift(part);
        };
        GamePlayState.prototype.InitSnakePathArray = function () {
            for (var i = 0; i <= (this.snake.snakeBody.length - 1) * this.snake.snakeSpacer; i++) {
                this.snake.snakePath[i] = new Phaser.Point(this.snake.lastX, this.snake.lastY);
            }
        };
        GamePlayState.prototype.InitSnakeBodyArray = function () {
            //this.snake.snakeBody[this.snake.snakeBody.length - 1] = this.game.add.sprite(this.snake.snakeHead.x, this.snake.snakeHead.y, 'ball');
            //this.snake.snakeBody[this.snake.snakeBody.length - 1].anchor.setTo(0.5, 0.5);
            for (var i = 1; i <= this.snake.numSnakeBodyStart - 1; i++) {
                this.snake.snakeBody[i] = this.game.add.sprite(this.snake.snakeHead.x, this.snake.snakeHead.y, 'ball');
                this.snake.snakeBody[i].anchor.setTo(0.5, 0.5);
            }
        };
        return GamePlayState;
    }(Phaser.State));
    GameFromScrach.GamePlayState = GamePlayState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GamePlayState.js.map