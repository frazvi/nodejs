var colorutil = require('./colorUtil.js')

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

colorutil.luminosity(r, g, b)

var darkened = colorutil.darken(r, g, b);

console.log(darkened.r, darkened.g, darkened.b);

