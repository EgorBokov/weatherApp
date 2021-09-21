"use strict";
let input_city = "Moscow";

async function getFetch() {

   let resp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${input_city}&appid=d4d98e6d901ad75e969bd7aca1cdbef8`);
   let data = await resp.json();
   console.log(data.coord.lon);


}

// getFetch().catch( e => alert(e.message));

// getFetch();
let date = new Date();
let today_date = date.getDay();

console.log(today_date);

let days = document.getElementsByClassName('icon_day');
console.log(days[0].innerHTML);

if (today_date == 0) {
   days[0].innerHTML = 'Sun';
   days[1].innerHTML = 'Mon';
   days[2].innerHTML = 'Tue';
   days[3].innerHTML = 'Wen';
   days[4].innerHTML = 'Thu';
   days[5].innerHTML = 'Fri';
   days[6].innerHTML = 'Sat';
} else if (today_date == 1) {
   days[0].innerHTML = 'Mon';
   days[1].innerHTML = 'Tue'; 
   days[2].innerHTML = 'Wen';
   days[3].innerHTML = 'Thu';
   days[4].innerHTML = 'Fri';
   days[5].innerHTML = 'Sat';
   days[6].innerHTML = 'Sun';
} else if (today_date == 2) {
   days[0].innerHTML = 'Tue'; 
   days[1].innerHTML = 'Wen';
   days[2].innerHTML = 'Thu';
   days[3].innerHTML = 'Fri';
   days[4].innerHTML = 'Sat';
   days[5].innerHTML = 'Sun'; 
   days[6].innerHTML = 'Mon';
} else if (today_date == 3) {
   days[0].innerHTML = 'Wen';
   days[1].innerHTML = 'Thu';
   days[2].innerHTML = 'Fri';
   days[3].innerHTML = 'Sat';
   days[4].innerHTML = 'Sun'; 
   days[5].innerHTML = 'Mon'; 
   days[6].innerHTML = 'Tue';
} else if (today_date == 4) {
   days[0].innerHTML = 'Thu';
   days[1].innerHTML = 'Fri';
   days[2].innerHTML = 'Sat';
   days[3].innerHTML = 'Sun'; 
   days[4].innerHTML = 'Mon'; 
   days[5].innerHTML = 'Tue';
   days[6].innerHTML = 'Wen';
} else if (today_date == 5) {
   days[0].innerHTML = 'Fri';
   days[1].innerHTML = 'Sat';
   days[2].innerHTML = 'Sun'; 
   days[3].innerHTML = 'Mon'; 
   days[4].innerHTML = 'Tue';
   days[5].innerHTML = 'Wen';
   days[6].innerHTML = 'Thu';
} else {
   days[0].innerHTML = 'Sat';
   days[1].innerHTML = 'Sun'; 
   days[2].innerHTML = 'Mon'; 
   days[3].innerHTML = 'Tue';
   days[4].innerHTML = 'Wen';
   days[5].innerHTML = 'Thu';
   days[6].innerHTML = 'Fri';
}


let weekDaysArr = [
   'Sunday',
   'Monday',
   'Tuesday',
   'Wednesday',
   'Tuesday',
   'Friday',
   'Saturday',
];

let shortWeekDay = document.querySelector('.week_day');
let currentDate = document.querySelector('.today_date');

document.getElementById('day_of_week').textContent = weekDaysArr[today_date];

for ( let i = 0; i < weekDaysArr.length; i++) {
   if ( i == today_date ) shortWeekDay.textContent = weekDaysArr[i].slice(0,3);
}

currentDate.innerHTML = `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;

function lolz() {
   alert('Приветик')
}
document.getElementById('button').addEventListener('click',lolz);
document.getElementById('button').onselectstart = new Function ("return false");

// current.feels_like
// data.current.pressure 
// data.current.humidity