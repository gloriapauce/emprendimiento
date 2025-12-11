// Módulo para foros, eventos y mentoría
import { setView } from '../utils/dom.js';

/* foro de la comunidad */
export function showCommunity() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const communityHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Foros y Comunidad Emprendedora</h2>
      <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-6 border-l-4 border-primary-childfund">
        <p class="font-semibold text-secondary-childfund">¡Conéctate! Comparte lo que aprendiste, resuelve dudas y conoce otras experiencias.</p>
      </div>

      <div class="border-b pb-4 mb-4">
        <p class="text-sm font-bold text-primary-childfund">Kevin M. (La Paz)</p>
        <p class="text-secondary-childfund my-2">Acabo de terminar el módulo de costos y por fin calculé bien el precio de mis jugos. ¡Me di cuenta que estaba perdiendo plata! ¿Alguien más tiene un negocio de comida y le costó calcular la mano de obra?</p>
        <div class="flex space-x-4 text-sm text-gray-500 mt-2">
          <span>❤️ 3 Me Gusta</span>
          <span>💬 5 Comentarios</span>
        </div>
      </div>

      <div class="border-b pb-4 mb-4">
        <p class="text-sm font-bold text-secondary-childfund">Profesional Invitado: Lic. Ana G.</p>
        <p class="text-secondary-childfund my-2">¡Excelente pregunta, Kevin! La mano de obra se calcula por tiempo. Un tip: si usas productos de temporada, haz un estimado de costos por semana y luego ajústalo mensualmente. ¡Felicidades por tu avance!</p>
        <div class="flex space-x-4 text-sm text-gray-500 mt-2">
          <span>👏 12 Me Gusta</span>
          <span>💬 1 Comentario</span>
        </div>
      </div>

      <textarea class="w-full h-20 border-2 border-gray-300 focus:border-primary-childfund p-2 rounded-lg text-sm mt-4" placeholder="Escribe tu comentario o duda aquí..."></textarea>
      <button class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300 mt-2">Publicar</button>
    </div>
  `;
  setView(communityHTML);
}

/* eventos y talleres disponibles */
export function showEvents() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const eventsHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-6">Eventos y Mentorías Exclusivas</h2>
      <p class="text-gray-600 mb-6">Regístrate a capacitaciones y mentorías mensuales en alianza con empresas del rubro.</p>

      <div class="bg-gradient-to-br from-primary-childfund to-secondary-childfund text-white p-6 rounded-xl shadow-xl mb-6">
        <h3 class="text-xl font-bold mb-2">¡ALERTA DE EVENTO!</h3>
        <div class="flex items-center space-x-4 mb-4 border-b border-accent-childfund border-opacity-30 pb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path><path d="M12 6v6l4 2"></path></svg>
          <div>
            <p class="text-lg font-semibold">Taller: Digitaliza tus Ventas</p>
            <p class="text-sm">🗓️ 28 de Noviembre | ⌚ 19:00</p>
          </div>
        </div>
        <p class="text-sm italic mb-4">En colaboración con TechBolivia. Aprende a usar WhatsApp Business y Catálogos de Facebook para vender más.</p>
        <a href="#" target="_blank" class="block text-center bg-accent-childfund text-secondary-childfund font-bold py-2 rounded-lg hover:bg-white transition duration-300">
          Regístrate Aquí 
        </a>
      </div>

      <div class="p-4 border-2 border-primary-childfund rounded-xl bg-accent-childfund bg-opacity-10">
        <h3 class="flex items-center text-xl font-bold text-secondary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2 text-primary-childfund"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 22 10"></polyline></svg>
          Solicita Mentoría 
        </h3>
        <p class="text-sm text-secondary-childfund mb-4">Agenda una sesión de 30 minutos con un experto en tu rubro. Cupos limitados.</p>
        <button onclick="showMentorship()" class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300">
          Ver Mentores Disponibles
        </button>
      </div>
    </div>
  `;
  setView(eventsHTML);
}

