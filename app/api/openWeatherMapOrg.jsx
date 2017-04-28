var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=2b23be55c3223237cfd4797d97fb9b71&units=metric';

// 2b23be55c3223237cfd4797d97fb9b71

module.exports = {
  getTemp: function (location) {
    var encodeUri = encodeURIComponent(location);
    var URL = `${OPEN_WEATHER_MAP_URL}&q=${encodeUri}`;

    return axios.get(URL).then(function(res){
      // debugger;
      if(res.data.cod&&res.data.message){
        throw new Error(res.data.message);
      }
      else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
};
