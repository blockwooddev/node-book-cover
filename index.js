let fs = require('fs');
var Rune = require('rune.js');
var VNode = require('virtual-dom/vnode/vnode');
var toHTML = require('vdom-to-html');
var Design1 = require('./designs/design1');

var r = new Rune({
    width: 640, 
    height: 480
});

Design1.draw(r);

fs.writeFileSync('out/out.svg', toHTML(r.tree), 'utf8');

