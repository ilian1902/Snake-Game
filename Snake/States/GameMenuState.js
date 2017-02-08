var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var GameMenuState = (function (_super) {
        __extends(GameMenuState, _super);
        function GameMenuState() {
            _super.call(this);
            this.TEXT_POS_X = 135;
            this.BUTTON_POS_X = 185;
            this.volumeSound = 1;
        }
        GameMenuState.prototype.create = function () {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.menuScreenImage = this.add.sprite(0, 0, 'menu');
            this.menuScreenImage.scale.setTo(this.game.width / this.menuScreenImage.width, this.game.height / this.menuScreenImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - this.BUTTON_POS_X), (this.game.canvas.height / 2), 'button-start', this.startGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "Snake Game", style);
            this.music = this.game.sound.add('game-menu', this.volumeSound, false);
            this.music.play();
        };
        GameMenuState.prototype.startGame = function () {
            this.game.state.start('GamePlayState');
            //this.music.stop();
        };
        return GameMenuState;
    }(Phaser.State));
    GameFromScrach.GameMenuState = GameMenuState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GameMenuState.js.map