module GameFromScrach {
    export class GameOverState extends Phaser.State {

        TEXT_POS_X: number = 135;
        BUTTON_POS_X: number = 185;
        volumeMusic: number = 0.5;
        game: Phaser.Game;
        music: Phaser.Sound;
        gameOverImage: Phaser.Sprite;
        text: Phaser.Text;

        constructor() {
            super();
        }

        create() {
            var style = { font: "bold 48px Arial", fill: "#000", boundsAlignH: "center", boundsAlignV: "middle" };
            this.gameOverImage = this.game.add.sprite(0, 0, 'game-over');
            this.gameOverImage.scale.setTo(this.game.width / this.gameOverImage.width,
                this.game.height / this.gameOverImage.height);
            this.game.add.button(((this.game.canvas.width / 2) - this.BUTTON_POS_X), (this.game.canvas.height / 2), 'button-start', this.newGame);
            this.text = this.game.add.text(((this.game.canvas.width / 2) - this.TEXT_POS_X), (this.game.canvas.height / 4), "GAME OVER", style);
            this.music = this.game.sound.add('game-over', this.volumeMusic, false);
            this.music.play();
        }
        newGame() {
            this.game.state.start('GamePlayState');
            //this.music.stop();
        }
    }
}