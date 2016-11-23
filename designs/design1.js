var Rune = require('rune.js');

var Design1 = {
     draw: function (rune) {
         var radius = 100;
         var primaryPoints = 4;
         var secondaryPoints = 4;

         var shape = rune.polygon(rune.width/2, rune.height/2);
//       360/4: 90
         var spacing = 360/primaryPoints;
         
         
         for(var j = 0; j < primaryPoints; j++) {
           var x1 = Math.cos(Rune.radians((j * spacing)-45)) * radius;
           var y1 = Math.sin(Rune.radians((j * spacing)-45)) * radius;
           
           shape.lineTo(x1, y1);
           
           for (var i = 1; i < secondaryPoints; i++) { //skip first and last points
               var x2 = Math.cos(Rune.radians(((j + 1) * spacing)-45)) * radius;
               var y2 = Math.sin(Rune.radians(((j + 1) * spacing)-45)) * radius;
               
               var xDist = Math.round(x2 - x1); //to fix a 1*10^-10 bug
               var yDist = Math.round(y2 - y1);
               
               if(xDist == 0) {
                   xDist = Rune.random(-2,2);
                   yDist = (yDist/secondaryPoints) * i;
               } else if (yDist == 0) {
                   xDist = (xDist/secondaryPoints) * i;
                   yDist = Rune.random(-2,2);
               } else {
                   console.log("Error: xDist and yDist both not 0!");
               }
               var xPos = x1 + xDist;
               var yPos = y1 + yDist;
               
               
               shape.lineTo(xPos, yPos);
           }
         }

         rune.draw();
     }  
}

module.exports = Design1;
