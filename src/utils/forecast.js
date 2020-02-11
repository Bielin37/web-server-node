const request = require('request');

const forecast = (latitude, longtitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6631718a4504813461983d98e11e1a0b/' + latitude + ',' + longtitude;

    request({ url, json: true}, (error, { body }) => {
        if(error){
            callback('Unable to connect to weather service', undefined);
        } else if(body.error){
            callback('Unable to find location', undefined);
        } else{
            callback(undefined, {
                currently: body.daily.data[0].summary,
                temperature_out: body.currently.temperature,
                chanceOfRain: body.currently.precipProbability + '%'
            })
        }
    })
}

module.exports = forecast;