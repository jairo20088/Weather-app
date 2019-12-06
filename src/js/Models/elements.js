
export const day = new Date().getDate();
export const months = ['January','February','March','April','May','Jun','July','August','September','Octover','November','December'];
const currentMonth = new Date().getMonth();



export const year = new Date().getFullYear();

export const month = months[currentMonth];


export const element = {
    date: document.querySelector('.heading__date'),
    city: document.querySelector('.heading__city'),
    country: document.querySelector('.heading__country'),
    ConWeather: document.querySelector('.weather-container'),
    btn: document.querySelector('.search__btn-main'),
    loader:document.querySelector('.loader'),
    search:document.querySelector('.search'),
    weatherContainer:document.querySelector('.weather-container')
    
}


