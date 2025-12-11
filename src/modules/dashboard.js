
// Módulo  dashboard, perfil y vistas principales del usuario

/*  selector de rutas con el diagnóstico */
export function showRouteSelection(userData, bottomNav, setView, createRouteCard) {
  bottomNav.classList.remove("hidden");
  
  const welcomeText = userData.recommendedRoute
    ? `<p class="text-lg font-semibold text-secondary-childfund mb-4 p-3 bg-accent-childfund bg-opacity-20 border-l-4 border-primary-childfund rounded-md">¡Hola ${userData.name}! Tu emprendimiento está en etapa inicial. <span class="font-bold text-primary-childfund">Te recomendamos empezar por: ${userData.recommendedRoute}</span>.</p>`
    : `<p class="text-lg font-semibold text-gray-800 mb-4">Bienvenido/a al menú principal, ${userData.name}.</p>`;

  const routesHTML = `
    <h2 class="text-3xl font-extrabold text-secondary-childfund mb-6">Tu Ruta de emprendimiento</h2>
    ${welcomeText}
    <div class="space-y-6">
      ${createRouteCard(
        "Ruta 1",
        "Estoy Empezando",
        "Pre-Incubación",
        "Crea las bases de tu modelo de negocio y valida tu idea.",
        "50%",
        "M1",
        userData
      )}
      ${createRouteCard(
        "Ruta 2",
        "Tengo un Negocio",
        "Incubación",
        "Aprende a calcular costos, gestionar ventas y formalizarte.",
        "15%",
        "M2",
        userData
      )}
      ${createRouteCard(
        "Ruta 3",
        "Quiero Crecer",
        "Post-Incubación",
        "Estrategias de expansión, inversión y gestión de equipos.",
        "0%",
        "M3",
        userData
      )}
    </div>
  `;
  setView(routesHTML);
}

/*  formulario de diagnóstico inicial */
export function showDiagnosisForm(userData, setView, showRouteSelection) {
  const questions = [
    "¿Ya vendes tu producto o servicio a clientes reales?",
    "¿Tienes un registro claro de tus ingresos y gastos (aunque sea en un cuaderno)?",
    "¿Ya has definido el precio de tu producto o servicio calculando tus costos?",
    "¿Sabes exactamente quién es tu cliente ideal (edad, dónde compra, etc.)?",
  ];

  let currentIndex = 0;

  const sliderHTML = `
    <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 class="text-2xl font-bold text-primary-childfund mb-4">¡Queremos Conocerte, ${
        userData.name || ""
      }!</h2>
      <p class="text-gray-600 mb-6">Responde estas 4 preguntas para que podamos recomendarte la ruta ideal para tu emprendimiento.</p>
      <form id="diagnosisSliderForm" onsubmit="event.preventDefault(); processDiagnosisSlider()">
        <div id="questionContainer" class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10 mb-4">
          <p id="questionText" class="font-semibold text-secondary-childfund mb-2"></p>
          <div class="flex space-x-4">
            <label class="inline-flex items-center">
              <input type="radio" name="answer" value="yes" required class="form-radio text-primary-childfund h-4 w-4">
              <span class="ml-2 text-secondary-childfund">Sí</span>
            </label>
            <label class="inline-flex items-center">
              <input type="radio" name="answer" value="no" class="form-radio text-primary-childfund h-4 w-4">
              <span class="ml-2 text-secondary-childfund">No</span>
            </label>
          </div>
        </div>
        <div class="flex justify-between">
          <button type="button" id="prevBtn" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400" disabled>Anterior</button>
          <button type="button" id="nextBtn" class="bg-primary-childfund text-white px-4 py-2 rounded-lg hover:bg-secondary-childfund">Siguiente</button>
        </div>
        <button type="submit" id="submitBtn" class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300 hidden">
          Analizar mi Etapa
        </button>
      </form>
    </div>
  `;

  setView(sliderHTML);

  const questionText = document.getElementById("questionText");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");
  const answers = Array(questions.length).fill(null);

  function updateQuestion() {
    questionText.textContent = `${currentIndex + 1}. ${questions[currentIndex]}`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.style.display = currentIndex === questions.length - 1 ? "none" : "inline-block";
    submitBtn.style.display = currentIndex === questions.length - 1 ? "block" : "none";
    const previousAnswer = answers[currentIndex];
    const radios = document.querySelectorAll('input[name="answer"]');
    radios.forEach((r) => (r.checked = r.value === previousAnswer));
  }

  prevBtn.onclick = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) answers[currentIndex] = selected.value;
    if (currentIndex > 0) currentIndex--;
    updateQuestion();
  };

  nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Por favor selecciona una opción antes de continuar.");
      return;
    }
    answers[currentIndex] = selected.value;
    currentIndex++;
    updateQuestion();
  };

  function processDiagnosisSlider() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) answers[currentIndex] = selected.value;
    const yesCount = answers.filter((a) => a === "yes").length;
    let recommendedRoute = "Ruta 1";
    if (yesCount >= 4) recommendedRoute = "Ruta 3";
    else if (yesCount >= 2) recommendedRoute = "Ruta 2";
    userData.recommendedRoute = recommendedRoute;
    showRouteSelection();
  }

  window.processDiagnosisSlider = processDiagnosisSlider;
  updateQuestion();
}

