const apiKey = "3bc944f217758fa492661de36e0e181a";

let cities = [];
// GET 
function getWeather(){
const city = document.getElementById("cityInput").value;
if(city === ""){
alert("Enter city name");
return;
}
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
.then(function(response){
return response.json();
})
.then(function(data){
const html = `
<p><strong>${data.name}</strong></p>
<p>Temperature: ${data.main.temp} °C</p>
<p>Weather: ${data.weather[0].main}</p>
<p>Humidity: ${data.main.humidity}%</p>
`;
document.getElementById("weather").innerHTML = html;
})
.catch(function(){
document.getElementById("weather").innerText = "City not found";
});
}
// POST
function addCity(){
const city = document.getElementById("newCity").value;
if(city === "") return;
cities.push(city);
document.getElementById("newCity").value = "";
renderCities();
}
// PUT
function updateCity(index){
const newCity = prompt("Update city name");
if(newCity){
cities[index] = newCity;
renderCities();
}
}
// DELETE
function deleteCity(index){
cities.splice(index,1);
renderCities();
}


function renderCities(){
const list = document.getElementById("cityList");
list.innerHTML = "";
cities.forEach(function(city,index){
const li = document.createElement("li");
li.innerHTML = `
<span>${city}</span>
<div>
<button onclick="updateCity(${index})">Edit</button>
<button onclick="deleteCity(${index})">Delete</button>
</div>
`;
list.appendChild(li);
});
}