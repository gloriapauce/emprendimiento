import { setView } from '../utils/dom.js';

/*pantalla de login administrativo */
export function showAdminLogin() {
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

/* Procesa el login administrativo */
export function processAdminLogin() {
  const adminUser = document.getElementById("adminUser").value.trim();
  const adminPass = document.getElementById("adminPassword").value.trim();
  
  const bottomNav = document.getElementById("bottom-nav");
  const sidebar = document.getElementById("sidebar");
  
  if (adminUser.length === 0 || adminPass.length === 0) {
    alert("Por favor ingresa usuario y contraseña");
    return;
  }
  
  bottomNav.classList.add("hidden");
  sidebar.classList.add("hidden");
  document.getElementById("app-header").classList.remove("hidden");
  
  showAdminPanel();
}

/*  panel administrativo principal */
export function showAdminPanel() {
  const adminPanelHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-extrabold text-secondary-childfund mb-6 border-b pb-2">Panel Administrativo</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div class="bg-primary-childfund p-6 rounded-xl text-white shadow-lg">
          <p class="text-sm font-light opacity-90">Emprendedores Activos</p>
          <p class="text-5xl font-bold mt-1">10</p>
          <p class="text-xs mt-3 opacity-80">+2 nuevos este mes</p>
        </div>

        <div class="bg-accent-childfund p-6 rounded-xl text-secondary-childfund shadow-lg">
          <p class="text-sm font-light opacity-90">Fondo Semilla Desembolsado</p>
          <p class="text-3xl font-bold mt-1">Bs. 00,000</p>
          <p class="text-xs mt-3 opacity-80">1 solicitudes activas</p>
        </div>
      </div>

      <h3 class="text-2xl font-bold text-secondary-childfund mt-8 mb-4 border-b pb-1">Solicitudes Fondo Semilla <span class="text-primary-childfund text-sm">(3 Pendientes)</span></h3>
      <div class="space-y-4">
        ${createAdminFondoSemillaCard("Maria P.", "Ventas de Artesanía", "Bs. 5,000", "Pendiente", "bg-yellow-500")}
        ${createAdminFondoSemillaCard("Carlos M.", "Servicios de Reparación", "Bs. 3,000", "Aprobado", "bg-primary-childfund")}
        ${createAdminFondoSemillaCard("Ana G.", "Comida Rápida", "Bs. 5,000", "En Revisión", "bg-gray-400")}
      </div>
      <button class="w-full mt-4 bg-gray-100 text-secondary-childfund py-2 rounded-xl hover:bg-gray-200 transition">Ver Todas las Solicitudes</button>
      

      <h3 class="text-2xl font-bold text-secondary-childfund mt-8 mb-4 border-b pb-1">Progreso de Emprendedores</h3>
      <div class="space-y-4">
        ${createAdminProgressCard("Maria P.", "Ruta 2 (Incubación)", "75%", "Módulo 4: Finanzas", "primary-childfund")}
        ${createAdminProgressCard("Carlos M.", "Ruta 3 (Crecimiento)", "30%", "Módulo 2: Estructura Legal", "secondary-childfund")}
        ${createAdminProgressCard("Ana G.", "Ruta 1 (Pre-Incubación)", "90%", "Taller: Pitch de Venta", "accent-childfund")}
      </div>
      <button class="w-full mt-4 bg-gray-100 text-secondary-childfund py-2 rounded-xl hover:bg-gray-200 transition">Generar Reporte Completo</button>

      <button onclick="showWelcome()" class="w-full mt-8 bg-red-500 text-white font-bold py-3 rounded-xl hover:bg-red-600 transition duration-300">
          Cerrar Sesión Administrativa
      </button>
    </div>
  `;
  setView(adminPanelHTML);
}

/*  tarjeta de solicitud de fondo semilla para el admin */
export function createAdminFondoSemillaCard(name, rubro, monto, status, statusColor = "bg-yellow-500") {
  return `
    <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border">
      <div>
        <p class="font-bold text-secondary-childfund">${name} <span class="text-sm font-normal text-gray-500">(${rubro})</span></p>
        <p class="text-xs text-gray-600">${monto} solicitados</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xs font-semibold text-white px-3 py-1 rounded-full ${statusColor}">${status}</span>
        <button onclick="alert('Acción sobre ${name}')" class="text-primary-childfund hover:text-secondary-childfund">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
      </div>
    </div>
  `;
}

/*  tarjeta de progreso de emprendedor vista admin */
export function createAdminProgressCard(name, route, progress, lastActivity, colorKey) {
  let colorClass = colorKey === "primary-childfund" 
    ? "bg-primary-childfund" 
    : colorKey === "secondary-childfund" 
    ? "bg-secondary-childfund" 
    : "bg-accent-childfund";
    
  return `
    <div class="p-4 bg-white rounded-lg border shadow-sm">
      <p class="font-bold text-secondary-childfund">${name}</p>
      <p class="text-xs text-gray-500 mb-2">${route}</p>
      
      <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
        <div class="${colorClass} h-2.5 rounded-full" style="width: ${progress}"></div>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-xs font-semibold text-gray-700">${progress} Completado</p>
        <p class="text-xs text-gray-500">Último: ${lastActivity}</p>
      </div>
    </div>
  `;
}