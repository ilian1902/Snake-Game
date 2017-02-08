var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.create = function () {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.titleScreenImage = this.add.sprite(0, 0, 'title');
            this.titleScreenImage.scale.setTo(this.game.width / this.titleScreenImage.width, this.game.height / this.titleScreenImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - 185), (this.game.canvas.height / 2), 'button-start', this.startGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - 135), (this.game.canvas.height / 4), "Snake Game", style);
        };
        TitleScreenState.prototype.startGame = function () {
            this.game.state.start('GamePlayState');
        };
        return TitleScreenState;
    }(Phaser.State));
    GameFromScrach.TitleScreenState = TitleScreenState;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=TitleScreenState.js.map