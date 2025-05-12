let count=0;
function handleIncrement(){
    const passengerShownNumber= document.getElementById("passenger");
    count++;
    passengerShownNumber.innerHTML=count;
}

function handleSave(){
    const passengerShownNumber= document.getElementById("passenger");
    const previousEntries= document.getElementById("prev");
    previousEntries.innerHTML+= `${count}- `;
    count=0;
    passengerShownNumber.innerHTML="0"
}