const request = require("request");

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=0526e2e878f4493ebde210106260909&q=${latitude},${longitude}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback("Unable to connect to weather service!", undefined);
        } else if (response.body.error) {
            callback(response.body.error.message, undefined);
        } else {
            // عرض اسم الدولة والمدينة وحالة الطقس بوضوح
            const countryName = response.body.location.country;
            const cityName = response.body.location.name;
            const condition = response.body.current.condition.text;
            const temp = response.body.current.temp_c;

            const data = `Country: ${countryName} (${cityName}) | Weather: ${condition} | Temperature: ${temp}°C`;
            callback(undefined, data);
        }
    });
};

module.exports = forecast;