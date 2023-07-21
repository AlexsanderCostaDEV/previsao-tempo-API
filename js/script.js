const key = "4e362896d582a06755a2f8e2a070218a";

function buttonClicked() {
    const input = document.querySelector('.input-city').value;
    console.log(input)
    searchCity(input);
}

async function searchCity(city) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json());
    putOnScreen(dados);
}

function putOnScreen(dados) {
    console.log(dados);
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-prev").innerHTML = dados.weather[0].description;
    document.querySelector(".img-prev").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%";
}

// input2.addEventListener("keyup", function(event) {
//     const input2 = document.querySelector('.input-city');
//     if (event.keyCode === 13) {
//         const valorInput = input;
//         alert("Valor do Input:", valorInput);
//     }
// });

// Math.floor: arredonda
// async e await: utilizando quando manipula-se APIs