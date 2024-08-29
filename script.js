const snaps = document.querySelector("#snaps");
const beer = document.querySelector("#beer");
const cola = document.querySelector("#cola");
const fanta = document.querySelector("#fanta");



snaps.addEventListener("click", tjek);
beer.addEventListener("click", tjek); 
cola.addEventListener("click", tjek);
fanta.addEventListener("click", tjek);


function tjek(){
    console.log(this.alt);
    if(this.alt == beer || this.alt == snaps){
        console.log("Indeholder alkohol");
    } else {
        console.log("Alkoholfri");
    }
}






