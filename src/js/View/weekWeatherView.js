
import {months} from '../Models/elements';
import {element} from '../Models/elements';


export default function weekWeatherDisplay(data){

let weekView = ``;

   for(let i = 0; i < data.length;i++){

    const day = data[i].dt_txt.substring(8, 10)
    const month = Number(data[i].dt_txt.substring(5, 7))-1;
    const currentMonth = months[month];
   const year = data[i].dt_txt.substring(0, 4);
   const time = data[i].dt_txt.substring(11);
   const icon = data[i].weather[0].icon;
   
    const weather = Math.floor(data[i].main.temp);
    
    weekView += `
    <div class="weather-week">
        <div class="weather-week__date">${day} ${currentMonth}, ${year}</div>
        <div class="weather-week__weather">
            <img src="../dist/image/256x256/${icon}.png" alt="" class="weather-week__weather-icon">
            <p class="weather-week__weather-deg">${weather} <spa>&deg</spa></p>
        </div>
        <div class="weather-week__time">${time}</div>
    </div> 
    
    `
   
   } 

   element.ConWeather.insertAdjacentHTML('beforeend',weekView);

}