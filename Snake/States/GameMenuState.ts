module GameFromScrach {
    export class GameMenuState extends Phaser.State {

        TEXT_POS_X: number = 135;
        BUTTON_POS_X: number = 185;
        volumeSound: number = 1;
        game: Phaser.Game;
        music: Phaser.Sound;
        menuScreenImage: Phaser.Sprite;
        text: Phaser.Text;

        constructor() {
            super();
        }

        create() {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.menuScreenImage = this.add.sprite(0, 0, 'menu');
            this.menuScreenImage.scale.setTo(this.game.width / this.menuScreenImage.width,
                this.game.height / this.menuScreenImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - this.BUTTON_POS_X), (this.game.canvas.height / 2), 'button-start', this.startGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "Snake Game", style);
            this.music = this.game.sound.add('game-menu', this.volumeSound, false);
            this.music.play();
        }

        startGame() {
            this.game.state.start('GamePlayState');
            //this.music.stop();
        }
    }
}