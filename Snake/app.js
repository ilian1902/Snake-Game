var Game;
(function (Game) {
    var Snake = (function () {
        function Snake() {
            this.game = new Phaser.Game(600, 450, Phaser.CANVAS, 'snake', {
                create: this.create, preload: this.preload
            });
        }
        Snake.prototype.preload = function () {
            this.game.load.image('menu', '/Images/snake-skin.jpg');
            this.game.load.image('scene', '/Images/grass.jpg');
            this.game.load.image('iron', '/Images/iron.jpg');
            this.game.load.image('game-over', '/Images/main-snake.jpg');
            this.game.load.image('snake', '/Images/snake.png');
            this.game.load.image('apple', '/Images/red_ball.png');
            this.game.load.image('button-start', '/Images/button.png');
            this.game.load.image('button-new', '/Images/menu-new-game.png');
        };
        Snake.prototype.create = function () {
            this.game.state.add('GameMenuState', GameFromScrach.GameMenuState, true);
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.state.add('GamePlayState', GameFromScrach.GamePlayState, true);
            this.game.state.add('GameOverState', GameFromScrach.GameOverState, true);
            this.game.state.start('GameMenuState');
        };
        return Snake;
    }());
    Game.Snake = Snake;
})(Game || (Game = {}));
window.onload = function () {
    var game = new Game.Snake();
};
//# sourceMappingURL=app.js.map