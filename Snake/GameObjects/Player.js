var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player(game, x, y, spriteName) {
            _super.call(this, game, x, y, spriteName);
            this.numSnakeBodyStart = 4;
            this.snakeSpacer = 6;
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
        Player.prototype.addBody = function (game, x, y, spriteName) {
            this.snakeBody.push(game.add.sprite(x, y, spriteName));
        };
        Player.MAX_SPEED = 30;
        return Player;
    }(Phaser.Sprite));
    GameFromScrach.Player = Player;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=Player.js.map