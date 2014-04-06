(function() {
  'use strict';

  function Game() {
    this.nucleus = null;
    this.circumference = null;
    this.player = null;
    this.constraint = null;
    this.upKey = null;
    this.downKey = null;
    this.leftKey = null;
    this.rightKey = null;
    this.cursors = null;
    this.enemy1 = null;
    this.enemy2 = null;
    this.enemy3 = null;
    this.jump = null;
    this.x = null;
    this.y = null;
  }
  Game.prototype = {


    create: function () {
      this.x = this.game.width / 2;
      this.y = this.game.height / 2;
    this.jump = false;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.cursors = this.input.keyboard.createCursorKeys();
      this.nucleus = this.add.sprite(this.x - 50, this.y - 50, 'nucleus');
      this.circumference = this.add.sprite(this.x - 200, this.y - 200, 'circumference');
      this.physics.enable(this.circumference, Phaser.Physics.ARCADE);


      this.enemy3 = this.add.sprite(this.x , this.y , 'enemy3');
      this.physics.enable(this.enemy3, Phaser.Physics.ARCADE);

      this.enemy1 = this.add.sprite(this.x , this.y, 'enemy1');
      this.physics.enable(this.enemy1, Phaser.Physics.ARCADE);

      this.enemy2 = this.add.sprite(this.x , this.y , 'enemy2');
      this.physics.enable(this.enemy2, Phaser.Physics.ARCADE);

      this.player = this.add.sprite(this.x, this.y -245, 'player');
      this.physics.enable(this.player, Phaser.Physics.ARCADE);

       this.circumference.body.immovable = true;

      this.enemy3.pivot.x = 180;
      this.enemy3.pivot.y = 180;

      this.enemy1.pivot.x = 180;
      this.enemy1.pivot.y = 180;

      this.enemy2.pivot.x = 180;
      this.enemy2.pivot.y = 180;
      //this.constraint = this.physics.p2.createRevoluteConstraint(this.electron, [ 25, 25 ], this.nucleus, [ 15, 15]);

    },

    update: function () {
      
      this.enemy1.rotation -=0.02;
      this.enemy2.rotation +=0.03;
      this.enemy3.rotation += 0.01;

      //this.player.rotate = this.physics.arcade.moveToObject(this.player, this.nucleus, 100);
      //this.player.rotate = game.physics.arcade.moveToPointer(sprite, 60, game.input.activePointer, 500);


      this.physics.arcade.collide(this.player, this.circumference, function(obj1, obj2)
    {
      this.jump = true;

    }, null, this);

     if (this.jump === true)
     {
        if (this.cursors.up.isDown)
        {
            this.player.body.velocity.y = -300;
            this.jump = false;
        }
    }
    else
    {
      this.player.body.velocity.y += 10;
    }

    },
  


  };

  window['atom'] = window['atom'] || {};
  window['atom'].Game = Game;

}());
