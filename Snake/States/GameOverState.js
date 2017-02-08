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
            this.TEXT_POS_X = 135;
            this.BUTTON_POS_X = 185;
            this.volumeMusic = 0.5;
        }
        GameOverState.prototype.create = function () {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.gameOverImage = this.game.add.sprite(0, 0, 'game-over');
            this.gameOverImage.scale.setTo(this.game.width / this.gameOverImage.width, this.game.height / this.gameOverImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - this.BUTTON_POS_X), (this.game.canvas.height / 2), 'button-start', this.newGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "GAME OVER", style);
            this.music = this.game.sound.add('game-over', this.volumeMusic, false);
            this.music.play();
        };
        GameOverState.prototype.newGame = function () {
            this.game.state.start('GamePlayState');
            //this.music.stop();
        };
        return GameOverState;
    }(Phaser.State));
    GameFromScrach.GameOverState = GameOverState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GameOverState.js.map