(function() {
  'use strict';

  function Game() {
    this.nucleus = null;
    this.circumference = null;
    this.electron = null;
    this.player = null;
    this.constraint = null;
    this.upKey = null;
    this.downKey = null;
    this.leftKey = null;
    this.rightKey = null;
    this.cursors = null;
  }
  Game.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;

    
this.physics.startSystem(Phaser.Physics.ARCADE);
 this.cursors = this.input.keyboard.createCursorKeys();
      this.nucleus = this.add.sprite(x, y, 'nucleus');
      this.circumference = this.add.sprite(x - 200, y - 200, 'circumference');
      this.physics.enable(this.circumference, Phaser.Physics.ARCADE);
      //sprite.anchor.set(0.5);
      //this.circumference.smoothed = false;

      this.electron = this.add.sprite(x , y , 'square');
      this.physics.enable(this.electron, Phaser.Physics.ARCADE);

      this.player = this.add.sprite(x, y -245, 'player');
      this.physics.enable(this.player, Phaser.Physics.ARCADE);

      //this.nucleus.body.immovable = true;
       this.circumference.body.immovable = true;
      this.electron.pivot.x = 180;
      this.electron.pivot.y = 180;
      //this.constraint = this.physics.p2.createRevoluteConstraint(this.electron, [ 25, 25 ], this.nucleus, [ 15, 15]);

    },

    update: function () {
      this.electron.rotation += 0.02;
      this.physics.arcade.collide(this.player, this.circumference, function(obj1, obj2)
    {
      this.stage.backgroundColor = '#992d2d';

    }, null, this);
      this.physics.arcade.collide(this.electron, this.player, function(obj1, obj2)
    {
      this.stage.backgroundColor = '#992d2d';
      alert("hola");

    }, null, this);
     //this.nucleus.body.rotateLeft(50);9
       if (this.cursors.up.isDown)
    {
        this.player.body.velocity.y = -300;
    }
        else
    {
        this.player.body.velocity.setTo(0, 300);
    }


    },


  };

  window['atom'] = window['atom'] || {};
  window['atom'].Game = Game;

}());
