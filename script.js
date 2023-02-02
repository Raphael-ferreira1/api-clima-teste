const apiKey = "cbfa2caa3d0bf6250a045c42ac8dc2b9";


const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city")
const tempElement = document.querySelector("#temperature span")
const descElement = document.querySelector("#description")
const weatherIconElement = document.querySelector("#weather-icon")
const umidityElement = document.querySelector("#umidity span")
const windElement = document.querySelector("#wind span")

const weatherContainer = document.querySelector("#weather-data")

//Funções
const pegarClima = async(city) => {
    const climaCidade = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    climaCidadeTransforma = await fetch (climaCidade)
    climaCidadeConverte = await climaCidadeTransforma.json()

    

    return climaCidadeConverte
}

const mostrarClima = async(city) => {
    const climaCidadeConverte = await pegarClima(city)

    cityElement.innerText = climaCidadeConverte.name
    tempElement.innerText = parseInt(climaCidadeConverte.main.temp)
    descElement.innerText = climaCidadeConverte.weather[0].description
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${climaCidadeConverte.weather[0].icon}.png`)
    umidityElement.innerText = `${climaCidadeConverte.main.humidity}%`;
    windElement.innerText = `${climaCidadeConverte.main.humidity} Km/h`

    weatherContainer.classList.remove("hide")
}

//Eventos

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()

    city = cityInput.value;

    mostrarClima(city)
})

cityInput.addEventListener("keyup", (e) => {
    if(e.code === "Enter") {
        const city = e.target.value;

        mostrarClima(city)
    }
})
