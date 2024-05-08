const apiKey = "c3afa08c1c2fa3c57e1ed75e0195aad3";

function getLocationSucc(data) {
    const lat = data.coords.latitude;
    const lon = data.coords.longitude;

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    
    fetch(weatherUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            const city = data.name;
            const weatherRes = data.weather[0].main;
            document.querySelector("#weather").innerText = `City: ${city}, Weather: ${weatherRes}`;
        });
}

function getLocationErr() {
    alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(getLocationSucc, getLocationErr);
