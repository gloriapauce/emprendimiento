// src/modules/auth.js
// Módulo de autenticación y gestión de usuarios

/**
 * Muestra la pantalla de bienvenida inicial
 */
export function showWelcome(setView, bottomNav, sidebar, appHeader) {
  bottomNav.classList.add("hidden");
  sidebar.classList.add("hidden");
  appHeader.classList.add("hidden");
  
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

/**
 * Muestra el formulario de inicio de sesión
 */
export function showLogin(setView) {
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

/**
 * Procesa el inicio de sesión
 */
export function processLogin(userData, updateSidebarProfile, showMainUI, showRouteSelection) {
  const email = document.getElementById("loginEmail").value;
  
  // Actualizar datos del usuario
  Object.assign(userData, {
    name: "Usuario Registrado",
    email: email,
    city: "Santa Cruz",
    age: "25",
    rubro: "Comida",
    recommendedRoute: "Ruta 2",
  });
  
  updateSidebarProfile();
  showMainUI();
  showRouteSelection();
}

/**
 * Muestra el formulario de registro
 */
export function showRegistration(setView) {
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

/**
 * Procesa el registro de nuevo usuario
 */
export function processRegistration(userData, updateSidebarProfile, showMainUI, showDiagnosisForm) {
  Object.assign(userData, {
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

/**
 * Muestra el formulario de login administrativo
 */
export function showAdminLogin(setView) {
  const adminLoginHTML = `
    <div class="p-6 bg-white rounded-xl shadow-lg mt-8">
      <h2 class="text-2xl font-bold text-secondary-childfund mb-6">Acceso Administrativo</h2>
      <form id="adminLoginForm" onsubmit="event.preventDefault(); processAdminLogin()">
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund">Usuario / Correo</label>
          <input type="text" id="adminUser" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-secondary-childfund focus:ring-secondary-childfund">
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium text-secondary-childfund">Contraseña</label>
          <input type="password" id="adminPassword" required class="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-3 border focus:border-secondary-childfund focus:ring-secondary-childfund">
        </div>
        <button type="submit" class="w-full bg-secondary-childfund text-white font-bold py-3 rounded-xl shadow-md hover:bg-primary-childfund transition duration-300">
          Ingresar al Panel
        </button>
        <button type="button" onclick="showWelcome()" class="w-full mt-3 text-gray-600 font-semibold py-2 hover:text-secondary-childfund transition duration-300">
          Volver al Inicio
        </button>
      </form>
    </div>
  `;
  setView(adminLoginHTML);
}

/**
 * Procesa el login administrativo
 */
export function processAdminLogin(bottomNav, sidebar, appHeader, showAdminPanel) {
  const adminUser = document.getElementById("adminUser").value;
  const adminPass = document.getElementById("adminPassword").value;
  
  // SIMULACIÓN DE AUTENTICACIÓN: (Usar admin/123 para la demo)
  if (adminUser === "admin" && adminPass === "123") {
    // Ocultar barra de navegación de usuario y mostrar el header
    bottomNav.classList.add("hidden");
    sidebar.classList.add("hidden");
    appHeader.classList.remove("hidden");
    alert("Acceso administrativo exitoso!");
    showAdminPanel();
  } else {
    alert("Credenciales incorrectas. Intenta de nuevo. (Pista: admin/123)");
  }
}

/**
 * Cierra la sesión del usuario
 */
export function logout(userData, updateSidebarProfile, showWelcome, sidebar, toggleSidebar) {
  if (confirm("¿Deseas cerrar sesión?")) {
    // Limpiar datos del usuario
    Object.keys(userData).forEach(key => delete userData[key]);
    
    updateSidebarProfile();
    showWelcome();
    
    if (sidebar.classList.contains("open")) {
      toggleSidebar();
    }
  }
}

/**
 * Muestra la interfaz principal de usuario
 */
export function showMainUI(appHeader, sidebar) {
  appHeader.classList.remove("hidden");
  sidebar.classList.remove("hidden");
}