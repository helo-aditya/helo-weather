// button.addEventListener('click', ()=>{
//     const city = input.value;
//     async function getinfo(){
//         let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fd2ba9b626de37ae0fc9653b3b05831&units=metric`);
//         let data = await response.json();
//         console.log(data);
//         return data;
//     }
//     getinfo();
// })



const button = document.getElementById('button');
const input = document.getElementById('city');

let data;  //after fn call all the data got stored in this..



//  ELEMENT EXTRACTION FROM DOM
const locate = document.getElementById('location');
const temp = document.getElementById('temp');
const forecast = document.getElementById('forecast');
const moisture = document.getElementsByClassName('moisturevalue')[0];
const wind = document.querySelector('.windvalue');

const pressure = document.querySelector('#pressurevalue');
const visibility = document.querySelector('#visibilityvalue');
const feelslike = document.querySelector('#feelslikevalue');
const sealevel = document.querySelector('#sealevelvalue');
const groundlevel = document.querySelector('#groundlevelvalue');
const sunrise = document.querySelector('#sunrisevalue');
const sunset = document.querySelector('#sunsetvalue');

function update(){
    //first class Update
    locate.textContent = data.name;
    temp.textContent = `${data.main.temp}°C`;
    forecast.textContent =  data.weather[0].main;
    moisture.textContent = `${data.main.humidity}%`;
    wind.textContent = `${data.wind.speed} Km/h`;

    //second class update
    pressure.textContent = `${data.main.pressure} Pa`;
    visibility.textContent = `${data.visibility} Km`;
    feelslike.textContent = `${data.main.feels_like}°C`;
    sealevel.textContent = `${data.main.sea_level} hPa`;
    groundlevel.textContent = `${data.main.grnd_level} hPa`;
    sunrise.textContent = new Date(data.sys.sunrise * 1000)
    .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });

    sunset.textContent = new Date(data.sys.sunset * 1000)
    .toLocaleTimeString("en-IN", { timeZone: "Asia/Kolkata" });



}


button.addEventListener('click', async ()=>{
    const city = input.value;
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1fd2ba9b626de37ae0fc9653b3b05831&units=metric`);
        data = await response.json();
        // console.log(data); //taki get live update hme kya kya api fetch se mil rha hai
            //value of it will be displayed in console of browser
        update();
    }
    catch(error){
        alert('Invalid City Name!');
        console.log(error);
    }
})