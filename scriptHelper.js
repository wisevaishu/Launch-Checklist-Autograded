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

    // if ( validatePilot === "Empty" || validatePilot !== "Not a Number" ||
    //     validateCoPilot === "Empty" || validateCoPilot !== "Not a Number" ||
    //     validateFuelLevel !== "Is a Number" || validateCargoLevel !== "Is a Number") 
    // {
    //     alert("All fields are required!");
    //     return;
    // }

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
    pilotStatus.textContent = `Pilot ${pilot} Ready`;
    coPilotStatus.textContent = `Co-pilot ${copilot} Ready`;

    if (fuelLevel < 10000) {
        const faultyItemsDiv = document.getElementById("faultyItems");
        faultyItemsDiv.style.visibility = "visible";
        const fuelStatus = document.getElementById("fuelStatus");
        fuelStatus.textContent = "Fuel level too low for launch";
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.textContent = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        return; 
    }

    if (cargoLevel > 10000) {
        const faultyItemsDiv = document.getElementById("faultyItems");
        faultyItemsDiv.style.visibility = "visible";
        const cargoStatus = document.getElementById("cargoStatus");
           cargoStatus.textContent = "Cargo mass too high for launch";
            const launchStatus = document.getElementById("launchStatus");
            launchStatus.textContent = "Shuttle not ready for launch";
            //launchStatus.style.color = "red";
            launchStatus.style.color = "red";
            return; 
        }

        const faultyItemsDiv = document.getElementById("faultyItems");
        faultyItemsDiv.style.visibility = "visible";
        const launchStatus = document.getElementById("launchStatus");
        launchStatus.textContent = "Shuttle is ready for launch";
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