const request = require("request");

const geocode = (address, callback) => {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`;

    const options = {
        url: url,
        json: true,
        headers: {
            'User-Agent': 'NodeWeatherApp'
        }
    };

    request(options, (error, response) => {
        if (error) {
            callback("Unable to connect to location services!", undefined);
        } else if (!response.body || response.body.length === 0) {
            callback("Unable to find location. Try another search.", undefined);
        } else {
            callback(undefined, {
                latitude: response.body[0].lat,
                longitude: response.body[0].lon
            });
        }
    });
};

module.exports = geocode;