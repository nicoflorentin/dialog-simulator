console.log("script OK");

//////////////////////////////
// DECLARACION DE VARIABLES //
//////////////////////////////

let playable = false;
let instance = 0;
let state = 10;
let playerName = localStorage.getItem("playerName");

let dialog1Show = document.getElementById("dialog1Show");
let dialog2Show = document.getElementById("dialog2Show");
let dialog3Show = document.getElementById("dialog3Show");
let dialog4Show = document.getElementById("dialog4Show");
let answerShow = document.getElementById("answerShow");
let questionShow = document.getElementById("questionShow");
let statisticsShow = document.getElementById("statisticsShow");

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
    console.log("datos cargados!")
    eraseForm();
    buttonPress("showcurrent");
}

///////////////
// FUNCIONES //
///////////////

// FUNCION GUARDAR EL NOMBRE, MOSTRAR NOMBRE Y OCULTAR INPUT
function submitName() {

    // recuperar nombre del input
    let nameValue = document.getElementById("nameForm").value;
    // guardar nombre en variable global y en storage
    playerName = nameValue;


    if (playerName != "") {

        playable = true;
        eraseForm();
        instance++;
        buttonPress("showcurrent");
        localStorage.setItem('playerName', playerName);
        localStorage.setItem("instance", instance);
        localStorage.setItem("state", state);

    } else {

        alert("ingresá nombre válido");
        playable = false;
    }
}

// FUNCION BOTON NUEVO JUEGO
function newGame() {

    resetStorage();
    instance = 0;
    state = 10;
    buttonPress("newgame");
    playable = false;
    showForm();

    console.log("new game! instance " + instance + " state " + state)
}

// FUNCION PARA GUARDAR DATOS

function storeData() {

    localStorage.setItem("instance", instance);
    localStorage.setItem("state", state);
}

// FUNCION RESETEAR STORAGE
function resetStorage() {

    localStorage.setItem('instance', 0);
    localStorage.setItem('state', 10);
    localStorage.setItem('playerName', "");
}

// FUNCION ELIMINAR FORMULARIO
function eraseForm() {

    // eliminar formulario
    $("#nameDiv").remove();
    // agregar name al dom
    $("#headBar").append(`<p>${playerName}</p>`);
}

// FUNCION INSERTAR FORMULARIO
function showForm() {

    let div = document.getElementById("headBar")
    div.innerHTML = `<p class="title">Name</p>
                        <div class= "headBar__flex nes-field" id="nameDiv">
                            <input type="text" id="nameForm" name="nameForm" class="nes-input headBar__input" placeholder="Input name to begin">
                            <input class="nes-btn is-primary" type="button" onclick="submitName()" value="Enter">
                        </div>`;
}

// FUNCION QUE DETERMINA QUE HACE CADA BOTON
function buttonPress(buttonSelect) {

    noinstancemod:
    if (instance <= 10 && playable) {

        switch (buttonSelect) {
            case "a":
                instance++
                console.log("boton A, intancia " + instance);
                // imprimo en el html los dialogos a elegir
                dialog1Show.innerHTML = web[instance].botonA.dialog;
                dialog2Show.innerHTML = web[instance].botonB.dialog;
                dialog3Show.innerHTML = web[instance].botonC.dialog;
                dialog4Show.innerHTML = web[instance].botonD.dialog;
                // imprimo en el html la respuesta al dialogo
                answerShow.innerHTML = web[instance - 1].botonA.answer;
                questionShow.innerHTML = web[instance].question;
                // llamo a la funcion del objeto con su sumador propio y modifico el status
                web[instance].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "b":
                instance++
                console.log("boton B, intancia " + instance);
                dialog1Show.innerHTML = web[instance].botonA.dialog;
                dialog2Show.innerHTML = web[instance].botonB.dialog;
                dialog3Show.innerHTML = web[instance].botonC.dialog;
                dialog4Show.innerHTML = web[instance].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonB.answer;
                questionShow.innerHTML = web[instance].question;
                web[instance].botonB.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "c":
                instance++
                console.log("boton C, intancia " + instance);
                dialog1Show.innerHTML = web[instance].botonA.dialog;
                dialog2Show.innerHTML = web[instance].botonB.dialog;
                dialog3Show.innerHTML = web[instance].botonC.dialog;
                dialog4Show.innerHTML = web[instance].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonC.answer;
                questionShow.innerHTML = web[instance].question;
                web[instance].botonC.dialogStateChange();
                statisticsShow.innerHTML = state;
                break

            case "d":
                instance++
                console.log("boton D, intancia " + instance);
                dialog1Show.innerHTML = web[instance].botonA.dialog;
                dialog2Show.innerHTML = web[instance].botonB.dialog;
                dialog3Show.innerHTML = web[instance].botonC.dialog;
                dialog4Show.innerHTML = web[instance].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonD.answer;
                questionShow.innerHTML = web[instance].question;
                web[instance].botonD.dialogStateChange();
                statisticsShow.innerHTML = state;
                break

            case "newgame":
                console.log("new game!, ", "instancia " + instance + ", state " + state);
                dialog1Show.innerHTML = web[0].botonA.dialog;
                dialog2Show.innerHTML = web[0].botonB.dialog;
                dialog3Show.innerHTML = web[0].botonC.dialog;
                dialog4Show.innerHTML = web[0].botonD.dialog;
                answerShow.innerHTML = web[0].botonD.answer;
                questionShow.innerHTML = web[0].question;
                statisticsShow.innerHTML = state;
                break

            case "showcurrent":
                console.log("show current!, ", "instancia " + instance + ", state " + state);
                dialog1Show.innerHTML = web[instance].botonA.dialog;
                dialog2Show.innerHTML = web[instance].botonB.dialog;
                dialog3Show.innerHTML = web[instance].botonC.dialog;
                dialog4Show.innerHTML = web[instance].botonD.dialog;
                answerShow.innerHTML = "";
                questionShow.innerHTML = web[instance].question;
                statisticsShow.innerHTML = state;
                break
        }

        // guarda instancia y state en local
        storeData();

        console.log("instance: " + instance + ", state: " + state)
    }
    if (state < 1) {
        $("body").append(`<div class='perdiste'>
                            <p>Perdiste!</p>
                         </div>`
                         );
        resetStorage();
    }

}