var geo = require('./weatherAPI.js');
var zone = process.argv.slice(0);
geo.forecast(zone[2])

