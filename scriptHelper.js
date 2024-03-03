// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${imageUrl}">
    `;
 }
 
 function validateInput(testInput) {
    if (testInput === ""){
        return "Empty";
    }
    else if (isNaN(testInput)){
        return "Not a Number";
    }
    else if(!isNaN(testInput)){
        return "Is a Number";
    }
 }

 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const validatePilot = validateInput(pilot);
    const validateCoPilot = validateInput(copilot);
    const validateFuelLevel = validateInput(fuelLevel);
    const validateCargoLevel = validateInput(cargoLevel);

  if (validatePilot === "Empty" || validateCoPilot === "Empty" ||
        validateFuelLevel === "Empty" || validateCargoLevel === "Empty")
    {
        alert("All fields are required!");
        return;
    }

    if (validatePilot !== "Not a Number" || validateCoPilot !== "Not a Number" || 
        validateFuelLevel !== "Is a Number" || validateCargoLevel !== "Is a Number")
    {
        alert("Make sure to enter valid information for each field!");
        return;
    }
   
    const pilotStatus = document.getElementById('pilotStatus');
    const coPilotStatus = document.getElementById('copilotStatus');
    pilotStatus.textContent = `Pilot ${pilot} is ready for launch`;
    coPilotStatus.textContent = `Co-pilot ${copilot} is ready for launch`;

    //const faultyItemsDiv = document.getElementById("faultyItems");
    const fuelStatus = document.getElementById("fuelStatus");
    const launchStatus = document.getElementById("launchStatus");
    const cargoStatus = document.getElementById("cargoStatus");

    if (fuelLevel < 10000 || cargoLevel > 10000) {
        list.style.visibility = "visible";
        launchStatus.style.color = "red";
        launchStatus.textContent = "Shuttle Not Ready for Launch";

        if (fuelLevel < 10000) {
            fuelStatus.textContent = "Fuel level too low for launch";
        } else {
            fuelStatus.textContent = "Fuel level high enough for launch";
        }

        if (cargoLevel > 10000) {
            cargoStatus.textContent = "Cargo mass too heavy for launch";
        } else {
            cargoStatus.textContent = "Cargo mass low enough for launch";
        }

        return;
    }
    
    list.style.visibility = "visible";
    launchStatus.textContent = "Shuttle is Ready for Launch";
    fuelStatus.textContent = "Fuel level high enough for launch";
    cargoStatus.textContent = "Cargo mass low enough for launch";
    launchStatus.style.color = "green";
 }
 
 async function myFetch() {
    const response = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return response.json();
}
 
 function pickPlanet(planets) {
   
   const randomIndex = Math.floor(Math.random() * planets.length);
   const randomPlanet = planets[randomIndex];
   console.log("Randomly picked planet:", randomPlanet);
   return randomPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;