/* Muestra la página de mentorías */
export function showMentorship() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const mentorshipHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-4">Mentoría y acompañamiento</h2>
      <div class="bg-white text-primary-childfund p-6 rounded-xl mb-6 shadow">
      </div>

      <div class="mb-6">
        <h3 class="font-bold text-secondary-childfund mb-3">Mentores Disponibles</h3>
        
        <div class="border-2 border-primary-childfund rounded-xl p-4 mb-4 bg-accent-childfund bg-opacity-10">
          <div class="flex items-center space-x-4 mb-3">
            <div class="w-16 h-16 bg-primary-childfund bg-opacity-70 rounded-full flex items-center justify-center text-white text-xl font-bold">
              AG
            </div>
            <div>
              <h4 class="font-bold text-secondary-childfund">Lic. Ana González</h4>
              <p class="text-sm text-gray-600">Especialista en Gestión Financiera</p>
              <div class="flex items-center text-yellow-500 text-sm mt-1">
                ⭐⭐⭐⭐⭐ <span class="text-gray-600 ml-1">(4.9)</span>
              </div>
            </div>
          </div>
          <p class="text-sm text-secondary-childfund mb-3">Experta en costos, precios y finanzas para emprendimientos de comida y servicios</p>
          <button onclick="requestMentorship('Ana González')" class="w-full bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
            Solicitar Mentoría
          </button>
        </div>
        
        <div class="border-2 border-gray-200 rounded-xl p-4 mb-4">
          <div class="flex items-center space-x-4 mb-3">
            <div class="w-16 h-16 bg-primary-childfund bg-opacity-70 rounded-full flex items-center justify-center text-white text-xl font-bold">CM</div>
            <div>
              <h4 class="font-bold text-secondary-childfund">Carlos Martínez</h4>
              <p class="text-sm text-gray-600">Experto en Marketing Digital</p>
              <div class="flex items-center text-yellow-500 text-sm mt-1">
                ⭐⭐⭐⭐⭐ <span class="text-gray-600 ml-1">(5.0)</span>
              </div>
            </div>
          </div>
          <p class="text-sm text-secondary-childfund mb-3">Especialista en redes sociales, ventas online y posicionamiento de marca</p>
          <button onclick="requestMentorship('Carlos Martínez')" class="w-full bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
            Solicitar Mentoría
          </button>
        </div>
      </div>

      <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg border-l-4 border-primary-childfund">
        <h3 class="font-bold text-secondary-childfund mb-2">📅 Mis Sesiones Programadas</h3>
        <p class="text-sm text-gray-600">No tienes sesiones programadas todavía. ¡Solicita tu primera mentoría!</p>
      </div>
      <br><br>
    </div>
  `;
  setView(mentorshipHTML);
}

/* Solicita mentoría a un mentor específico */
export function requestMentorship(mentorName) {
  const modal = `
    <div id="mentorshipModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center animate-fadeIn">
      <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 transform animate-scaleIn">
        <div class="text-center">
          <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-secondary-childfund mb-2">¡Solicitud Enviada!</h3>
          <p class="text-gray-600 mb-6">
            Tu solicitud de mentoría con <span class="font-semibold text-primary-childfund">${mentorName}</span> ha sido enviada exitosamente.
          </p>
          <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-6">
            <p class="text-sm text-secondary-childfund">
              📧 Te contactaremos pronto para agendar tu sesión
            </p>
          </div>
          
          <button onclick="closeMentorshipModal()" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition duration-300">
            Entendido
          </button>
        </div>
      </div>
    </div>
    
    <style>
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      
      @keyframes scaleIn {
        from { 
          opacity: 0;
          transform: scale(0.9);
        }
        to { 
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out;
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.3s ease-out;
      }
    </style>
  `;
  
  document.body.insertAdjacentHTML('beforeend', modal);
}

// Función para cerrar el modal
export function closeMentorshipModal() {
  const modal = document.getElementById('mentorshipModal');
  if (modal) {
    modal.remove();
  }
}