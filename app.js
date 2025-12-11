// Utilidades
import {
  elements,
  setView,
  toggleSidebar,
  showMainUI,
  hideMainUI,
  openModal,
  closeModal,
  toggleSubmenu,
  toggleTextContent,
  initDOMListeners,
} from "./src/utils/dom.js";

import {
  getUserData,
  setUserData,
  resetUserData,
  updateSidebarProfile,
  saveModuleProgress as saveModuleProgressState,
  generateMedalsHTML,
  getUserSummary,
} from "./src/utils/state.js";

import { showAdminLogin, processAdminLogin } from "./src/modules/admin.js";

// Módulos de contenido educativo
import { showModuleContent, showQuizModule,showSoftSkillModule, showSoftSkillsMenu  } from "./src/modules/content.js";

// Módulos de comunidad
import {
  showCommunity,
  showEvents,
  showMentorship,
  requestMentorship,closeMentorshipModal  
} from "./src/modules/community.js";

// Módulos de Fondo Semilla
import {
  showFondoSemilla,
  showFondoApplication,
  submitFondoApplication,
} from "./src/modules/fondo-semilla.js";



function showWelcome() {
  elements.bottomNav.classList.add("hidden");
  elements.sidebar.classList.add("hidden");
  elements.appHeader.classList.add("hidden");

  const welcomeHTML = `
    <div class="relative min-h-screen p-4">
      <button onclick="showAdminLogin()" class="absolute top-4 right-4 text-primary-childfund font-semibold py-2 px-4 rounded-full hover:bg-primary-childfund hover:text-white transition duration-300 border border-primary-childfund text-xs sm:text-sm">
          Administración
      </button>
      <div class="flex flex-col items-center justify-center h-full text-center mt-20">
        <div class="mb-6 w-24 h-24 bg-gradient-to-br from-primary-childfund to-secondary-childfund rounded-full shadow-lg flex items-center justify-center">
          <span class="text-white text-4xl font-bold">CF</span>
        </div>
        <h2 class="text-3xl font-extrabold text-secondary-childfund mb-4">¡Bienvenido/a a EmprendeChildFund!</h2>
        <p class="text-gray-600 mb-8 max-w-sm">Tu plataforma digital para convertir tu esfuerzo en un negocio sostenible, adaptada para ti.</p>
        <div class="space-y-4 w-full max-w-xs">
          <button onclick="showRegistration()" class="w-full bg-primary-childfund text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-secondary-childfund transition duration-300">
            Crear Cuenta
          </button>
          <button onclick="showLogin()" class="w-full bg-white text-primary-childfund font-bold py-3 px-8 rounded-full shadow-lg border-2 border-primary-childfund hover:bg-accent-childfund hover:bg-opacity-10 transition duration-300">
            Ya tengo cuenta
          </button>
        </div>
      </div>
    </div>
  `;
  setView(welcomeHTML);
}

