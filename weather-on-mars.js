const app = document.getElementById('weather-data');

        const container = document.createElement('div');
        container.setAttribute('class', 'weather-grid');

        app.appendChild(container);

        var request = new XMLHttpRequest();

        request.open('GET', 'https://api.maas2.jiinxt.com/', true);
        request.onload = function() {

            var data = JSON.parse(this.response);

            if (request.status >= 200 && request.status < 400) {

                console.log(data.sol + " Sol");
                console.log(data.season + " Season");
                console.log(data.min_temp + " Min Temp");
                console.log(data.max_temp + " Max Temp");
                console.log(data.atmo_opacity + " Atmospheric Opacity");
                console.log(data.sunset + " Sunset");
                console.log(data.sunrise + " Sunrise");
                console.log(data.min_gts_temp + " Min GTS Temp");
                console.log(data.max_gts_temp + " Max GTS Temp");

                var dataArray = ["Sunrise: " + data.sunrise, "Min Temp: " + data.min_temp + " °C", "Min Ground Temp: " + data.min_gts_temp + " °C","Season: " + data.season,  "Sunset: " + data.sunset,"Max Temp: " + data.max_temp + " °C",     "Max Ground Temp: " + data.max_gts_temp + " °C", "Atmospheric Opacity: " + data.atmo_opacity];
              
                var arrayLength = dataArray.length;
                for (var i = 0; i < arrayLength; i++) {
                    const div = document.createElement('div');
                    div.setAttribute('class', 'weather-data-element');
                    div.textContent = dataArray[i];
                    
                    container.appendChild(div);
                    
                    //Do something
                }

            } else {
                console.log("There was an error.")
                app.appendChild(errorMessage);
            }
        }

        request.send();