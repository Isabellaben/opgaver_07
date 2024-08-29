const snaps = document.querySelector("#snaps");
const beer = document.querySelector("#beer");
const cola = document.querySelector("#cola");
const fanta = document.querySelector("#fanta");



snaps.addEventListener("click", indeholderAlkohol);
beer.addEventListener("click", indeholderAlkohol); 


function indeholderAlkohol(){
    console.log("Inderholder alkohol");
}


cola.addEventListener("click", alkoholfri);
fanta.addEventListener("click", alkoholfri);

function alkoholfri(){
    console.log("Alkoholfri");
}  




