import {day,year,month,element} from '../Models/elements';

export default function displayWeather(city,country,grade,img,des){

    const mainWeather = `
    <div class="heading">
        <p class="heading__date">${day} ${month}, ${year}</p>
        <h1 class="heading__city">${city}, <span class="heading__country">${country}</span></h1>
    </div>
    <div class="weather">
<p class="weather__main">${Math.floor(grade)}<span>&deg;</span></p>
        <img src="../dist/image/256x256/${img}.png" alt="" class="weather__img">
        <p class="weather__description">${des.toUpperCase()}</p>
    </div>
    `
    element.ConWeather.insertAdjacentHTML('afterbegin',mainWeather);

}
