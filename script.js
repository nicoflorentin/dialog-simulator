console.log("script OK");


//////////////////////////////
// DECLARACION DE VARIABLES //
//////////////////////////////

let playable = false;
let instance = 0;
let state = 10;
let lastChoice = undefined;
let playerName = localStorage.getItem("playerName");
let imgMatrix = ["url(./npc/endBad.png)", "url(./npc/midGood.png)", "url(./npc/startVgood.png)"]
// url(./npc/startGood.png)
let stateRange = undefined;
// animacion
let animSec = 1500;

/////////////////////////////////
// APENAS SE EJECUTA EL CÓDIGO //
/////////////////////////////////

// SI EL NOMBRE ESTA VACIO NO SE PUEDE JUGAR
if (playerName != "") {

    playable = true;
}

// VERIFICAR SI HAY UN NOMBRE DE JUGADOR GUARDADO, RECUPERAR DATOS, BORRAR FORMULARIO DE NOMBRE Y MOSTRAR ESTADO GUARDADO
if (playable) {

    // obtiene los datos de partida guardada del storage
    instance = parseInt(localStorage.getItem("instance"));
    state = parseInt(localStorage.getItem("state"));
    lastChoice = localStorage.getItem("lastChoice")
    console.log("datos cargados!")
    eraseForm();

    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);
    $(".dialogo").css("display","none")
                .fadeIn(animSec);

    // imprime los dialogos correspondientes a los datos cargados
    buttonPress("showcurrent");
} else {

    playable = true;

    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);

    // ejecuta nuevo juego
    buttonPress("newgame");
    // pongo en false para que requiera llenar el formulario
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

        // cuando guarda nombre se vuelve jugable
        playable = true;
        eraseForm();
        instance++;

        $(".scene__respuesta").fadeIn(animSec);
        $("#imgPersonaje").fadeIn(animSec);
        $(".dialogo").css("display","none")
                    .fadeIn(animSec);

        // nuestra los datos de la instancia
        buttonPress("showcurrent");
        // guarda el noimbre en storage
        localStorage.setItem('playerName', playerName);
        // guarda los datos de la instancia
        storeData();

    } else {

        alert("ingresá nombre válido");
        playable = false;
    }
}

//BOTON NUEVO JUEGO
function newGame() {

    // resetea los datos guardados
    resetStorage();
    // resetea las variables
    instance = 0;
    state = 10;

    $("#imgPersonaje").css("display","none");
    $("#imgPersonaje").fadeIn(animSec);
    $(".scene__respuesta").fadeIn(animSec);
    $(".dialogo").css("display","none")
                    .fadeIn(animSec);

    // ejecuta nuevo juego
    buttonPress("newgame");
    playable = false;
    // muestra el formulario
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
    // agregar mnombre al dom
    $("#headBar").append(`<p class="headBar__name">${playerName}</p>`);
}

//MOSTRAR FORMULARIO VACÍO
function showForm() {

    $("#headBar").html(`<p class="title">Name</p>
                        <div class= "headBar__flex nes-field" id="nameDiv">
                            <input type="text" id="nameForm" name="nameForm" class="nes-input headBar__input" placeholder="Input name to begin">
                            <input class="nes-btn is-primary" type="button" onclick="submitName()" value="Enter">
                        </div>`);
}

//DEVUELVE UNA CADENA CON LA URL DE LA IMAGEN LOCAL DEPENDIENDO DEL STATE ACTUAL
function imgOutput() {

    // clasifica los estados en tres strings
    if (state >= 13 && state <= 20) {
        stateRange = 3;
    } else if (state >= 7 && state <= 13){
        stateRange = 2;
    } else if (state >= 1 && state <= 7){
        stateRange = 1;
    }

    return imgMatrix[stateRange - 1];
}

//CLASIFICA INSTANCIAS (funcionalidad a futuro)
// function instanceClassif() {

//     // clasifica las instancias en tres strings
//     if (instance > 7 && state <= 10) {
//         instanceRange = 3;
//     } else if (instance > 3 && state <= 7){
//         instanceRange = 2;
//     } else if (instance >= 1 && state <= 3){
//         instanceRange = 1;
//     }
// }


/////////////////
// ANIMACIONES //
/////////////////

// ANIMACION DE BORRAR DIALOGOS Y RESPUESTAS
// $(".boton").click(

//     function animateScene(){
//         $(".scene__respuesta").css("display","none")
//                     .fadeIn(animSec);
//         $(".dialogo").css("display","none")
//                     .fadeIn(animSec);
//         $(".scene__personaje__img").css("display","none")
//                     .fadeIn(animSec);
//     }
// );

// MANEJA LAS ANIMACIONES DE LA ESCENA

function animateScene(){

    // animaciones de los dialogos
    $(".scene__respuesta").css("display","none")
                .fadeIn(animSec);
    $(".dialogo").css("display","none")
                .fadeIn(animSec);

    // animaciones de la imagen
    $(".scene__personaje__img").css("display","none")
                            .fadeIn(animSec);
    $(".scene__personaje").css("background-image", imgOutput());
    $("#imgPersonaje").fadeIn(animSec);
}



//DETERMINA QUE HACE CADA BOTON
function buttonPress(buttonSelect) {

    if (instance <= 10 && playable) {

        switch (buttonSelect) {
            case "a":
                // paso a la siguiente instancia
                instance++
                console.log("boton A, intancia " + instance);
                // imprimo en el html los dialogos de cada boton
                $("#dialog1Show").html(web[instance].botonA.dialog);
                $("#dialog2Show").html(web[instance].botonB.dialog);
                $("#dialog3Show").html(web[instance].botonC.dialog);
                $("#dialog4Show").html(web[instance].botonD.dialog);
                // imprimo en el html la respuesta al dialogo del boton elegido
                $("#answerShow").html(web[instance - 1].botonA.answer);
                $("#questionShow").html(web[instance].question);
                // llamo a la funcion del objeto con su sumador propio y modifico el status
                web[instance -1].botonA.dialogStateChange();
                // muestro state en pantalla
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
                web[instance -1].botonB.dialogStateChange();
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
                web[instance -1].botonC.dialogStateChange();
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
                web[instance -1].botonD.dialogStateChange();
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

        animateScene()

        // GUARDAR instancia y state en local
        lastChoice = buttonSelect;
        storeData();
        console.log("instance: " + instance + ", state: " + state + " last choice: " + buttonSelect)
    
        resetStorage();

    } else if (instance >10) {

        $("body").html(`<div class='pantallaFinal'>
                            <h1>Llegaste al final!</h1>
                            <p>Éste juego fue desarrollado por <strong>Nicolás Florentín</strong> durante el curso de <strong>JavaScript</strong> en <strong>CoderHouse</strong></p>
                            <p>Basado en el libro Tokio Blues Noewegian Wood escrito por Haruki Murakami</p>
                            <p>Pregunta 2 página 105</p>
                            <p>Pregunta 3 página 149</p>
                            <p>Pregunta 4 página 277</p>
                            <p>Pregunta 5 página 8</p>
                            <p>Pregunta 6 página 78</p>
                            <p>Pregunta 7 página 269</p>
                            <p>Pregunta 8 página 138</p>
                            <p>Pregunta 9 página 292</p>
                            <p>Pregunta 10 página 152</p>
                            <p class="pantallaFinal__gracias">Gracias por jugar!</p>
                         </div>`);

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
            console.log(`data de la api: ${data}`);
            request = data;
            $(".clima").append(`<p> ${request['main']['temp'].toFixed(1)}°C </p>`)
        }
    });
});




// $(".clima").append(`<p>${request['main']['temp']}</p>`)
