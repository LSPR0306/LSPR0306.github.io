//ref. til html-elemnter
const mittCanvas = document.querySelector("#mittCanvas");
const ctx = mittCanvas.getContext("2d");

ctx.fillRect(10,10,29,25);

//globale var.
let levende = true;

//setup (oppstart)
gameloop();

//hendelsesfunk.
window.onkeydown = flyttFigur;

//funk def.
function gameloop() {

    tegnBakgrunn();
    tegnFigur();
    flyttHinder();
    tegnHinder();
    skjekkKolisjon();

    if(levende){
        requestAnimationFrame(gameloop);
    }

}

function tegnBakgrunn() {
    console.log("Tegn Bakgrunn");
}

function tegnFigur() {
    console.log("Tegn Figur");
}

function flyttHinder() {
    console.log("Flytt Hinder");
}

function tegnHinder() {
    console.log("Tegn Hinder");
}

function skjekkKolisjon() {
    console.log("skjekk Kolisjon");
}