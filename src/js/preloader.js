(function() {
  'use strict';

  function Preloader() {
    this.asset = null;
    this.ready = false;
  }

  Preloader.prototype = {

    preload: function () {
      this.asset = this.add.sprite(320, 240, 'preloader');
      this.asset.anchor.setTo(0.5, 0.5);

      this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
      this.load.setPreloadSprite(this.asset);

      this.load.image('nucleus', 'assets/nucleus.png');
      this.load.image('circumference', 'assets/circumference.png');
      this.load.image('player', 'assets/player1.png');  
      this.load.image('enemy1', 'assets/enemy1.png'); // silver enemy
      this.load.image('enemy2', 'assets/enemy2.png'); // green enemy
      this.load.image('enemy3', 'assets/enemy3.png'); // red enemy
      this.load.bitmapFont('minecraftia', 'assets/minecraftia.png', 'assets/minecraftia.xml');
    },

    create: function () {
      this.asset.cropEnabled = false;
    },

    update: function () {
      if (!!this.ready) {
        this.game.state.start('menu');
      }
    },

    onLoadComplete: function () {
      this.ready = true;
    }
  };

  window['atom'] = window['atom'] || {};
  window['atom'].Preloader = Preloader;

}());
