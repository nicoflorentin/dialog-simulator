console.log("script OK");

//////////////////////////////
// DECLARACION DE VARIABLES //
//////////////////////////////

let playable = false;
let instance = 0;
let state = 10;
let stateRange = undefined;
let instanceRange = undefined;
let lastChoice = undefined;
let playerName = localStorage.getItem("playerName");

// animacion
let animSec = 500;

/////////////////////////////////
// APENAS SE EJECUTA EL CÓDIGO //
/////////////////////////////////

// SI EL NOMBRE ESTA VACIO NO SE PUEDE JUGAR
if (playerName != "") {

    playable = true;
}

// VERIFICAR SI HAY UN NOMBRE GUARDADO, RECUPERAR DATOS, BORRAR FORMULARIO Y MOSTRAR ESTADO GUARDADO
if (playable) {

    instance = parseInt(localStorage.getItem("instance"));
    state = parseInt(localStorage.getItem("state"));
    lastChoice = localStorage.getItem("lastChoice")
    console.log("datos cargados!")
    eraseForm();

    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);
    $(".dialogo").css("display","none")
                .fadeIn(animSec);

    buttonPress("showcurrent");
} else {

    playable = true;

    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);

    buttonPress("newgame");
    playable = false;
}

///////////////
// FUNCIONES //
///////////////

//GUARDAR EL NOMBRE, MOSTRAR NOMBRE Y OCULTAR INPUT
function submitName() {

    // recuperar nombre del input
    let nameValue = document.getElementById("nameForm").value;
    // guardar nombre en variable global y en storage
    playerName = nameValue;


    if (playerName != "") {

        playable = true;
        eraseForm();
        instance++;

        $(".scene__respuesta").fadeIn(animSec);
        $("#imgPersonaje").fadeIn(animSec);
        $(".dialogo").css("display","none")
                    .fadeIn(animSec);

        buttonPress("showcurrent");
        localStorage.setItem('playerName', playerName);
        storeData();

    } else {

        alert("ingresá nombre válido");
        playable = false;
    }
}

//BOTON NUEVO JUEGO
function newGame() {

    resetStorage();
    instance = 0;
    state = 10;

    $("#imgPersonaje").css("display","none");
    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);
    $(".dialogo").css("display","none")
                    .fadeIn(animSec);

    buttonPress("newgame");
    playable = false;
    showForm();

    console.log("new game! instance " + instance + " state " + state)
}

//GUARDAR DATOS
function storeData() {

    localStorage.setItem("instance", instance);
    localStorage.setItem("state", state);
    localStorage.setItem("lastChoice", lastChoice);
}

//RESETEAR STORAGE
function resetStorage() {

    localStorage.setItem('instance', 0);
    localStorage.setItem('state', 10);
    localStorage.setItem('playerName', "");
    localStorage.setItem('lastChoice', undefined);
}

//ELIMINAR FORMULARIO
function eraseForm() {

    // eliminar formulario
    $("#nameDiv").remove();
    // agregar name al dom
    $("#headBar").append(`<p>${playerName}</p>`);
}

//INSERTAR FORMULARIO
function showForm() {

    $("#headBar").html(`<p class="title">Name</p>
                        <div class= "headBar__flex nes-field" id="nameDiv">
                            <input type="text" id="nameForm" name="nameForm" class="nes-input headBar__input" placeholder="Input name to begin">
                            <input class="nes-btn is-primary" type="button" onclick="submitName()" value="Enter">
                        </div>`);
}

//CLASIFICA ESTADOS
function stateClassif() {

    if (state >= 13 && state <= 20) {
        stateRange = "vgood";
    } else if (state >= 7 && state <= 13){
        stateRange = "good";
    } else if (state >= 1 && state <= 7){
        stateRange = "bad";
    }
}

//CLASIFICA INSTANCIAS
function instanceClassif() {

    if (instance > 7 && state <= 10) {
        instanceRange = "ending";
    } else if (instance > 3 && state <= 7){
        instanceRange = "mid";
    } else if (instance >= 1 && state <= 3){
        instanceRange = "start";
    }
}