/*  perfil del usuario */
export function showProfile(userData, bottomNav, setView) {
  let medalsHTML = "";
  if (userData.progress) {
    for (const [moduleId, progress] of Object.entries(userData.progress)) {
      if (progress >= 100) {
        medalsHTML += `<div class="bg-yellow-300 text-secondary-childfund px-3 py-1 rounded-full inline-block mr-2 mb-2">🏅 ${moduleId} Completado</div>`;
      }
    }
  }
  
  bottomNav.classList.remove("hidden");
  
  const profileHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Mi Perfil</h2>
      <div class="flex flex-col items-center mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-childfund to-accent-childfund rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4 shadow-lg">
          ${userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
        </div>
        <h3 class="text-2xl font-bold text-secondary-childfund">${
          userData.name || "Usuario"
        }</h3>
        <p class="text-gray-500">${userData.email || "usuario@email.com"}</p>
      </div>
      <div class="space-y-4">
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Ciudad</p>
          <p class="font-semibold text-secondary-childfund">${
            userData.city || "No especificada"
          }</p>
        </div>
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Edad</p>
          <p class="font-semibold text-secondary-childfund">${
            userData.age || "No especificada"
          } años</p>
        </div>
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Rubro</p>
          <p class="font-semibold text-secondary-childfund">${
            userData.rubro || "No especificado"
          }</p>
        </div>
        <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Ruta Recomendada</p>
          <p class="font-semibold text-primary-childfund">${
            userData.recommendedRoute || "Pendiente de diagnóstico"
          }</p>
        </div>
        <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <div>
            <h3 class="font-semibold mb-2">Mis Logros:</h3>
            ${medalsHTML || "<p>No has completado ningún módulo todavía.</p>"}
          </div>
        </div>
      </div>
      <button class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
        Editar Perfil
      </button>
    </div>
  `;
  setView(profileHTML);
}

/* notificaciones del usuario */
export function showNotifications(setView, showHome) {
  const notificationsHTML = `
    <div class="p-4">
      <h2 class="text-3xl font-extrabold text-secondary-childfund mb-6">🔔 Notificaciones</h2>
      <div class="space-y-4">
        <div class="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
          <p class="font-semibold text-gray-800">¡Nuevos mensajes en Foros!</p>
          <p class="text-sm text-gray-600">Revisa las respuestas de tu pregunta sobre Marketing Digital.</p>
        </div>
        <div class="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
          <p class="font-semibold text-gray-800">¡Tu mentor te ha asignado una tarea!</p>
          <p class="text-sm text-gray-600">Tienes 2 días para completar el "Plan de Costos".</p>
        </div>
        <div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
          <p class="font-semibold text-gray-800">Recuerda tu cuota de Fondo Semilla</p>
          <p class="text-sm text-gray-600">El próximo pago vence en 7 días.</p>
        </div>
      </div>
      <button onclick="showHome()" class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
        Volver al Inicio
      </button>
    </div>
  `;
  setView(notificationsHTML);
}

/* Actualiza el perfil del usuario en el sidebar y header */
export function updateSidebarProfile(userData) {
  if (userData.name) {
    const initial = userData.name.charAt(0).toUpperCase();

    // 1. Actualiza el perfil en el Sidebar
    const userNameEl = document.getElementById("userName");
    const userCityEl = document.getElementById("userCity");
    const userInitialEl = document.getElementById("userInitial");
    
    if (userNameEl) userNameEl.textContent = userData.name;
    if (userCityEl) userCityEl.textContent = userData.city || "Ciudad";
    if (userInitialEl) userInitialEl.textContent = initial;

    // 2. Actualiza el perfil en el Header
    const headerInitialElement = document.getElementById("headerUserInitial");
    if (headerInitialElement) {
      headerInitialElement.textContent = initial;
    }
  }
}


/*  modal de insignia completada */
export function showBadgeModal(moduleId, showRouteSelection) {
  const badgeModal = `
    <div id="badgeModal" class="fixed inset-0 flex bg-black/50 backdrop-blur-sm z-50 justify-center items-center">
      <div class="bg-white w-96 rounded-2xl shadow-2xl p-8 text-center animate-bounce">
        <div class="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <span class="text-5xl">🏆</span>
        </div>
        <h2 class="text-2xl font-bold text-primary-childfund mb-2">¡Felicitaciones!</h2>
        <p class="text-gray-700 mb-4">Has completado el módulo ${moduleId}</p>
        <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-4">
          <p class="font-semibold text-secondary-childfund">🎖️ Nueva Insignia Desbloqueada</p>
        </div>
        <button onclick="closeBadgeModal()" class="w-full bg-primary-childfund text-white py-3 rounded-xl font-bold hover:bg-secondary-childfund transition">
          Continuar
        </button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", badgeModal);
}


/* Cierra el modal de insignia */
export function closeBadgeModal(showRouteSelection) {
  const modal = document.getElementById("badgeModal");
  if (modal) modal.remove();
  showRouteSelection();
}