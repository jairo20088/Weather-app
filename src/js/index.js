import Weather from './Models/currentWeather'; // the data for the current and week view
import currentWeatherView from './View/currentView'; // the view for the current weather
import weekWeatherView from './View/weekWeatherView'; //  the view for the week weather
import Search from './Models/SearchCurrent'; //  search for location
import * as elements from './Models/elements';
import loader from "./View/loader";



if(Modernizr.geolocation){
    navigator.geolocation.getCurrentPosition(success,fail);
} 
 async function success(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    loader(); // loader

    //---------------------------------------------
    // current weather 
    //---------------------------------------------
    const weather = new Weather(lat,lon); 
    const CweatherData = await weather.currentWeather();
    const cData = CweatherData.data;


    // display current weather passing name, country, temp, image, description
    currentWeatherView(cData.name,cData.sys.country,cData.main.temp,cData.weather[0].icon,cData.weather[0].description); 
    
    //---------------------------------------------
    //week weather
    //---------------------------------------------
    const WweatherData = await weather.currentWeatherWeek();
    const wData = WweatherData.data.list;

    //display the weather for the whole week pasing a list of all the weather for the week
    weekWeatherView(wData);
    
 

}
function fail(e){
    alert('Sorry, could not get the location, \n please refresh the page')
}

// no display when looking for a location
function searchLoader(){

    elements.element.loader.style.display = 'block';
    elements.element.search.style.display = "none";
    elements.element.weatherContainer.style.display = 'none';

}
elements.element.btn.addEventListener('click',async () =>{

    const  input = document.querySelector('.search__input-text').value;
    searchLoader();
   

    if(input){

        // search current weather
    const search= new Search(input);
    const CsearchData = await search.searchCurrent();
    const sData = CsearchData.data;
    
    // search week weather 
    const Wsearch = await search.searchWeek();
    const WsearchData = Wsearch.data.list;
    console.log(WsearchData);
    
    deleteElement(); // delete the current weather 

    // display weather from the search location
    currentWeatherView(sData.name,sData.sys.country,sData.main.temp,sData.weather[0].icon,sData.weather[0].description);
    
    // diaply week weather for the searcg location
    weekWeatherView(WsearchData);
    loader();
    } else {
        alert('please, provide a location')
    }
    
   
})
function deleteElement(){

    const heading = document.querySelector('.heading');
    const weather= document.querySelector('.weather');
    const week = document.querySelectorAll('.weather-week')
    //const weekArray = Array.from(week)
    
    for(let i  = 0 ; i < week.length; i++){
        week[i].remove();
        
    }
    
    heading.parentElement.removeChild(heading);
    weather.parentElement.removeChild(weather);
    
    

}