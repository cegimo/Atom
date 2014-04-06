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

      this.enemy3 = this.add.sprite(x , y , 'enemy3');
      this.physics.enable(this.enemy3, Phaser.Physics.ARCADE);

      this.enemy1 = this.add.sprite(x , y, 'enemy1');
      this.physics.enable(this.enemy1, Phaser.Physics.ARCADE);

      this.enemy2 = this.add.sprite(x-10 , y +10, 'enemy2');
      this.physics.enable(this.enemy2, Phaser.Physics.ARCADE);

      this.player = this.add.sprite(x, y -245, 'player');
      this.physics.enable(this.player, Phaser.Physics.ARCADE);

      //this.nucleus.body.immovable = true;
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



      this.physics.arcade.collide(this.player, this.circumference, function(obj1, obj2)
    {
      

    }, null, this);
    /*  this.physics.arcade.collide(this.electron, this.player, function(obj1, obj2)
    {
      this.stage.backgroundColor = '#992d2d';
      alert("hola");

    }, null, this);*/
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
