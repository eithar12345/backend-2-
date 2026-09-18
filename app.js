const geocode = require('./geocode');
const forecast = require('./forecast');

const country = process.argv[2];

if (!country) {
    console.log("Please enter a country name.");
} else {
    geocode(country, (error, data) => {
        if (error) {
            return console.log("ERROR:", error);
        }
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log("Error:", error);
            }
            
            console.log("DATA:", forecastData);
        });
    });
}