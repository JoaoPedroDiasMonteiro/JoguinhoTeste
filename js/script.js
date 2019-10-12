var config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {
				y: 300
			},
			debug: false
		}
	},
	scene: {
		preload: preload,
		create: create,
		update: update
	}
};

var player
var platforms;
var game = new Phaser.Game(config);

function preload() {
	this.load.image('sky', 'img/sky.png');
	this.load.image('ground', 'img/platform.png');
	this.load.image('star', 'img/star.png');
	this.load.image('bomb', 'img/bomb.png');
	this.load.spritesheet('dude',
		'img/dude.png', {
			frameWidth: 32,
			frameHeight: 48
		}
	);
}

function create() {
	// céu
	this.add.image(400, 300, 'sky');

	// plataformas grupo
	platforms = this.physics.add.staticGroup();
	// chão
	platforms.create(400, 568, 'ground').setScale(2).refreshBody();
	// plataformas
	platforms.create(600, 400, 'ground');
	platforms.create(50, 250, 'ground');
	platforms.create(750, 220, 'ground');

	// player
	player = this.physics.add.sprite(100, 450, 'dude');

}

function update() {}