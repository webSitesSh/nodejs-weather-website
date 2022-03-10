const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=135419e8164925125d2b68f42c81cd54&query=' + latitude + ',' + longitude +'&units=m';
    request({url, json: true}, (error, {body}) => {
        if (error){
            callback('Unable to connect to weather service!');
        }else if(body.error){
            callback('Unable to find location');
        }else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " degress out. It feels like " + body.current.feelslike + " degress out. the humidity is " + body.current.humidity + "%.");
        }
    })
}

module.exports = forecast