let fs = require('fs');
var Rune = require('rune.js');
var VNode = require('virtual-dom/vnode/vnode');
var toHTML = require('vdom-to-html');

var r = new Rune({
    width: 640, 
    height: 480
});

var radius = 100;
var points = 4;


var shape = r.polygon(r.width/2, 125);
var spacing = 360/points;

for(var j = 0; j < points; j++) {
  var x = Math.cos(Rune.radians(j * spacing)+6) * radius;
  var y = Math.sin(Rune.radians(j * spacing)+6) * radius;
  shape.lineTo(x, y);
}

r.draw();

fs.writeFileSync('out/out.svg', toHTML(r.tree), 'utf8');

