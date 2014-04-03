(function() {
  'use strict';

  function Game() {
    this.nucleus = null;
    this.circumference = null;
    this.electron = null;
    this.player = null;
    this.constraint = null;
  }
  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

        this.physics.startSystem(Phaser.Physics.P2JS);


      this.nucleus = this.add.sprite(x, y, 'nucleus');
      this.circumference = this.add.sprite(x - 200, y - 200, 'circumference');
      this.electron = this.add.sprite(x , y , 'square');
      this.player = this.add.sprite(x, y + 200, 'player');
      this.physics.p2.enable([this.nucleus]);
      //this.physics.p2.enable([this.electron]);
      this.electron.pivot.x = 180;
      this.electron.pivot.y = 180;
      //this.constraint = this.physics.p2.createRevoluteConstraint(this.electron, [ 25, 25 ], this.nucleus, [ 15, 15]);
    },

    update: function () {
      this.electron.rotation += 0.02;
     this.nucleus.body.rotateLeft(50);
     //this.electron.body.rotateRight(50);
      
    },


  };

  window['atom'] = window['atom'] || {};
  window['atom'].Game = Game;

}());
