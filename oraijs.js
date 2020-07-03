"use strict";

const dokas = document.getElementById("testas");
const laukotemp = document.getElementById("temperatura");
const vieta = document.getElementById("vietove");
const date = document.getElementById("datos-vieta");
const veikla = document.getElementById("aprasymas");
const naujas = document.createElement("div");
let today = new Date().toISOString().slice(0, 10);

// variables i kuriuos dedu info is jsono
let place = {},
    forecastType,
    forecastCreationTimeUtc,
    forecastTimestamps = [],
    mainObj= {},
    mainObj2={},
    conditionCode,
    forecastTimeUtc;

// fetchinimas

fetchAsync()
async function fetchAsync(){
    const response = await fetch('https://api.meteo.lt/v1/places/kaunas/forecasts/long-term')
    const data = await response.json();
    place = data.place; 
    forecastType = data.forecastType;
    forecastCreationTimeUtc = data.forecastCreationTimeUtc;
    forecastTimestamps = data.forecastTimestamps;
    conditionCode = data.forecastTimestamps.conditionCode;
    mainObj2 = forecastTimestamps;
    forecastTimeUtc = forecastTimestamps.forecastTimeUtc;
    conditionCode = data.forecastTimestamps.conditionCode;
    ciklas();
    }

//isvedinejimo ciklas

function ciklas (){
    // for(let i=0; i<mainObj2.length; i++){
        laukotemp.innerHTML = `airTemperature ${mainObj2[0].airTemperature} `;
        vieta.innerHTML = place.country + " " + place.name;
        date.innerHTML = forecastCreationTimeUtc;

        for(let i=0; i<forecastTimestamps.length; i++){
                let forecastodata;
                forecastodata = forecastTimestamps[i].forecastTimeUtc;
                var forecastodata1 = new Date(forecastodata);
                var d = forecastodata1.getDate();
                if(d < 10)
                {
	            d = '0'+ d;
                }
                var m = forecastodata1.getMonth()+1;
                if(m < 10)
                {
                    m = '0' + m;
                }
                var y = forecastodata1.getFullYear();
                var datasuform = (y+"-"+m+"-"+d);
                
                if(datasumform === today){
                    console.log(datasuform);
                    console.log("kazkas yra godlike");
                }
                console.log(datasuform);

                // conditionCode = forecastTimestamps[i].conditionCode;
                // console.log(conditionCode);
                // if(conditionCode === "clear"){
                //     console.log("labas ka veiki");
                // }
                // else if(conditionCode === "isolated-clouds"){
                //     console.log("labas cia tipo izoliuoti debesys");
                // }
                // else if(conditionCode === "scattered-clouds"){
                //     console.log("issitaske debesy ale")
                // }
                // else if(conditionCode === "overcast"){
                //     console.log("kazkoks naujas gedimas isiveles ;D")
                // }
        }        

        // laukotemp.innerHTML = `airTemperature ${mainObj2[i].airTemperature} `;
        // vieta.innerHTML = place.country + " " + place.name;
        // date.innerHTML = forecastCreationTimeUtc;
        // veikla.innerHTML = conditionCode;
        // dokas.innerHTML += `windSpeed ${mainObj2[i].windSpeed} `;
        // dokas.innerHTML += `windDirection ${mainObj2[i].windDirection} `;
        // dokas.innerHTML += `conditionCode ${mainObj2[i].conditionCode} <br>`;
    // }
}


// forecastTimestamps.forEach(isvedimas);

// function isvedimas (item, index, array){
//     console.log(forecastTimestamps)
// }

