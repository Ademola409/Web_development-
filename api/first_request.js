const request = require('request');
request('http://api.openweathermap.org/data/2.5/weather?q=London&appid=0764329e4bc309557b3eb5c174cedd5b', function (error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode); 
  var parseddata=JSON.parse(body)
  console.log(parseddata); 
})

