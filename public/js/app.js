console.log('Client side javascript file is loaded');

/* fetch('http://puzzle.mead.io/puzzle').then((response) => {
    console.log(response)
    response.json().then((data) => {
        console.log(data)
    })
}) */

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value;

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                messageOne.innerHTML = data.error;
            }else{
                messageTwo.innerHTML = `Location: ${data.location} <br> Currently: ${data.forecast.currently} 
                <br> Temperature out: ${data.forecast.temperature_out} <br> Chance of rain: ${data.forecast.chanceOfRain}`
            }  
        })
    })
})