/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input");

const btn = document.getElementById("convert-btn");
const length = document.getElementById("length-conversion");
const volume = document.getElementById("volume-conversion");
const mass = document.getElementById("mass-conversion");



// function with a btn click event listener that calculates all 3 converstaions when clicked
// input data used in each convertion
// a temperate literal to add convertion text to an innerHTML element



btn.addEventListener("click", function() {
    // btn.classList.toggle("active");
    let inputValue = inputEl.value;
    let metersToFeet = (inputValue * 3.281).toFixed(3);
    let feetToMeters = (inputValue / 3.281).toFixed(3);
    let litersToGallons = (inputValue * 0.264).toFixed(3);
    let gallonsToLiters = (inputValue / 0.264).toFixed(3);
    let kilosToPounds = (inputValue * 2.204).toFixed(3);
    let poundsToKilos = (inputValue / 2.204).toFixed(3);

    // console.log(kilosToPounds, poundsToKilos);

    length.innerHTML = `${inputValue} meters = ${metersToFeet} feet | ${inputValue} feet = ${feetToMeters} meters`;
    volume.innerHTML = `${inputValue} liters = ${litersToGallons} gallons | ${inputValue} gallons = ${gallonsToLiters} liters`;
    mass.innerHTML = `${inputValue} kilograms = ${kilosToPounds} pounds | ${inputValue} pounds = ${poundsToKilos} kilograms`;

})

