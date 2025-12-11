export const quizQuestions = {
  M1: [
    {
      question: "¿Qué significa mi 'Por Qué' al emprender?",
      options: [
        "Es la razón principal que me mueve a empezar un negocio, lo que me hace querer ayudar a otros o mejorar algo, no solo ganar dinero.",
        "Es solo la cantidad de plata que quiero ganar.",
        "Es solamente el producto o servicio que voy a vender.",
      ],
      correctAnswer: 0,
    },
    {
      question: "¿Por qué es importante saber mi 'Por Qué'?",
      options: [
        "Porque me ayuda a seguir adelante cuando haya problemas y tomar buenas decisiones en mi negocio.",
        "Solo es para decir algo bonito.",
        "No importa mientras venda.",
      ],
      correctAnswer: 0,
    },
    {
      question: "¿Cuál de estas frases SÍ es un buen motivo para emprender?",
      options: [
        "Quiero ayudar a las personas ofreciéndoles algo que les haga la vida más fácil o mejor.",
        "Vendo solo porque necesito dinero.",
        "Vendo lo mismo que todos venden, sin pensar en quién lo necesita.",
      ],
      correctAnswer: 0,
    },
  ],

  M2: [
    {
      question:
        "Si vendo un jugo a Bs. 5 y mis costos son Bs. 4, ¿cuánto gano?",
      options: ["Bs. 5", "Bs. 1", "Bs. 4"],
      correctAnswer: 1,
    },
    {
      question: "¿Qué incluye el cálculo de costos?",
      options: [
        "Solo la materia prima",
        "Materia prima, mano de obra, gastos fijos y transporte",
        "Solo el precio de venta",
      ],
      correctAnswer: 1,
    },
    {
      question: "¿Por qué es importante calcular el tiempo de trabajo?",
      options: [
        "No es importante",
        "Porque mi tiempo también vale dinero y debe incluirse en los costos",
        "Solo para saber cuánto tardo",
      ],
      correctAnswer: 1,
    },
  ],

  M3: [
    {
      question: "¿Qué significa 'escalar' un negocio?",
      options: [
        "Vender más productos sin cambiar nada",
        "Crecer de manera estratégica expandiendo a nuevos mercados o canales",
        "Trabajar más horas",
      ],
      correctAnswer: 1,
    },
    {
      question: "¿Cuándo es el momento correcto para buscar inversión?",
      options: [
        "Desde el primer día",
        "Cuando tengo un modelo validado y necesito capital para crecer",
        "Nunca necesito inversión",
      ],
      correctAnswer: 1,
    },
    {
      question: "¿Qué son las alianzas estratégicas?",
      options: [
        "Tener muchos amigos",
        "Colaboraciones con otros negocios que benefician a ambas partes",
        "Competir con otros negocios",
      ],
      correctAnswer: 1,
    },
  ],
};

// Configuración general de los cuestionarios
export const quizConfig = {
  passingScore: 70, 
  showFeedback: true, 
  allowRetry: true, 
  shuffleQuestions: false, 
  shuffleOptions: false, 
};

// Mensajes de retroalimentación según el puntaje
export const feedbackMessages = {
  excellent: {
    min: 90,
    title: "¡Excelente!",
    message: "Has demostrado un dominio excepcional del tema. ¡Felicitaciones!",
    icon: "🏆",
  },
  good: {
    min: 70,
    max: 89,
    title: "¡Muy Bien!",
    message: "Has comprendido bien los conceptos. ¡Continúa así!",
    icon: "🎉",
  },
  needsImprovement: {
    max: 69,
    title: "¡Sigue Practicando!",
    message:
      "Te recomendamos revisar el contenido nuevamente para reforzar tu aprendizaje.",
    icon: "📚",
  },
};
