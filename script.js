console.log("script OK");

var instance = 1;
var state = 10;
var playerName = "";

// FUNCION PARA GUARDAR EL NOMBRE, Y OCULATAR EL INPUT
function clickName() {
    console.log('Button OK');
    let name = document.getElementById("nameForm").value;
    document.getElementById("nameDiv").innerHTML = name;
    console.log('nombre ingresado: ' + name);
    playerName = name;
    console.log('nombre guardado: ' + playerName);
};  


// FUNCION QUE DETERMINA QUE HACE CADA BOTON
function buttonPress(buttonSelect) {

    if (playerName != "" && instance <= 10) {

        let dialog1Show = document.getElementById("dialog1Show");
        let dialog2Show = document.getElementById("dialog2Show");
        let dialog3Show = document.getElementById("dialog3Show");
        let dialog4Show = document.getElementById("dialog4Show");
        let anwerShow = document.getElementById("answerShow");
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
                anwerShow.innerHTML = web[instance - 1].botonA.answer;
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
                anwerShow.innerHTML = web[instance - 1].botonB.answer;
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
                anwerShow.innerHTML = web[instance - 1].botonC.answer;
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
                anwerShow.innerHTML = web[instance - 1].botonD.answer;
                questionShow.innerHTML = web[instance - 1].question;
                web[instance - 1].botonA.dialogStateChange();
                statisticsShow.innerHTML = state;
                break;
        }
        // pasa a la siguiente instancia
        instance++;
    }

};