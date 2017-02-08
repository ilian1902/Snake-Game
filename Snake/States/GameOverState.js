var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var GameOverState = (function (_super) {
        __extends(GameOverState, _super);
        function GameOverState() {
            _super.call(this);
        }
        GameOverState.prototype.create = function () {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.gameOverImage = this.game.add.sprite(0, 0, 'game-over');
            this.gameOverImage.scale.setTo(this.game.width / this.gameOverImage.width, this.game.height / this.gameOverImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - 185), (this.game.canvas.height / 2), 'button-start', this.newGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - 135), (this.game.canvas.height / 4), "GAME OVER", style);
        };
        GameOverState.prototype.newGame = function () {
            this.game.state.start('GamePlayState');
        };
        return GameOverState;
    }(Phaser.State));
    GameFromScrach.GameOverState = GameOverState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GameOverState.js.map