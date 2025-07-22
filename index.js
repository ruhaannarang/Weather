const apiKey = "6748841ce56142949c985227252107";
const city = "Jammu";
const Currenturl = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

async function currentTemp (){
    let getTemperature=await fetch(Currenturl);
    let data=await getTemperature.json()
    console.log(data);
    let location=document.body.querySelector(".nav")
    location.insertAdjacentHTML("afterbegin",`<h1> ${data.location.name} , ${data.location.region}</h1>`)
    let currentTemp = document.body.querySelector(".current-temperature")
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
    let forecastTag =document.body.querySelector(".forecast")
    forecastTag.insertAdjacentHTML("afterbegin",`<p>Date: ${forecastData.forecast.forecastday[0].date}</p>
                                            <p> Max Temperature: ${forecastData.forecast.forecastday[0].day.maxtemp_c}</p>
                                            <p> Min Temperature: ${forecastData.forecast.forecastday[0].day.mintemp_c}</p>
                                            <p> Avg Temperature: ${forecastData.forecast.forecastday[0].day.avgtemp_c}</p>
                                            `)
    let forecastTime =document.body.querySelector(".time")
    for(let i=0;i<=23;i++){
      forecastTime.insertAdjacentHTML("beforeend",`<p>${forecastData.forecast.forecastday[0].hour[i].time.slice(11)}</p>`)
    }

    let forecastColon =document.body.querySelector(".colon")
    for(let i=0;i<=23;i++){
      forecastColon.insertAdjacentHTML("beforeend",`<p>:</p>`)
    }

    let forecastTempC =document.body.querySelector(".tempC")
    for(let i=0;i<=23;i++){
      forecastTempC.insertAdjacentHTML("beforeend",`<p>${forecastData.forecast.forecastday[0].hour[i].temp_c}°C</p>`)
    }


}

currentTemp() 
forecast()