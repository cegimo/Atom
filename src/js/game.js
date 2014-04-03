(function() {
  'use strict';

  function Game() {
    this.nucleus = null;
    this.circumference = null;
  }
  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

        this.physics.startSystem(Phaser.Physics.P2JS);


      this.nucleus = this.add.sprite(x, y, 'nucleus');
      this.circumference = this.add.sprite(x - 200, y - 200, 'circumference');
      this.physics.p2.enable([this.nucleus]);


      this.input.onDown.add(this.onInputDown, this);
    },

    update: function () {
      this.nucleus.body.rotateLeft(50);
      
    },

    onInputDown: function () {
      this.game.state.start('menu');
    }

  };

  window['atom'] = window['atom'] || {};
  window['atom'].Game = Game;

}());
