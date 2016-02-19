var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
	if (error) {
		return console.log('Error: ', error);
	}
	if (response.statusCode !== 200) {
		return console.log('Invalid Status Code Returned: ', response.statusCode);
	}
	console.log(body); 
})
