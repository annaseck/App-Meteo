const apiKey = '4b6c8dd1900551fa9822c8939c892d3d'; 
const getWeatherButton = document.getElementById('get-weather');

getWeatherButton.addEventListener('click', () => {
    const city = document.getElementById('city-input').value;
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ville non trouvée');
                }
                return response.json();
            })
            .then(data => {
                const temp = data.main.temp;
                const description = data.weather[0].description;
                const location = data.name;

                const weatherResult = document.getElementById('weather-result');
                weatherResult.innerHTML = `<h2>Météo à ${location}</h2>
                                            <p>Température: ${temp}°C</p>
                                            <p>Description: ${description}</p>`;
            })
            .catch(error => {
                console.error('Erreur:', error);
                document.getElementById('weather-result').innerHTML = '<p>Erreur lors de la récupération des données.</p>';
            });
    } else {
        alert('Veuillez entrer une ville.');
    }
});
