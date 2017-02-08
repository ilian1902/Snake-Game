module GameFromScrach {
    export class Apple extends Phaser.Sprite {
        apple: Phaser.Sprite;

        constructor(game: Phaser.Game, x: number, y: number) {
            super(game, x, y)
            this.apple = game.add.sprite(x, y, 'apple');
        }
        killApple() {
            //this.apple.destroy();
            this.apple.kill();
        }
    }
}