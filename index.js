
function getValue(){
  document.body.querySelector(".mainContent").style.display="block"
  const apiKey = "6748841ce56142949c985227252107";
  const city = document.body.querySelector("#searchCity").value
  const Currenturl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  async function currentTemp (){
      let getTemperature=await fetch(Currenturl);
      let data=await getTemperature.json()
      console.log(data);
      let location=document.body.querySelector(".currentLocate")
      location.innerHTML = ""; // Clear previous
      location.insertAdjacentHTML("afterbegin",`<h1> ${data.location.name} , ${data.location.region}</h1>`)
      let currentTemp = document.body.querySelector(".current-temperature")
      currentTemp.innerHTML = "";
      currentTemp.innerHTML=` <h2 class="location">${data.location.name}, ${data.location.region}</h2>
          <div class="temp">
            <p ><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
            <p ><strong>Condition:</strong> ${data.current.condition.text}</p>
            <p ><strong>Humidity:</strong> ${data.current.humidity}%</p>
            <img src="https:${data.current.condition.icon}" alt="Weather Icon" class="weatherIMG"  />
          </div>`
  
  }
  
  const forecastURL = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`;
  async function forecast(){
      let getForecast=await fetch(forecastURL);
      let forecastData=await getForecast.json()
      console.log(forecastData.forecast.forecastday[0])
      let forecastTag =document.body.querySelector(".overall")
      forecastTag.innerHTML = "";
      forecastTag.insertAdjacentHTML("afterbegin",`<p class="todayStat" id="TodayDate" >Date: ${forecastData.forecast.forecastday[0].date}</p>
                                              <p class="todayStat"> Max Temperature: ${forecastData.forecast.forecastday[0].day.maxtemp_c}</p>
                                              <p class="todayStat"> Min Temperature: ${forecastData.forecast.forecastday[0].day.mintemp_c}</p>
                                              <p class="todayStat"> Avg Temperature: ${forecastData.forecast.forecastday[0].day.avgtemp_c}</p>
                                              `)
      let forecastTime =document.body.querySelector(".time")
      forecastTime.innerHTML = ""; // Clear old
      forecastTime.insertAdjacentHTML("beforeend",`<p class="forecastHeading">Time</p>`)
      for(let i=0;i<=23;i++){
        forecastTime.insertAdjacentHTML("beforeend",`<p>${forecastData.forecast.forecastday[0].hour[i].time.slice(11)}</p>`)
      }
  
      let forecastColon =document.body.querySelector(".colon")
      forecastColon.innerHTML = ""; // Clear old
      for(let i=0;i<=24;i++){
        forecastColon.insertAdjacentHTML("beforeend",`<p>:</p>`)
      }
  
      let forecastTempC =document.body.querySelector(".tempC")
      forecastTempC.innerHTML = ""; // Clear old
      forecastTempC.insertAdjacentHTML("beforeend",`<p class="forecastHeading">Temperature</p>`)
      for(let i=0;i<=23;i++){
        forecastTempC.insertAdjacentHTML("beforeend",`<p>${forecastData.forecast.forecastday[0].hour[i].temp_c}°C</p>`)
      }
  
  
  }
  
  currentTemp() 
  forecast()
}