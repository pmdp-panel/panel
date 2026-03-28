async function loadStop(){

    const stop = document.getElementById("stopInput").value;
    document.getElementById("stopName").innerText = stop;

    /*
    PMDP API (stejné co používá web jízdních řádů)
    */
    const url =
    "https://jizdnirady.pmdp.cz/Departures?stop=" +
    encodeURIComponent(stop) +
    "&format=json";

    try{

        const response = await fetch(url);
        const data = await response.json();

        renderDepartures(data);

    }catch(e){
        document.getElementById("departures").innerHTML =
        "Nelze načíst data.";
    }
}

function renderDepartures(data){

    let html = "";

    data.departures.forEach(dep => {

        html += `
        <div class="row">
            <span>${dep.line}</span>
            <span>${dep.destination}</span>
            <span>${dep.time}</span>
        </div>
        `;
    });

    document.getElementById("departures").innerHTML = html;
}

