var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=7ac07fa8bd488a4db7d301645f5a6835';

module.exports = {
	getTemp: function(location) {
		var encondedLocation = encodeURIComponent(location);
		var requestURL = `${OPEN_WEATHER_MAP_URL}&q${encondedLocation}`;

		return axios.get(requestURL).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		}, function(res){
			throw new Error(res.data.message);
		});
	}
}
