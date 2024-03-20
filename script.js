const btn = document.getElementById("btn");
const input = document.getElementById("input");
let loc = document.getElementById("location");
let img = document.getElementById("img");
let value = document.getElementById("value");
let climate = document.getElementById("climate");

btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    gettemp(input.value);
    input.value='';
});
const gettemp = async(city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=dab3af44de7d24ae7ff86549334e45bd`);
        const data = await response.json();
        console.log(data);
        let {name} = data;
        let {feels_like}= data.main;
        let {id,main}= data.weather[0];
        loc.textContent=name;
        climate.textContent=main;
        value.textContent=Math.round(feels_like-273);
        let num=Math.round(feels_like-273);
        console.log(num);
    }
    catch(error) {
        alert('City Not Found');
    }

};
