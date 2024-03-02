// Write your JavaScript code here!

//const { pickPlanet } = require("./scriptHelper");


window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();
    
    listedPlanetsResponse.then(function(planets) {
            let randomPlanet = pickPlanet(planets);
            addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, 
                               randomPlanet.star, randomPlanet.distance, 
                               randomPlanet.moons, randomPlanet.image) 
            
    });
       
    let form = document.querySelector("form[data-testid=testForm]");
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let pilotNameInput = document.querySelector("input[name=pilotName]");
            let copilotNameInput = document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = document.querySelector("input[name=cargoMass]");
            formSubmission(document, null, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);           
    });
});