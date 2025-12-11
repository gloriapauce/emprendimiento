// src/modules/fondo-semilla.js
// Módulo para gestión del Fondo Semilla Rotatorio

import { setView } from '../utils/dom.js';
import { getUserData } from '../utils/state.js';

/**
 * Muestra la información del Fondo Semilla
 */
export function showFondoSemilla() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const userData = getUserData();
  
  const fondoHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <h2 class="text-3xl font-bold text-secondary-childfund mb-4">💰 Fondo Semilla Rotatorio</h2>
      
      <div class="bg-gradient-to-r from-green-500 to-primary-childfund text-white p-6 rounded-xl mb-6 shadow-lg">
        <h3 class="text-xl font-bold mb-2">¿Qué es el Fondo Semilla Rotatorio?</h3>
        <p class="text-sm">Capital inicial sin intereses que pagas en 12 cuotas mensuales. Al finalizar, el dinero vuelve a circular para ayudar a otro emprendedor.</p>
      </div>

      <div class="space-y-4 mb-6">
        <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg border-l-4 border-primary-childfund">
          <h4 class="font-bold text-secondary-childfund mb-2">✨ Beneficios</h4>
          <ul class="text-sm space-y-1">
            <li>• Sin intereses - Solo devuelves lo que recibes</li>
            <li>• 12 meses de plazo</li>
          </ul>
        </div>

        <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <h4 class="font-bold text-secondary-childfund mb-2">📋 Requisitos</h4>
          <ul class="text-sm space-y-1">
            <li>• Haber completado al menos el 50% de una ruta</li>
            <li>• Tener un plan de negocio validado</li>
            <li>• Compromiso de pago mensual</li>
            <li>• Participar en seguimiento mensual</li>
          </ul>
        </div>
      </div>

      ${
        userData.progress && Object.keys(userData.progress).length > 0
          ? `
        <div class="bg-primary-childfund bg-opacity-10 p-4 rounded-lg border-2 border-primary-childfund mb-4">
          <h4 class="font-bold text-primary-childfund mb-2">Tu Estado Actual</h4>
          <p class="text-sm text-secondary-childfund mb-3">Has completado módulos en tu ruta. ¡Sigue avanzando para ser elegible!</p>
          <div class="w-full bg-gray-200 rounded-full h-3">
            <div class="bg-primary-childfund h-3 rounded-full" style="width: 50%"></div>
          </div>
          <p class="text-xs text-gray-600 mt-1">50% del progreso necesario</p>
        </div>
      `
          : `
        <div class="bg-gray-100 p-4 rounded-lg border-2 border-gray-300 mb-4">
          <p class="text-sm text-gray-700">⚠️ Necesitas completar al menos el 50% de una ruta para aplicar al fondo semilla.</p>
        </div>
      `
      }

      <button onclick="showFondoApplication()" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition mb-4">
        Solicitar Fondo Semilla
      </button>

      <div class="border-t-2 pt-4">
        <h4 class="font-bold text-secondary-childfund mb-3">📊 Historias de Éxito</h4>
        <div class="space-y-3">
          <div class="bg-white border rounded-lg p-3">
            <p class="text-sm font-semibold text-primary-childfund">María - Repostería (Santa Cruz)</p>
            <p class="text-xs text-gray-600 mt-1">"Recibí Bs. 5,000 para comprar un horno industrial. En 8 meses ya pagué todo y ahora produzco el triple."</p>
          </div>
          <div class="bg-white border rounded-lg p-3">
            <p class="text-sm font-semibold text-primary-childfund">Carlos - Carpintería (La Paz)</p>
            <p class="text-xs text-gray-600 mt-1">"El fondo me permitió comprar herramientas profesionales. Pagué en tiempo y ahora puedo tomar trabajos más grandes."</p>
          </div>
        </div>
      </div>
    </div>
  `;
  setView(fondoHTML);
}

/**
 * Muestra el formulario de solicitud de Fondo Semilla
 */
export function showFondoApplication() {
  const applicationHTML = `
    <div class="p-6 bg-white rounded-xl shadow-lg mt-4">
      <button onclick="showFondoSemilla()" class="text-primary-childfund font-semibold hover:underline flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver
      </button>
      
      <h2 class="text-2xl font-bold text-primary-childfund mb-6">Solicitud de Fondo Semilla</h2>
      
      <form onsubmit="event.preventDefault(); submitFondoApplication();">
        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund mb-1">Monto Solicitado (Bs.)</label>
          <select required class="w-full border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund">
            <option value="">Selecciona el monto</option>
            <option value="2000">Bs. 2,000</option>
            <option value="3000">Bs. 3,000</option>
            <option value="5000">Bs. 5,000</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund mb-1">¿Para qué usarás el dinero?</label>
          <textarea required class="w-full h-24 border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund text-sm" 
            placeholder="Ejemplo: Comprar materia prima, herramientas, equipo, etc."></textarea>
        </div>

        <div class="mb-4">
          <label class="block text-sm font-medium text-secondary-childfund mb-1">¿Cómo generarás ingresos para pagar las cuotas?</label>
          <textarea required class="w-full h-24 border-2 border-gray-300 rounded-lg p-3 focus:border-primary-childfund text-sm" 
            placeholder="Describe tu plan de ventas o ingresos"></textarea>
        </div>

        <div class="mb-6">
          <label class="block text-sm font-medium text-secondary-childfund mb-1">Cuota Mensual Estimada</label>
          <input type="text" readonly value="Según monto seleccionado" class="w-full border-2 border-gray-200 rounded-lg p-3 bg-gray-50">
          <p class="text-xs text-gray-500 mt-1">Ejemplo: Bs. 5,000 = 12 cuotas de Bs. 417</p>
        </div>

        <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-4">
          <label class="flex items-start space-x-2">
            <input type="checkbox" required class="mt-1">
            <span class="text-sm text-secondary-childfund">Acepto el compromiso de pago mensual y participar en seguimientos con mi mentor asignado</span>
          </label>
        </div>

        <button type="submit" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
          Enviar Solicitud
        </button>
      </form>
    </div>
  `;
  setView(applicationHTML);
}

/* Envía la solicitud de Fondo Semilla */
export function submitFondoApplication() {
  const modal = document.createElement('div');
  modal.id = 'fondoSuccessModal';
  modal.className = 'fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4';
  
  modal.innerHTML = `
    <div class="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-scaleIn">
      
      <!-- Header con gradiente -->
      <div class="bg-gradient-to-br from-green-500 to-primary-childfund p-8 text-center">
        <div class="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-white">¡Solicitud Enviada!</h3>
      </div>
      
      <!-- Content -->
      <div class="p-8">
        <div class="text-center mb-6">
          <p class="text-gray-700 text-lg mb-4">
            Tu solicitud de <span class="font-bold text-primary-childfund">Fondo Semilla</span> ha sido recibida exitosamente.
          </p>
        </div>
        
        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-6">
          <div class="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p class="text-sm text-blue-700 font-semibold mb-1">Próximos pasos:</p>
              <p class="text-sm text-blue-600">
                Nuestro equipo evaluará tu aplicación y te contactaremos en <span class="font-bold">5-7 días hábiles</span>.
              </p>
            </div>
          </div>
        </div>
        
        <div class="bg-accent-childfund bg-opacity-20 p-4 rounded-lg mb-6">
          <p class="text-sm text-secondary-childfund text-center">
            📧 Recibirás un correo de confirmación con más detalles
          </p>
        </div>
        
        <button id="closeFondoModal" class="w-full bg-gradient-to-r from-primary-childfund to-secondary-childfund text-white font-bold py-4 rounded-xl hover:shadow-lg transition duration-300 transform hover:scale-105">
          Entendido
        </button>
      </div>
    </div>
    
    <style>
      @keyframes scaleIn {
        0% {
          opacity: 0;
          transform: scale(0.9);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .animate-scaleIn {
        animation: scaleIn 0.3s ease-out;
      }
    </style>
  `;
  
  document.body.appendChild(modal);
  
  // Event listener para cerrar
  const closeBtn = document.getElementById('closeFondoModal');
  closeBtn.addEventListener('click', () => {
    modal.remove();
    showFondoSemilla();
  });
  
  // Cerrar al clickear fuera
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
      showFondoSemilla();
    }
  });
}