import axios from "axios";

async function getWeatherLocation(lat,lon,e){

    try{
        const data = await axios(`http://api.openweathermap.org/data/2.5/${e}?APPID=yourkey&lat=${lat}&lon=${lon}&units=imperial`);

        return data;
    }
    catch (error){
        alert('Sorry, Could not found location')
    }
}



export default class Weather{

    constructor(lat,lon){
        this.lat = lat;
        this.lon = lon;
    }

    // get current weather by location
    async currentWeather(){
        return getWeatherLocation(this.lat,this.lon,'weather')
    }

    // get Week weather by location
    async currentWeatherWeek(){
        return getWeatherLocation(this.lat,this.lon,'forecast')

    }

    
}
