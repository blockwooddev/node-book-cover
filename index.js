let fs = require('fs');
var Rune = require('rune.js');
var VNode = require('virtual-dom/vnode/vnode');
var toHTML = require('vdom-to-html');
const svg2png = require("svg2png");
var Design1 = require('./designs/design1');

var r = new Rune({
    width: 640, 
    height: 480
});

Design1.draw(r);

var convertedSVG = toHTML(r.tree);

svg2png(new Buffer(convertedSVG), {width: 640, height: 480})
.then(buffer => fs.writeFile("out/dest.png", buffer))
.catch(e => console.error(e));
