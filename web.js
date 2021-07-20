const web = [{
        id: 0,
        question: "Nombre?",
        botonA: {
            dialog: "",
            answer: "",
            stateNumber: null,
            dialogStateChange() {
            }
        },
        botonB: {
            dialog: "",
            answer: "",
            stateNumber: null,
            dialogStateChange() {
            }
        },
        botonC: {
            dialog: "",
            answer: "",
            stateNumber: null,
            dialogStateChange() {
            }
        },
        botonD: {
            dialog: "",
            answer: "",
            stateNumber: null,
            dialogStateChange() {
            }
        }
    },
    {
        id: 1,
        question: "Primera pregunta",
        botonA: {
            dialog: "Dialogo A de la instancia 1",
            answer: "Respuesta del dialogo A de la instancia 1",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 1",
            answer: "Respuesta del dialogo B de la instancia 1",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 1",
            answer: "Respuesta del dialogo C de la instancia 1",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 1",
            answer: "Respuesta del dialogo D de la instancia 1",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 2,
        question: "Segunda pregunta",
        botonA: {
            dialog: "Dialogo A de la instancia 2 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 2",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 2 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 2",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 2 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 2",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 2 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 2",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 3,
        question: "Pregunta de la instancia 3",
        botonA: {
            dialog: "Dialogo A de la instancia 3 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 3",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 3 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 3",
            stateNumber: -4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 3 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 3",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 3 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 3",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 4,
        question: "Pregunta de la instancia 4",
        botonA: {
            dialog: "Dialogo A de la instancia 4 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 4",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 4 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 4",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 4 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 4",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 4 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 4",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 5,
        question: "Pregunta de la instancia 5",
        botonA: {
            dialog: "Dialogo A de la instancia 5 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 5",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 5 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 5",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 5 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 5",
            stateNumber: 4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 5 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 5",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 6,
        question: "Pregunta de la instancia 6",
        botonA: {
            dialog: "Dialogo A de la instancia 6 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 6",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 6 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 6",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 6 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 6",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 6 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 6",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 7,
        question: "Pregunta de la instancia 7",
        botonA: {
            dialog: "Dialogo A de la instancia 7 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 7",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 7 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 7",
            stateNumber: -4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 7 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 7",
            stateNumber: 4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 7 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 7",
            stateNumber: 5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 8,
        question: "Pregunta de la instancia 8",
        botonA: {
            dialog: "Dialogo A de la instancia 8 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 8",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 8 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 8",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 8 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 8",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 8 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 8",
            stateNumber: -4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 9,
        question: "Pregunta de la instancia 9",
        botonA: {
            dialog: "Dialogo A de la instancia 9 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 9",
            stateNumber: 4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 9 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 9",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 9 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 9",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 9 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 9",
            stateNumber: -1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 10,
        question: "Pregunta de la instancia 10",
        botonA: {
            dialog: "Dialogo A de la instancia 10 recuperado desde un objeto",
            answer: "Respuesta del dialogo A de la instancia 10",
            stateNumber: 0,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Dialogo B de la instancia 10 recuperado desde un objeto",
            answer: "Respuesta del dialogo B de la instancia 10",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Dialogo C de la instancia 10 recuperado desde un objeto",
            answer: "Respuesta del dialogo C de la instancia 10",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Dialogo D de la instancia 10 recuperado desde un objeto",
            answer: "Respuesta del dialogo D de la instancia 10",
            stateNumber: 4,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
];