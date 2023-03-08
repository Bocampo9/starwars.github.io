let estadoSable = "apagado";

/* sonidos*/
let sonidoSable = document.querySelector("#sableLuzEncendido");
let sonidoDarthVader = document.querySelector("#marchaImperial");

/*divs*/

let darthVader = document.querySelector("#darthVader");
let sableLuz = document.querySelector("#sableLuz");

sableLuz.addEventListener("click",() => {
    activarSable();
});

function activarSable (){
    if (estadoSable == "apagado") {
        estadoSable = "encendido";
        sableSonido();
        darthVader.classList.add("darthVader_activo")
    }else{
        estadoSable = "apagado";
        sableSonido();
        darthVader.classList.remove("darthVader_activo");
        
    }
}
function sableSonido (){
    if (sonidoDarthVader.paused) {
        sonidoSable.play();
        sonidoDarthVader.play();   
    } else {
        sonidoDarthVader.pause()
        sonidoDarthVader.currentTime=0;
        
    }

}