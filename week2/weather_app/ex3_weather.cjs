const {Navigator} = require("node-navigator");
const navigator = new Navigator();

// export const ApiGet = async (endpoint, setState) => {
//     try {
//         const data = await fetch( api + endpoint)
//         const json = await data.json()
//         console.log(json)
//         setState(json)
//     }
//     catch (error) {
//         console.error(error)
//     }
// }

async function getLocation(callback) {
    await navigator.geolocation.getCurrentPosition(function (position) {
        callback(position);
    });
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

async function getWeather(coords, callback) {
    const apiKey = "a697710286cb6916321bd38b4ff987df";
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + coords.latitude + '&lon=' + coords.longitude + '&apiKey=' + apiKey
    const req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = await function () {
        if (req.status == 200) {
            callback(JSON.parse(req.responseText));
        } else {
            callback(new Error(req.statusText));
        }
    };
    req.send();
}

getLocation(function (coords) {
    getWeather(coords, function (weather) {
        console.log(weather);
    });
});

// document.getElementById('weather').innerHTML = weather.main.temp;


