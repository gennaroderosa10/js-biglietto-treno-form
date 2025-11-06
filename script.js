//DATI A DISPOSIZIONE
// prezzo per km: 0,21€
// RACCOLTA DATI
// 1. chiedere km da percorrere
// 2. chiedere età passeggero
// N.B. creare prompt con conversione da stringa a numero
// ESECIZIONE LOGICA
// prezzo del biglietto uguale a X km * 0,21
// applicare eventuli sconti: -20% se minorenni -40% se over 65
// IF l'etè < 18 calcololo lo sconto: prezzo base * 20 / 100 --> prezzo - sconto
// ELSE IF età > 65 calcolo lo sconto: prezzo base * 40 / 100 --> prezzo - sconto
// ELSE prezzo finlae = prezzo base
// arrotondo il prezzo alle prime 2 cifre decimali
// OUTPUT
// stampare prezzo finale con massimo 2 decimale


// let etaPrompt = prompt("Età");
// let eta = parseInt(etaPrompt);

// let kmPrompt = prompt("Quanti Km devi percorrere?");
// let km = parseInt(kmPrompt);

const form = document.querySelector("form");

//campi da compilare
const nameInput = document.getElementById("name");
const kmInput = document.getElementById("km");
const etaInput = document.getElementById("eta");

//output
const nominativoOutput = document.getElementById("nominativo");
const prezzoOutput = document.getElementById("prezzo");
const kmOutput = document.getElementById("percorso");
const etaOutput = document.getElementById("eta-passeggero");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value;
    const km = kmInput.value;
    const eta = etaInput.value;

    let prezzoPieno = km * 0.21;
    let prezzoFinale;

    // CONTROLLO DATI
    if (isNaN(eta) === true || isNaN(km) === true) {
        alert("inserisci un valore corretto");

    } else if (eta <= 0 || km <= 0) {
        alert("inserisci un valore corretto");

    } else if (eta < 18) {
        let sconto = 20;
        let prezzoDaScontare = (prezzoPieno * sconto) / 100;
        prezzoFinale = prezzoPieno - prezzoDaScontare;


    } else if (eta > 65) {
        let sconto = 40;
        let prezzoDaScontare = (prezzoPieno * sconto) / 100;
        prezzoFinale = prezzoPieno - prezzoDaScontare;


    } else {
        prezzoFinale = prezzoPieno;
    }

    const prezzoArrotondato = prezzoFinale.toFixed(2);




    nominativoOutput.innerHTML = name;
    kmOutput.innerHTML = km;
    etaOutput.innerHTML = eta;
    prezzoOutput.innerHTML = `${prezzoArrotondato}€`;

});








