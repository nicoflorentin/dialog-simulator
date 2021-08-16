const web = [{
        id: 0,
        question: "Hola! Estuve leyendo un libro muy interesante. Lo recorremos juntos, con quien tengo el gusto?",
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
        question: "-Un gusto. Algo que me gusta de la lectura es que puedo hacer abstracción de lo que leo y permitirme reflexionar! Que opinas?",
        botonA: {
            dialog: "Pienso lo mismo! Cada página es una puerta de entrada al pensamiento",
            answer: "-No podría estar mas de acuerdo! Vamos!",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Nunca me había puesto a pensar en eso pero es genial!",
            answer: "-Si, es apasionante! Empecemos...",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "No tengo una opinion formada, no suelo leer libros.",
            answer: "-No hay problema. Seguro cuando temrine esta charla sientas lo contrario. Vamos!",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Uuuhmmm...",
            answer: "-Mmmmm... Bueno, nunca es tarde...",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 2,
        question: `"-La letra era espantosa, lo mismo que la melodía. Cuando se hartó de cantar, Midori se tendió como un gato al sol. Que te ha parecido mi canción?"`,
        botonA: {
            dialog: "Me parece acertada, me gustaría ayudarte con algunos arreglos",
            answer: "-Me parece bonita tal y como es, ",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Es única y original, y refleja fielmente tu personalidad",
            answer: `-Gracias! "no tengo nada" ... Ése es el lema`,
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Es una bonita y delicada canción, la escucharía de nuevo!",
            answer: "-Es lindo saberlo, esta canción tiene mucho de mi",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Me gusta, no sabria decirte por qué",
            answer: "-mmm, algo en tus palabras me dice lo contrario",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 3,
        question: "-Tocó una pieza breve de Bach, un pasaje de una suite. A la luz de la vela, bebiendo vino y escuchando... Mi espíritu fue sosegándose",
        botonA: {
            dialog: "Suelo escuchar Bach, pero tiene mejores piezas en su repertorio, debo decir",
            answer: "-Vamos! todas sus piezas son sensacionales!",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Podrías tocar algo de mi época? Igualmente me ha gustado",
            answer: "-Había elegido esta pieza especialmente para ti...",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Me encanta esta melodía, me hace pensar en la lluvia cayendo suavemente sobre el prado",
            answer: "-Cuando toco ésta canción, a veces me pongo triste",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Siempre es un buen momento para una bonita pieza musical",
            answer: "-Ni que lo digas!",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 4,
        question: "-O sea que cometo una equivocación cuando quiero que alguien me comprenda. Quiero que tú me comprendas, por ejemplo.",
        botonA: {
            dialog: "No nacimos para comprenderlo todo",
            answer: "-Lo que dices es triste y vagamente cierto",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Entiendo que no puedas comprenderme, mi vida es muy distinta",
            answer: "-Eso lo hace más desafiante...",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Si, lo haces. Todos vivimos equivocandonos",
            answer: "-Asumirlo nos sumerge en una derrota incesante",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "No es una equivocación, la gente lo llama amor. Este es tu caso, dado que quieres comprenderme",
            answer: "-Me importa un rábano tu tipo de vida! voy a comprender!",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 5,
        question: "-Volvió a acercarse la misma azafata de antes, y me preguntó si me encontraba mejor",
        botonA: {
            dialog: "Estoy bien, gracias. De pronto me he sentido triste, es sólo eso",
            answer: "-También a mi me sucede a veces, lo comprendo muy bien",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Es normal sentirse triste a veces, no suelo preguntarselo a la gente por ahí",
            answer: "-Es mi trabajo que su viaje sea confortable hasta llegar a tierra",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Sentí un ligero mareo. Ya estoy mejor, gracias",
            answer: "-Los sentimientos descansan mejor en una conversación que dentro de uno mismo, le traigo un vaso con agua",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Ese tipo de preguntas no son de mi agrado",
            answer: "-Disculpe la empatía...",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 6,
        question: "-Cuales son tus principios?",
        botonA: {
            dialog: "Pensar en mi, no complacer a todo el mundo",
            answer: "-Un hombre en comunidad, es un hombre",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Ser un caballero",
            answer: "-Tu eres la persona más honesta que jamás he conocido",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Luchar por lo que uno cree",
            answer: "-Toda lucha es un derecho",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Ser la mejor versión de mi",
            answer: "-Ese camino puede llegar ser frustrante, cuidado",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 7,
        question: "-A veces me digo: ¿Por qué no se esfuerzan estos tíos? Lo único que saben es quejarse",
        botonA: {
            dialog: "En este mundo la gente se mata trabajando",
            answer: "-No es más que trabajo, el real esfuerzo es la iniciativa",
            stateNumber: 5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "En este mundo la gente no quiere esforzarse",
            answer: "-No sólo desconfían del esfuerzo, también lo desconocen",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "En este mundo suceden muchas injusticias",
            answer: "-El mundo no será mas justo a base de quejas",
            stateNumber: -3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Lo que escucho es una queja de pies a cabeza",
            answer: "-Vamos! Esfuerzate!",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 8,
        question: "-Hay dos clases de personas, los que pueden abrir su corazón y los que no",
        botonA: {
            dialog: "A veces temo abrirlo tanto como para que se desarme en pedazos",
            answer: "-El miedo hará que nunca puedas descubrirlo",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Yo debo ser de los que no ¿Cierto?",
            answer: "-Debo ser yo la que responda?",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Que secede cuando lo abres?",
            answer: "-Te curas",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Yo debo encontrar a la persona correcta para abrir mi corazón",
            answer: "-Demasiados esfuerzos buscando, sólo hay que abrirse",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 9,
        question: "-Los dos primeros dias de la regla me encuentro mal. Es preferible no verme",
        botonA: {
            dialog: "Pero como puedo saber que estas en esos dias?",
            answer: "-Me pondré un sombrero rojo, así te enterarás",
            stateNumber: 5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Entonces serás tú la que decida si nos vemos",
            answer: "Asi me parece mejor",
            stateNumber: 2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Pero no puede ir por ahi preguntando cuando llega la regla",
            answer: "Es una pregunta, no más. Como las que venimos haciendo en toda la charla",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Pues que asi sea, ese dia lo tendré libre",
            answer: "Cuando estés mal solo pensaré en mi.",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
    {
        id: 10,
        question: "Te acordarás siempre de que existo y de que he estado a tu lado?",
        botonA: {
            dialog: "Hay cosas que nunca se olvidan",
            answer: "Respuesta del dialogo A de la instancia 10",
            stateNumber: -2,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonB: {
            dialog: "Es mi deber",
            answer: "Respuesta del dialogo B de la instancia 10",
            stateNumber: -5,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonC: {
            dialog: "Me acordaré siempre",
            answer: "Respuesta del dialogo C de la instancia 10",
            stateNumber: 3,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        },
        botonD: {
            dialog: "Por siempre",
            answer: "Respuesta del dialogo D de la instancia 10",
            stateNumber: 1,
            dialogStateChange() {
                state = state + this.stateNumber;
            }
        }
    },
];