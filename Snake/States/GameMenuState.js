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
        }
        GameMenuState.prototype.create = function () {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.menuScreenImage = this.add.sprite(0, 0, 'menu');
            this.menuScreenImage.scale.setTo(this.game.width / this.menuScreenImage.width, this.game.height / this.menuScreenImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - 185), (this.game.canvas.height / 2), 'button-start', this.startGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - 135), (this.game.canvas.height / 4), "Snake Game", style);
        };
        GameMenuState.prototype.startGame = function () {
            this.game.state.start('GamePlayState');
        };
        return GameMenuState;
    }(Phaser.State));
    GameFromScrach.GameMenuState = GameMenuState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=GameMenuState.js.map