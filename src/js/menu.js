(function() {
  'use strict';

  function Menu() {
    this.titleTxt = null;
    this.startTxt = null;
    this.cursors = null;
  }

  Menu.prototype = {

    create: function () {
      var x = this.game.width / 2
        , y = this.game.height / 2;


     var  text = this.add.text(this.world.centerX, this.world.centerY, "- ATOM - \n press up cursor key \n to avoid the objects");
     //var subtext = "- phaser -\n with a sprinkle of \n pixi dust.";
      //var style = { font: "65px Arial", fill: "#ff0044", align: "center" };

    //var t = game.add.subtext(game.world.centerX-300, 0, text, style);

      this.cursors = this.input.keyboard.createCursorKeys();
    //  Centers the text
    text.anchor.set(0.5);
    text.align = 'center';

    //  Our font + size
    text.font = 'Arial';
    text.fontWeight = 'bold';
    text.fontSize = 40;

    
    //  Here we create a linear gradient on the Text context.
    //  This uses the exact same method of creating a gradient as you do on a normal Canvas context.
    var grd = text.context.createLinearGradient(0, 0, 0, text.canvas.height);

    //  Add in 2 color stops
    grd.addColorStop(0, '#8ED6FF');   
    grd.addColorStop(1, '#004CB3');

    //  And apply to the Text
    text.fill = grd;
      
      this.input.onDown.add(this.onDown, this);
    },

    update: function () {

    },
    onDown: function () {
      this.game.state.start('game');
    }
  };

  window['atom'] = window['atom'] || {};
  window['atom'].Menu = Menu;

}());
