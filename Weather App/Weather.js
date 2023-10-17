//Codewithharsh_
let cityName = document.querySelector('.container .search-box  input');
let weather_img = document.querySelector('.container .weather-img img');
let weatherMain = document.querySelector('.container .weather_main_1');
let weatherDescrip = document.querySelector('.container .weather_descrip');
let otherDetails = document.querySelector('.container .other-details');
let temp = document.querySelector('.container .temp');
let searchBtn = document.querySelector('.container .search-box .search-btn');
let weatherLocation = document.querySelector('.container .weather-location');

//openweathermap api use to make this weather app
//Open your broswer and search openweathermap.org , sign up/sign in and get your api Key from there
//👇Insert your openweathermap apiKey in this variable
//If you any problem, you can freely message me on instagram 😊
let apiKey = '';

let getWeatherDetails =()=>{
 let city = cityName.value;    
 let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`; 
 fetch(url).then(res => res.json()).then(data =>{
   weather_img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`; 
   weatherMain.innerHTML = data.weather[0].main;
   weatherDescrip.innerHTML = data.weather[0].description;
   weatherLocation.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${data.name}`;
   temp.innerHTML = `${data.main.temp}&#176;`;
   otherDetails.innerHTML =  `<div class="wind-speed">
                                 <span>Feels like</span>  
                                 <p>${data.main.feels_like}&#176;</p>
                              </div> 
                              <div class="min-temp">
                                <span>Min Temp</span> 
                                 <p>${data.main.temp_min}&#176;</p> 
                              </div>     
                              <div class="Humidity">
                                <span>Humidity</span> 
                                <p>${data.main.humidity}%</p> 
                              </div> 
                       <div class="wind-speed" >
                         <span>Wind speed</span> 
                         <p>${data.wind.speed}Km/H</p> 
                        </div>   
                        <div class="max-temp">
                           <span>Max temp</span> 
                           <p>${data.main.temp_max}&#176;</p> 
                        </div>   
                        <div class="pressure">
           <span>Pressure </span> 
           <p >${data.main.pressure}mbar</p> 
           </div>    `;
 })
}

searchBtn.addEventListener('click',()=>{
 if(cityName.value != ''){
  getWeatherDetails();
 }      
})

getWeatherDetails();
