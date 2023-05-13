let question = document.querySelector("#question");
let questions = [
    "Si pudieses vivir en cualquier lugar, ¿En dónde te gustaría vivir?",
    "¿A qué le tenés miedo?",
    "Si pudieras cambiar algo de vos mismo, ¿qué cambiarías?",
    "Nombra algo que te haga enojar",
    "Nombra un guilty pleasure",
    "¿Cuál es tu serie favorita?",
    "¿Cuál es tu pelicula favorita?",
    "¿Cuál es tu libro favorito?",
    "¿Tenés o te gustaría tener alguna mascota?",
    "¿Te gusta trabajar de lo que trabajas?",
    "¿Qué querías ser de grande cuando eras chico?",
    "¿Cuál es tu deporte favorito?",
    "¿Cuál es tu actor favorito?",
    "¿Cuál es tu actriz favorita?",
    "¿Preferís el invierno o el verano?",
    "¿Cómo es un fin de semana ideal para vos?",
    "Nombra un hábito tuyo que los demás encuentren molesto",
    "Nombra 1 cosa que te guste de tu personalidad",
    "Nombra 1 cosa que te guste de tu cuerpo",
    "¿Qué canción cantarías en un karaoke ahora mismo?",
    "Si sólo pudieras elegir una comida para comer por el resto de tu vida, ¿qué eligirías?",
    "Contá alguna anécdota que no sepamos",
    "¿Cuáles son tus apodos?",
    "¿Hay algo que te gustaría probar y no lo hayas probado aún?",
    "¿Cuál es el mejor regalo que te dieron en tu vida?",
    "¿Cuál es el peor regalo que te dieron en tu vida?",
    "Nombra a alguien con quién estés agradecido y explicá por qué",
    "Nombra a alguien con quién estés enojado y explicá por qué",
    "¿Con cuantas almohadas dormis?",
    "¿Dormís de costado, boca arriba o boca abajo?",
    "Si pudieras cmabiar algo de tu pasado, ¿qué cambiarías?",
    "¿Qué harías si tuvieses dinero ilimitado?",
    "Nombra 1 hobbie",
    "¿Cuál es tu anime favorito?",
    "¿Cual es tu personaje de ficción favorito?",
    "¿Cuál fue la edad que más disfrutaste?",
    "¿A quién te dicen que te pareces?",
    "Nombra 1 canción que te guste",
    "¿Sos más de llegar temprano o tarde?",
    "Nombra algo que a todo el mundo le guste y a vos no",
    "Nombra algo que a nadie le guste y a vos si",
    "¿Te harías algún tatuaje?",
    "Si pudieras tener la atención de todo el mundo por un segundo, ¿qué dirías?",
    "¿Que te gusta hacer cuando estás muy estresado para relajarte?",
    "¿Cuál es el próximo lugar que te gustaría conocer?",
    "Si pudieras ser un animal ¿cuál serías?",
    "Si pudieras ser un animal ¿cuál no serías?",
    "Si pudieras ser una persona famosa quién serías?",
    "Recomenda una película",
    "Recomenda una serie",
    "Recomenda un libro",
    "¿Qué harías si pudieras detener el tiempo cuando quieras?",
    "¿Cómo te gustaría que la gente te recordara?",
    "¿Coca o Pepsi?",
    "¿Vino o cerveza?",
    "¿Dulce o salado?",
    "Nombra algo estupido que hayas hecho alguna vez"
]

const generateQuestion = () => {
    index = Math.floor(Math.random() * questions.length);
    question.innerHTML = questions[index]
}

generateQuestion()

let button = document.querySelector("#next-question");
button.addEventListener("click", generateQuestion)

let flash = document.querySelector("#flash");
setInterval(subliminal,10000)
function subliminal(){
    setTimeout(() => {
        flash.innerHTML = ""
    }, 1);
    flash.innerHTML = "MIRA ONE PIECE"
}
