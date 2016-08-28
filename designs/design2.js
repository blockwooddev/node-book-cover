var Rune = require('rune.js');

var Design2 = {
     calculatePolygonX: function(index, spacing, radius) {
         return Math.cos(Rune.radians((index * spacing)-45)) * radius;
     },
     calculatePolygonY: function(index, spacing, radius) {
         return Math.sin(Rune.radians((index * spacing)-45)) * radius;
     },
     
     drawRoughSquare: function (rune, originX, originY, sideLength) {
         var radius = Math.sqrt((sideLength*sideLength)/2); //Pythagoras
         var primaryPoints = 4;
         var secondaryPoints = 4;

         var shape = rune.polygon(originX, originY);
         var spacing = 360/primaryPoints;
         
         for(var j = 0; j < primaryPoints; j++) {
           var x1 = this.calculatePolygonX(j, spacing, radius);
           var y1 = this.calculatePolygonY(j, spacing, radius);
           
           shape.lineTo(x1, y1);
           
           for (var i = 1; i < secondaryPoints; i++) { //skip first and last points
               var x2 = this.calculatePolygonX((j+1), spacing, radius);
               var y2 = this.calculatePolygonY((j+1), spacing, radius);
               
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
     },
     draw: function(rune) {
         var sideLength = 60;
         var x, y;
         for(var i = 0; i< 10; i++){
             x = i*(sideLength) + (sideLength/2);
             y = sideLength/2;
             
             this.drawRoughSquare(rune, x, y, sideLength);
         }
         
     }
     
}

module.exports = Design2;
