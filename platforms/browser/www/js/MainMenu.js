
BasicGame.MainMenu = function (game) {

	this.playButton = null;
	this.titlepage = null;

};

BasicGame.MainMenu.prototype = {

	create: function () {

		//	We've already preloaded our assets, so let's kick right into the Main Menu itself.
		//	Here all we're doing is playing some music and adding a picture and button
		//	Naturally I expect you to do something significantly better :)

		this.titlepage = this.add.sprite(0, 0, 'titlepage');

		this.titlepage.width = this.game.world.width;
		this.titlepage.height = this.game.world.height;
		this.playButton = this.add.button(100, this.game.world.height-100, 'playButton', this.levelsPage, this, 'buttonOver', 'buttonOut', 'buttonOver');

	},

	update: function () {

		//	Do some nice funky main menu effect here

	},

	levelsPage: function (pointer) {


		//	And start the actual game
		//this.state.start('Game');

		//	Go to Levels Page
		this.state.start('Levels');

	}

};
