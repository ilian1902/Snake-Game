var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScrach;
(function (GameFromScrach) {
    var Apple = (function (_super) {
        __extends(Apple, _super);
        function Apple(game, x, y) {
            _super.call(this, game, x, y);
            this.apple = game.add.sprite(x, y, 'apple');
        }
        Apple.prototype.killApple = function () {
            //this.apple.destroy();
            this.apple.kill();
        };
        return Apple;
    }(Phaser.Sprite));
    GameFromScrach.Apple = Apple;
})(GameFromScrach || (GameFromScrach = {}));
//# sourceMappingURL=Apple.js.map