// ANIMACION DE BORRAR DIALOGOS Y RESPUESTAS (falta: agregar imagenes)
$(".boton").click(
    function(){
        $(".scene__respuesta").css("display","none")
                    .fadeIn(animSec)        
        $(".dialogo").css("display","none")
                    .fadeIn(animSec)
    }
);



//DETERMINA QUE HACE CADA BOTON
function buttonPress(buttonSelect) {

    if (instance <= 10 && playable) {

        switch (buttonSelect) {
            case "a":
                instance++
                console.log("boton A, intancia " + instance);
                // imprimo en el html los dialogos a elegir
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                // imprimo en el html la respuesta al dialogo
                $("#answerShow").html(web[instance - 1].botonA.answer);
                $("#questionShow").html(web[instance].question);
                // llamo a la funcion del objeto con su sumador propio y modifico el status
                web[instance].botonA.dialogStateChange();
                $("#statisticsShow").html(state);
                break;

            case "b":
                instance++
                console.log("boton B, instance: " + instance + ", state: " + state + " last choice: " + lastChoice);
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                $("#answerShow").html(web[instance - 1].botonB.answer);
                $("#questionShow").html(web[instance].question);
                web[instance].botonB.dialogStateChange();
                $("#statisticsShow").html(state);
                break;

            case "c":
                instance++
                console.log("boton C, instance: " + instance + ", state: " + state + " last choice: " + lastChoice);
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                $("#answerShow").html(web[instance - 1].botonC.answer);
                $("#questionShow").html(web[instance].question);
                web[instance].botonC.dialogStateChange();
                $("#statisticsShow").html(state);
                break

            case "d":
                instance++
                console.log("boton D, instance: " + instance + ", state: " + state + " last choice: " + lastChoice);
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                $("#answerShow").html(web[instance - 1].botonD.answer);
                $("#questionShow").html(web[instance].question);
                web[instance].botonD.dialogStateChange();
                $("#statisticsShow").html(state);
                break

            case "newgame":
                console.log("new game!, instancia " + instance + ", state " + state);
                $("#dialog1Show").html(web[0].botonA.dialog);
                $("#dialog2Show").html(web[0].botonB.dialog);
                $("#dialog3Show").html(web[0].botonC.dialog);
                $("#dialog4Show").html(web[0].botonD.dialog);
                $("#answerShow").html(web[0].botonD.answer);
                $("#questionShow").html(web[0].question);
                $("#statisticsShow").html(state);
                break;

            case "showcurrent":
                console.log("show current!, instance: " + instance + ", state: " + state + " last choice: " + lastChoice);
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                $("#answerShow").html("");
                $("#questionShow").html(web[instance].question);
                $("#statisticsShow").html(state);
                break;
        }


        instanceClassif();
        stateClassif();

        switch (instanceRange) {

            case "ending":
                console.log("ending!");
            case "mid":
                console.log("mid!");
            case "start":
                console.log("start!");
        }

        switch (stateRange) {

            case "vgood":
                console.log("vgood state!");
            case "good":
                console.log("good state!");
            case "bad":
                console.log("bad state :(");
        }

        // GUARDAR instancia y state en local
        lastChoice = buttonSelect;
        storeData();
        console.log("instance: " + instance + ", state: " + state + " last choice: " + buttonSelect)
    }

    if (state < 1) {
        $("body").html(`<div class='perdiste'>
                            <p>Perdiste!</p>
                         </div>`);
        resetStorage();
    }

}

var request = undefined;

// API

$(document).ready(function () {

    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather?id=3433955&mode=html&units=metric&appid=6392f1c234cee69be56b94eeec698c27',
        type: "GET",
        dataType: "jsonp",

        success: function(data) {
            console.log(data);
            request = data;
            $(".clima").append(`<p> ${request['main']['temp'].toFixed(1)}°C </p>`)
        }
    });
});


// $(".clima").append(`<p>${request['main']['temp']}</p>`)

