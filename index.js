let fs = require('fs');
var Rune = require('rune.js');
var VNode = require('virtual-dom/vnode/vnode');
var toHTML = require('vdom-to-html');
const pnfs = require("pn/fs"); // https://www.npmjs.com/package/pn
const svg2png = require("svg2png");


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
pnfs.readFile("out/out.svg")
.then(svg2png)
.then(buffer => fs.writeFile("out/dest.png", buffer))
.catch(e => console.error(e));
