console.log("script OK");

//////////////////////////////
// DECLARACION DE VARIABLES //
//////////////////////////////

var instance = 1;
var state = 10;
var playerName = playerName = localStorage.getItem("playerName");

//////////////////////////////
// DECLARACION DE FUNCIONES //
//////////////////////////////

// FUNCION ELIMINAR FORMULARIO
function eraseForm() {

    // eliminar formulario
    let formDiv = document.getElementById("nameDiv");
    formDiv.parentNode.removeChild(formDiv);
    // agregar name al dom
    let headDiv = document.getElementById("headBar");
    let p = document.createElement("P");
    p.innerHTML = playerName;
    headDiv.appendChild(p);
}

// FUNCION GUARDAR EL NOMBRE, MOSTRAR NOMBRE Y OCULTAR INPUT
function storeName() {

    // recuperar nombre del input
    let nameValue = document.getElementById("nameForm").value;
    // guardar nombre en variable global y en storage
    playerName = nameValue;
    localStorage.setItem('playerName', playerName);

    eraseForm();
}

// FUNCION BOTON NUEVO JUEGO
function newGame(){

    // resetea las variables
    localStorage.setItem('instance', 1);
    localStorage.setItem('state', 10);
    localStorage.setItem('playerName', "");
}

console.log(typeof("playerName"));

// FUNCION QUE DETERMINA QUE HACE CADA BOTON
function buttonPress(buttonSelect) {

    if (instance <= 10 && playerName != "") {
        let dialog1Show = document.getElementById("dialog1Show");
        let dialog2Show = document.getElementById("dialog2Show");
        let dialog3Show = document.getElementById("dialog3Show");
        let dialog4Show = document.getElementById("dialog4Show");
        let answerShow = document.getElementById("answerShow");
        let questionShow = document.getElementById("questionShow");
        let statisticsShow = document.getElementById("statisticsShow");

        switch (buttonSelect) {
            case "a":
                console.log("boton A, intancia " + instance);
                // imprimo en el html los dialogos a elegir
                dialog1Show.innerHTML = web[instance - 1].botonA.dialog;
                dialog2Show.innerHTML = web[instance - 1].botonB.dialog;
                dialog3Show.innerHTML = web[instance - 1].botonC.dialog;
                dialog4Show.innerHTML = web[instance - 1].botonD.dialog;
                // imprimo en el html la respuesta al dialogo
                answerShow.innerHTML = web[instance - 1].botonA.answer;
                questionShow.innerHTML = web[instance - 1].question;
                // llamo a la funcion del objeto con su sumador propio y modifico el status
                web[instance - 1].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "b":
                console.log("boton B, intancia " + instance);
                dialog1Show.innerHTML = web[instance - 1].botonA.dialog;
                dialog2Show.innerHTML = web[instance - 1].botonB.dialog;
                dialog3Show.innerHTML = web[instance - 1].botonC.dialog;
                dialog4Show.innerHTML = web[instance - 1].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonB.answer;
                questionShow.innerHTML = web[instance - 1].question;
                web[instance - 1].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "c":
                console.log("boton C, intancia " + instance);
                dialog1Show.innerHTML = web[instance - 1].botonA.dialog;
                dialog2Show.innerHTML = web[instance - 1].botonB.dialog;
                dialog3Show.innerHTML = web[instance - 1].botonC.dialog;
                dialog4Show.innerHTML = web[instance - 1].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonC.answer;
                questionShow.innerHTML = web[instance - 1].question;
                web[instance - 1].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "d":
                console.log("boton D, intancia " + instance);
                dialog1Show.innerHTML = web[instance - 1].botonA.dialog;
                dialog2Show.innerHTML = web[instance - 1].botonB.dialog;
                dialog3Show.innerHTML = web[instance - 1].botonC.dialog;
                dialog4Show.innerHTML = web[instance - 1].botonD.dialog;
                answerShow.innerHTML = web[instance - 1].botonD.answer;
                questionShow.innerHTML = web[instance - 1].question;
                web[instance - 1].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;

            case "new":
                // tratar de recuperar los datos guardados e imprimir dialogos
        }

        // pasa a la siguiente instancia
        instance++;
        // guarda instancia y state en local
        localStorage.setItem("instance", instance);
        localStorage.setItem("state", state)
    }

};


/////////////////////////////////
// APENAS SE EJECUTA EL CÓDIGO //
/////////////////////////////////

// VERIFICAR SI HAY UN NOMBRE GUARDADO, RECUPERAR DATOS Y BORRAR FORMULARIO
if (playerName != "") {

    instance = parseInt(localStorage.getItem("instance"));
    state = parseInt(localStorage.getItem("state"));
    eraseForm();
}