const temperatureField = document.querySelector(".temp")
const locationField = document.querySelector(".time_location p")
const dateAndTimeField = document.querySelector(".time_location span")
const conditionField = document.querySelector(".condition p")
const searchField = document.querySelector(".search_area")
const form = document.querySelector("form")

form.addEventListener('submit', searchForLocation)

let target = 'Lucknow'

const fetchResults = async (targetLocation) => {

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${targetLocation}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'abcdefghijklmnopqrstuvwxyz',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);


    let locationName = result.location.name
    let time = result.location.localtime

    let temp = result.current.temp_c

    let condition = result.current.condition.text

    updateDetails(temp, locationName, time, condition)

}

function updateDetails(temp, locationName, time, condition) {
    let splitDate = time.split(' ')[0]
    let splitTime = time.split(' ')[1]
    let currentDay = getDayName(new Date(splitDate).getDay())

    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateAndTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault()

    target = searchField.value
    fetchResults(target)
}

fetchResults(target)

function getDayName(number) {
    switch (number) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}
