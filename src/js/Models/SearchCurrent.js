import axios from "axios";

async function currentWeather(e,input){

    try{
        const data = await axios(`http://api.openweathermap.org/data/2.5/${e}?APPID=beac49ede1be043d3509a4d55c800063&q=${input}&units=imperial`);
    
        return data;
    }
    catch (error){
        alert('Sorry, Could not found location')
    }
}

export default  class Search{

    constructor(input){
        this.input = input;
    }
    // Get Search Current Weather
   async searchCurrent(){
    return currentWeather('weather',this.input);
   }

   //Get Search Week Weather 
   async searchWeek(){
    return currentWeather('forecast',this.input);


   }
       
}
