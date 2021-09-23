"use strict";

let date = new Date();
let city_lat = "Moscow";
let city_new_lat = 55.75;
let city_new_lon = 37.61;

let weekDaysArr = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Thursday',
   'Friday',
   'Saturday',
];

button.addEventListener('click', () => { sendFetch(city_from_input.value) });

day_of_week.textContent = weekDaysArr[date.getDay()];
week_day.textContent = weekDaysArr[date.getDay()].slice(0, 3);
today_date.textContent = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

window.addEventListener('load', () => { sendFetch('Moscow') });

async function sendFetch(city) {
   let resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d4d98e6d901ad75e969bd7aca1cdbef8`);
   let data = await resp.json();

   console.log(data);

   city_new_lon = Math.trunc((data.coord.lon * 100)) / 100;
   city_new_lat = Math.trunc((data.coord.lat * 100)) / 100;

   city_name.innerHTML = city;
   main_deg_scale.textContent = `${Math.round(data.main.temp - 273)}°C`;
   sub_deg_scale.textContent = `Feels like ${Math.round(data.main.feels_like - 273)}°C`;
   humidity_deg.textContent = `${data.main.humidity}%`;
   pressure.textContent = `${data.main.pressure}hPa`;
   wind_speed.textContent = `${Math.round(data.wind.speed * 1.6)}km/h`;
   document.getElementById('main_img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
   document.getElementById('city_from_input').value = '';
   releaseRequest();
   // console.log(imgSrc);
}


async function releaseRequest(city_lon, city_lat) {

   let resp = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_new_lat}&lon=${city_new_lon}&exclude=hourly&lang=ru&appid=d4d98e6d901ad75e969bd7aca1cdbef8`);
   let data = await resp.json();

   // Monday 

   document.getElementById('mon').querySelector('.deg_span').textContent = `${Math.round(data.daily[0].temp.day - 273)}°C`;
   document.getElementById('mon').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[0].weather[0].icon}@2x.png`;
   document.getElementById('mon').querySelector('.sub_humidity').textContent = `${data.daily[0].humidity}%`;
   document.getElementById('mon').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[0].wind_speed * 1.6)}km/h`;

   // Tuesday

   document.getElementById('tue').querySelector('.deg_span').textContent = `${Math.round(data.daily[1].temp.day - 273)}°C`;
   document.getElementById('tue').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[1].weather[0].icon}@2x.png`;
   document.getElementById('tue').querySelector('.sub_humidity').textContent = `${data.daily[1].humidity}%`;
   document.getElementById('tue').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[1].wind_speed * 1.6)}km/h`;

   // Wednesday

   document.getElementById('wen').querySelector('.deg_span').textContent = `${Math.round(data.daily[2].temp.day - 273)}°C`;
   document.getElementById('wen').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[2].weather[0].icon}@2x.png`;
   document.getElementById('wen').querySelector('.sub_humidity').textContent = `${data.daily[2].humidity}%`;
   document.getElementById('wen').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[2].wind_speed * 1.6)}km/h`;

   // Thursday

   document.getElementById('thu').querySelector('.deg_span').textContent = `${Math.round(data.daily[3].temp.day - 273)}°C`;
   document.getElementById('thu').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[3].weather[0].icon}@2x.png`;
   document.getElementById('thu').querySelector('.sub_humidity').textContent = `${data.daily[3].humidity}%`;
   document.getElementById('thu').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[3].wind_speed * 1.6)}km/h`;

   // Friday

   document.getElementById('fri').querySelector('.deg_span').textContent = `${Math.round(data.daily[4].temp.day - 273)}°C`;
   document.getElementById('fri').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[4].weather[0].icon}@2x.png`;
   document.getElementById('fri').querySelector('.sub_humidity').textContent = `${data.daily[4].humidity}%`;
   document.getElementById('fri').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[4].wind_speed * 1.6)}km/h`;

   // Saturday

   document.getElementById('sat').querySelector('.deg_span').textContent = `${Math.round(data.daily[5].temp.day - 273)}°C`;
   document.getElementById('sat').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[5].weather[0].icon}@2x.png`;
   document.getElementById('sat').querySelector('.sub_humidity').textContent = `${data.daily[5].humidity}%`;
   document.getElementById('sat').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[5].wind_speed * 1.6)}km/h`;

   // Sunday

   document.getElementById('sun').querySelector('.deg_span').textContent = `${Math.round(data.daily[6].temp.day - 273)}°C`;
   document.getElementById('sun').querySelector('.sub_main_logo').src = `https://openweathermap.org/img/wn/${data.daily[6].weather[0].icon}@2x.png`;
   document.getElementById('sun').querySelector('.sub_humidity').textContent = `${data.daily[6].humidity}%`;
   document.getElementById('sun').querySelector('.sub_pressure').textContent = `${Math.round(data.daily[6].wind_speed * 1.6)}km/h`;

};