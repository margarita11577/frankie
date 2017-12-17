
BasicGame.Levels = function (game) {

    this.playButton = null;
    this.titlepage = null;
};

BasicGame.Game.prototype = {

    create: function () {

        this.titlepage = this.add.sprite(0, 0, 'titlepage');

        this.titlepage.width = this.game.world.width;
        this.titlepage.height = this.game.world.height;
        this.playButton = this.add.button(100, this.game.world.height-100, 'playButton', this.startGame, this, 'buttonOver', 'buttonOut', 'buttonOver');
    },

    update: function () {

        //  Honestly, just about anything could go here. It's YOUR game after all. Eat your heart out!

    },

    quitGame: function (pointer) {

        //  Here you should destroy anything you no longer need.
        //  Stop music, delete sprites, purge caches, free resources, all that good stuff.

        //  Then let's go back to the main menu.
        this.state.start('MainMenu');

    }

    startGame: function (pointer) {


        //  And start the actual game
        //this.state.start('Game');

        //  Go to Levels Page
        this.state.start('Levels');

    }

};
