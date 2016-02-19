// Create a file colorutil.js 
// Add luminosity function from part I as a method on the module.exports object

var luminosity = function (r, g, b) {
	var luminosity = 0.2126*r + 0.7152*g + 0.0722*b;
	console.log(luminosity)

	//Write a separate program that takes a color and returns 'light' if the luminosity is greater than 155 and 'dark' otherwise. 
	 if (luminosity > 155) {
	 	console.log('light')
	 }
	 else console.log('dark')
	
}

module.exports = {
	luminosity : luminosity
	darken : darken
}



// Add a darken function to your luminosity module wich returns the given color in r,g,b, but with each value decreased by 20% in
// in order to return a darker overall color. 

var darkenColor = function(color) {
	return color - (color * 0.2);
};

var darken = function (r, g, b) {
	r: darkenColorComponent(r),
	g: darkenColorComponent(g),
	b: darkenColorComponent(b)
	};
}