const apikey = "119df7c3d308716f326eb16d2e6f3ff1";
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

        const searchbox = document.querySelector(".search input");
        const searchbtn = document.querySelector(".search button");
        const WeatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiurl + city + `&appid=${apikey}` );
            // var data = await response.json();
            
            console.log(data)

            if(response.status == 404){
                document.querySelector(".error").style.display = "block";
                document.querySelector(".weather").style.display = "none";
            }
            else{
                var data = await response.json();

                document.querySelector(".city-name").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C" ;
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

            if(data.weather[0].main == "Clouds"){
            WeatherIcon.src = "images/clouds.png";
            }
            else if(data.weather[0].main == "Clear"){
            WeatherIcon.src = "images/Clear.png";
            }
            else if(data.weather[0].main == "Rain"){
            WeatherIcon.src = "images/Rain.png";
            }
            else if(data.weather[0].main == "Drizzle"){
            WeatherIcon.src = "images/drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
            WeatherIcon.src = "images/mist.png";
            }

            document.querySelector(".weather").style.display= "block"
            document.querySelector(".error").style.display= "none"

        }

            }


            

        searchbtn.addEventListener("click", ()=>{

            checkWeather(searchbox.value);
        });
s