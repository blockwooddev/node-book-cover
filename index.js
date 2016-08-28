let fs = require('fs');
var Rune = require('rune.js');
var VNode = require('virtual-dom/vnode/vnode');
var toHTML = require('vdom-to-html');
const pnfs = require("pn/fs"); // https://www.npmjs.com/package/pn
const svg2png = require("svg2png");
var Design1 = require('./designs/design1');

var r = new Rune({
    width: 640, 
    height: 480
});

Design1.draw(r);

fs.writeFileSync('out/out.svg', toHTML(r.tree), 'utf8');
pnfs.readFile("out/out.svg")
.then(svg2png)
.then(buffer => fs.writeFile("out/dest.png", buffer))
.catch(e => console.error(e));
