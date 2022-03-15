const countryName = document.querySelector('.country__name')
const degree = document.querySelector('.degree')
const disclaimer = document.querySelector('.disclaimer')
const weatherImg = document.querySelector('.weather__img')
fetch('https://api.openweathermap.org/data/2.5/weather?id=1217414&appid=24978a923939aa30cd9405ec328c8701')
    .then(function(resp){return resp.json()})
    .then(function(data){
        // console.log(data)
        countryName.textContent= data.name
        degree.innerHTML = Math.round(data.main.temp - 273) + '&deg'
        disclaimer.textContent = data.weather[0]['description']
        weatherImg.innerHTML = `<img class="weather__logo" src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`
    })
    .catch(function(){

    })