function showNotifications() {
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
      <button onclick="showRouteSelection()" class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
        Volver al Inicio
      </button>
    </div>
  `;
  setView(notificationsHTML);
}

// Autenticacion y registro

function showLogin() {
  const loginHTML = `
    <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 class="text-2xl font-bold text-primary-childfund mb-6">Iniciar Sesión</h2>
      <form id="loginForm" onsubmit="event.preventDefault(); processLogin()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Correo Electrónico</label>
          <input type="email" id="loginEmail" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-secondary-childfund">Contraseña</label>
          <input type="password" id="loginPassword" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
          Iniciar Sesión
        </button>
        <button type="button" onclick="showWelcome()" class="w-full mt-3 text-gray-600 font-semibold py-2 hover:text-primary-childfund transition duration-300">
          Volver
        </button>
      </form>
    </div>
  `;
  setView(loginHTML);
}

function processLogin() {
  setUserData({
    name: "Usuario Registrado",
    email: document.getElementById("loginEmail").value,
    city: "Santa Cruz",
    age: "25",
    rubro: "Comida",
    recommendedRoute: "Ruta 2",
  });
  updateSidebarProfile();
  showMainUI();
  showRouteSelection();
}

function showRegistration() {
  const registrationHTML = `
    <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
      <button onclick="showWelcome()" class="mt-8 text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver
      </button>
      <h2 class="text-2xl font-bold text-primary-childfund mb-6">Crea tu usuario</h2>
      <form id="registrationForm" onsubmit="event.preventDefault(); processRegistration()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Nombre Completo</label>
          <input type="text" id="regName" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Edad</label>
          <input type="number" id="regAge" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Ciudad / Municipio</label>
          <input type="text" id="regCity" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Rubro del Emprendimiento</label>
          <select id="regRubro" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border appearance-none focus:border-primary-childfund focus:ring-primary-childfund">
            <option value="">Selecciona tu rubro</option>
            <option value="Comida">Comida y Bebidas</option>
            <option value="Artesanía">Artesanía / Manualidades</option>
            <option value="Servicios">Servicios (ej. peluquería, reparación)</option>
            <option value="Ventas">Ventas y Comercio</option>
            <option value="Otros">Otros</option>
          </select>
        </div>
        <div class="mt-8 mb-4">
          <h3 class="text-lg font-semibold text-secondary-childfund mb-4">Datos de Acceso</h3>
          <label class="block text-sm font-medium text-secondary-childfund">Correo Electrónico</label>
          <input type="email" id="regEmail" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-secondary-childfund">Contraseña</label>
          <input type="password" id="regPassword" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-primary-childfund focus:ring-primary-childfund">
        </div>
        <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
          Crear Cuenta y Continuar
        </button>
      </form>
    </div>
  `;
  setView(registrationHTML);
}

function processRegistration() {
  setUserData({
    name: document.getElementById("regName").value,
    age: document.getElementById("regAge").value,
    city: document.getElementById("regCity").value,
    rubro: document.getElementById("regRubro").value,
    email: document.getElementById("regEmail").value,
  });
  updateSidebarProfile();
  showMainUI();
  showDiagnosisForm();
}

function logout() {
  if (confirm("¿Deseas cerrar sesión?")) {
    resetUserData();
    updateSidebarProfile();
    showWelcome();
    if (elements.sidebar.classList.contains("open")) {
      toggleSidebar();
    }
  }
}

// Diagnostico y rutas

function showDiagnosisForm() {
  const userData = getUserData();
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
    questionText.textContent = `${currentIndex + 1}. ${
      questions[currentIndex]
    }`;
    prevBtn.disabled = currentIndex === 0;
    nextBtn.style.display =
      currentIndex === questions.length - 1 ? "none" : "inline-block";
    submitBtn.style.display =
      currentIndex === questions.length - 1 ? "block" : "none";
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
    setUserData({ recommendedRoute });
    showRouteSelection();
  }

  window.processDiagnosisSlider = processDiagnosisSlider;
  updateQuestion();
}

function showRouteSelection() {
  const userData = getUserData();
  elements.bottomNav.classList.remove("hidden");

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
        "M1"
      )}
      ${createRouteCard(
        "Ruta 2",
        "Tengo un Negocio",
        "Incubación",
        "Aprende a calcular costos, gestionar ventas y formalizarte.",
        "15%",
        "M2"
      )}
      ${createRouteCard(
        "Ruta 3",
        "Quiero Crecer",
        "Post-Incubación",
        "Estrategias de expansión, inversión y gestión de equipos.",
        "0%",
        "M3"
      )}
    </div>
  `;
  setView(routesHTML);
}

function createRouteCard(title, subtitle, stage, description, progress, id) {
  const userData = getUserData();
  const isRecommended =
    userData.recommendedRoute === title
      ? "border-primary-childfund shadow-xl"
      : "border-gray-200";
  const progressValue = parseInt(progress.replace("%", ""));

  return `
    <div onclick="showModuleContent('${id}')" class="route-card bg-white p-6 rounded-xl border-2 ${isRecommended} cursor-pointer">
      <div class="flex justify-between items-start mb-3">
        <h3 class="text-xl font-bold text-secondary-childfund">${title}: ${subtitle}</h3>
        <span class="text-sm font-medium text-gray-500 bg-primary-childfund bg-opacity-20 px-3 py-1 rounded-full">
          ${stage}
        </span>
      </div>
      <p class="text-gray-500 mb-4 text-sm">${description}</p>
      <div class="mt-4">
        <p class="text-xs font-medium text-secondary-childfund mb-1">Progreso Total: ${progress}</p>
        <div class="w-full bg-gray-200 rounded-full h-2.5">
          <div class="bg-gradient-to-r from-primary-childfund to-accent-childfund h-2.5 rounded-full" style="width: ${progressValue}%"></div>
        </div>
      </div>
    </div>
  `;
}

