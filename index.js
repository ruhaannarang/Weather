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
    forecastTag.insertAdjacentHTML("beforeend",`<p>${forecastData.forecast.forecastday[0].date}</p>
                                            <p> Max Temperature: ${forecastData.forecast.forecastday[0].day.maxtemp_c}</p>
                                            <p> Min Temperature: ${forecastData.forecast.forecastday[0].day.mintemp_c}</p>
                                            <p> Avg Temperature: ${forecastData.forecast.forecastday[0].day.avgtemp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[0].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[0].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[1].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[1].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[2].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[2].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[3].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[3].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[4].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[4].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[5].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[5].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[6].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[6].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[7].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[7].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[8].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[8].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[9].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[9].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[10].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[10].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[11].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[11].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[12].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[12].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[13].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[13].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[14].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[14].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[15].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[15].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[16].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[16].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[17].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[17].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[18].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[18].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[19].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[19].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[20].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[20].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[21].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[21].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[22].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[22].temp_c}</p>
                                            <p> ${forecastData.forecast.forecastday[0].hour[23].time.slice(11)}: ${forecastData.forecast.forecastday[0].hour[23].temp_c}</p>
                                            `)


}

currentTemp() 
forecast()