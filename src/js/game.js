(function() {
  'use strict';

  function Game() {
    this.nucleus = null;
    this.circumference = null;
    this.player = null;
    this.cursors = null;
    this.enemy1 = null;
    this.enemy2 = null;
    this.enemy3 = null;
    this.jump = null;
    this.x = null;
    this.y = null;
    this.rotationEnemy1 = null;
    this.rotationEnemy2 = null;
    this.rotationEnemy3 = null;
    this.timeGame = 0;
    this.scoreTime = 0;
    this.score = 0;
    this.scoreString = null;
  }

  Game.prototype = {

    create: function () {
      this.timeGame = this.game.time.now;
      this.scoreTime = this.game.time.now;

      this.scoreString = 'Time : ';
      this.scoreText = this.add.text(10, 10, this.scoreString + this.score, { font: '34px Arial', fill: '#fff' });

      this.x = this.game.width / 2;
      this.y = this.game.height / 2;
      this.jump = false;
      this.cursors = this.input.keyboard.createCursorKeys();
      this.nucleus = this.add.sprite(this.x - 50, this.y - 50, 'nucleus');
      this.circumference = this.add.sprite(this.x - 200, this.y - 200, 'circumference');

      this.enemy1 = this.add.sprite(this.x , this.y, 'enemy1');
      this.enemy2 = this.add.sprite(this.x , this.y , 'enemy2');
      this.enemy3 = this.add.sprite(this.x , this.y , 'enemy3');

      this.player = this.add.sprite(0,0, 'player');

      this.game.physics.startSystem(Phaser.Physics.P2JS);
      this.game.physics.p2.enable([
        this.circumference,
        this.enemy1,
        this.enemy2,
        this.enemy3,
        this.player
        ]);

      //  this.circumference.body.immovable = true;
      this.circumference.body.debug = true;
      this.circumference.body.setCircle(200);
     // this.circumference.body.static = true;

     /* this.enemy3.pivot.x = 170;
      this.enemy3.pivot.y = 170;

      this.enemy1.pivot.x = 170;
      this.enemy1.pivot.y = 170;

      this.enemy2.pivot.x = 170;
      this.enemy2.pivot.y = 170;
      this.enemy2.rotation =2;

      this.rotationEnemy1 = 0.02;
      this.rotationEnemy2 = 0.03;
      this.rotationEnemy3 = 0.01;*/
    },

    update: function () {

      this.enemy1.rotation -=this.rotationEnemy1;
      this.enemy2.rotation +=this.rotationEnemy2;
      this.enemy3.rotation += this.rotationEnemy3;

/*
      this.physics.arcade.collide(this.circumference, this.player, function(obj1, obj2)
      {
        this.jump = true;
      }, null, this);

      if (this.jump === true)
      {
        if (this.cursors.up.isDown)
        {
          this.player.body.velocity.y = -350;
          this.jump = false;
        }
      }
      else
      {
        this.player.body.velocity.y += 10;
      }
      this.collide(this.player, this.enemy1);
      this.collide(this.player, this.enemy2);
      this.collide(this.player, this.enemy3);

      if(this.timeGame + 4000 < this.game.time.now) 
      {
        this.rotationEnemy1 += 0.003;
        this.rotationEnemy2 += 0.004;
        this.rotationEnemy3 += 0.005;
        this.timeGame = this.game.time.now;
      } 
      this.score = -((this.scoreTime - this.game.time.now) /1000);
      this.scoreText.text = this.scoreString + this.score;
      */
    },

  collide: function (player, enemy) {
    if ((enemy.rotation >= 0.58) && (enemy.rotation <= 0.68) && (player.body.y > 140))
    {
      this.game.state.start('menu');
    }
    if ((enemy.rotation >= 0.69) && (enemy.rotation <= 0.78) && (player.body.y > 130))
    {
      this.game.state.start('menu');    
    }
    if ((enemy.rotation >= 0.79) && (enemy.rotation <= 0.95) && (player.body.y > 140))
    {
      this.game.state.start('menu');
    }
  },

  render: function() {
    this.game.debug.body(this.circumference);
  }
};

  window['atom'] = window['atom'] || {};
  window['atom'].Game = Game;

}());