// Perfil (Muestra la información de perfil del usuario, sus logros y ruta recomendada)

function showProfile() {
  const summary = getUserSummary();
  const medalsHTML = generateMedalsHTML();

  elements.bottomNav.classList.remove("hidden");

  const profileHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Mi Perfil</h2>
      <div class="flex flex-col items-center mb-6">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-childfund to-accent-childfund rounded-full flex items-center justify-center text-white font-bold text-4xl mb-4 shadow-lg">
          ${summary.name.charAt(0).toUpperCase()}
        </div>
        <h3 class="text-2xl font-bold text-secondary-childfund">${
          summary.name
        }</h3>
        <p class="text-gray-500">${summary.email}</p>
      </div>
      <div class="space-y-4">
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Ciudad</p>
          <p class="font-semibold text-secondary-childfund">${summary.city}</p>
        </div>
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Edad</p>
          <p class="font-semibold text-secondary-childfund">${
            summary.age
          } años</p>
        </div>
        <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Rubro</p>
          <p class="font-semibold text-secondary-childfund">${summary.rubro}</p>
        </div>
        <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <p class="text-sm text-secondary-childfund opacity-80">Ruta Recomendada</p>
          <p class="font-semibold text-primary-childfund">${
            summary.recommendedRoute
          }</p>
        </div>
        <div class="p-4 bg-primary-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
          <h3 class="font-semibold mb-2">Mis Logros:</h3>
          ${medalsHTML}
        </div>
      </div>
      <button class="w-full mt-6 bg-primary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-secondary-childfund transition duration-300">
        Editar Perfil
      </button>
    </div>
  `;
  setView(profileHTML);
}

function openRecursosModal() {
  openModal("recursosModal");
}

function closeRecursosModal() {
  closeModal("recursosModal");
}

function openRecursosModal1() {
  openModal("recursosModal1");
}

function closeRecursosModal1() {
  closeModal("recursosModal1");
}

function showBadgeModal(moduleId) {
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

function closeBadgeModal() {
  const modal = document.getElementById("badgeModal");
  if (modal) modal.remove();
  showRouteSelection();
}

function handleSaveModuleProgress(moduleId, progressPercent) {
  // const badgeName = saveModuleProgress(moduleId, progressPercent);
  const badgeName = saveModuleProgressState(moduleId, progressPercent);
  if (badgeName) {
    showBadgeModal(moduleId);
  } else {
    alert(
      "¡Avance guardado! Has completado el " + progressPercent + "% del módulo."
    );
  }
}

function toggleProfileMenu() {
  const menu = document.getElementById("profileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

window.toggleSidebar = toggleSidebar;
window.toggleSubmenu = toggleSubmenu;
window.toggleTextContent = toggleTextContent;
window.toggleProfileMenu = toggleProfileMenu;
window.showWelcome = showWelcome;
window.showNotifications = showNotifications;
window.showLogin = showLogin;
window.processLogin = processLogin;
window.showRegistration = showRegistration;
window.processRegistration = processRegistration;
window.showAdminLogin = showAdminLogin;
window.processAdminLogin = processAdminLogin;
window.showDiagnosisForm = showDiagnosisForm;
window.showRouteSelection = showRouteSelection;
window.showModuleContent = showModuleContent;
window.showQuizModule = showQuizModule;
window.showCommunity = showCommunity;
window.showEvents = showEvents;
window.showMentorship = showMentorship;
window.requestMentorship = requestMentorship;
window.showProfile = showProfile;
window.showFondoSemilla = showFondoSemilla;
window.showFondoApplication = showFondoApplication;
window.submitFondoApplication = submitFondoApplication;
window.logout = logout;
window.openRecursosModal = openRecursosModal;
window.closeRecursosModal = closeRecursosModal;
window.openRecursosModal1 = openRecursosModal1;
window.closeRecursosModal1 = closeRecursosModal1;
window.showBadgeModal = showBadgeModal;
window.closeBadgeModal = closeBadgeModal;
window.saveModuleProgress = handleSaveModuleProgress;
window.closeMentorshipModal = closeMentorshipModal;
window.showSoftSkillModule = showSoftSkillModule;
window.showSoftSkillsMenu = showSoftSkillsMenu;

window.onload = () => {
  initDOMListeners();
  showWelcome();
};
