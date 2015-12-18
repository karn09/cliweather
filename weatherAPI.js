var https = require('https');
var http = require('http');


var OPENWM_API_KEY = '2de143494c0b295cca9337e1e96b00e0';
var OPENWM_OPTS = '&type=accurate&units=imperial'
var OPENWM_URL = 'http://api.openweathermap.org/data/2.5/find?q=';

var weather = '';
function getForecast (zipcode) {
	var request = http.get(OPENWM_URL + zipcode + OPENWM_OPTS +'&appid=' + OPENWM_API_KEY, function (response) {
		//console.log(GEOCODE_URL + zipcode + '&key=' + GOOGLE_GEOCODE_API_KEY)
		var body = [];
		response.on('data', function (chunk) {
			body.push(chunk);
		})
		response.on('end', function () {
			if (response.statusCode === 200) {
				try {
					weather = body.join('')
					weather = JSON.parse(weather)
					var city = weather.list[0].name
					var currentTemp = weather.list[0].main.temp;
					var maxTemp = weather.list[0].main.temp_max;
					var minTemp = weather.list[0].main.temp_min;
					console.log('It is currently ' + currentTemp + 'F' + ' in ' + city + '. The max/min is ' + maxTemp + '/' + minTemp + 'F');
					//var geoCode = JSON.parse(body);
					//console.log( geoCode.results[0].geometry.location);
					//console.log(geoCode.results[0].geometry.location);
					// return ;

				} catch (error) {
					console.error(error.message);
				}
			}
		})
	})
}

module.exports.forecast = getForecast;