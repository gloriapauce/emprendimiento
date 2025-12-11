// Módulo  contenido educativo, rutas y módulos

import { setView } from '../utils/dom.js';
import { getUserData } from '../utils/state.js';

/* selección de rutas disponible */
export function showRouteSelection() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const userData = getUserData();
  
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

/*tarjeta de ruta */
function createRouteCard(title, subtitle, stage, description, progress, id) {
  const userData = getUserData();
  const isRecommended = userData.recommendedRoute === title
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

/* Muestra el contenido de un módulo específico */
export function showModuleContent(moduleId) {
  const title = moduleId === "M1"
    ? "Estoy Empezando"
    : moduleId === "M2"
    ? "Tengo un Negocio"
    : "Quiero Crecer";

  let moduleName = "";
  let moduleDescription = "";

  if (moduleId === "M1") {
    moduleName = "Módulo 1: Descubre tu Propósito";
    moduleDescription = "Antes de vender, descubre por qué quieres emprender y a quién ayudarás.";
  } else if (moduleId === "M2") {
    moduleName = "Módulo 1: Ordena tu Negocio";
    moduleDescription = "Aprende a calcular costos, gestionar ventas y formalizarte.";
  } else {
    moduleName = "Módulo 1: Estrategias de Crecimiento";
    moduleDescription = "Expande tu negocio con estrategias avanzadas.";
  }

  const moduleHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <button onclick="showRouteSelection()" class="mt-8 text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Rutas
      </button>
      <br>
      <h2 class="text-3xl font-bold text-primary-childfund mb-2">${title}</h2>
      <p class="text-gray-500 mb-1">${moduleName}</p>
      <p class="text-sm text-gray-600 mb-6">${moduleDescription}</p>
      <div class="space-y-6">
        ${getModuleContent(moduleId)}
      </div>
      <button type="button" onclick="saveModuleProgress('${moduleId}', 100)" 
        class="w-full text-white bg-primary-childfund px-4 py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition duration-300 mt-6">
        Completar Módulo
      </button>
    </div>
  `;
  setView(moduleHTML);
}


function getModuleContent(moduleId) {
  if (moduleId === "M1") {
    return `
      <!-- LECCIÓN 1: Por qué emprender -->
      <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
        <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><path d="M12 20h9"></path><circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline></svg>
          1. Mi Motivo para Emprender (5 min)
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="w-full">
            <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
            <h3 class="text-lg font-bold text-secondary-childfund mb-2">Contenido Clave</h3>
            <div class="text-sm text-secondary-childfund mt-3">
              <p class="font-medium mb-3">Emprender no es solo "hacer plata". Es importante que sepas:</p>
              <ul class="list-inside space-y-2">
                <li><strong>Tu "Por Qué":</strong> ¿Qué te motiva realmente?</li>
                <li><strong> - Presión familiar:</strong> Está bien querer ayudar, pero también cuida tu proyecto</li>
                <li><strong> - Es un proceso:</strong> No vas a ganar millones mañana, y está bien</li>
                <li><strong> - Tu valor:</strong> Tu trabajo tiene valor, aunque recién empieces</li>
              </ul>
              <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Ejercicio</button>
            </div>
          </div>
        </div>
      </div>

      <!-- LECCIÓN 2: Quiz Interactivo -->
      <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
        <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          2. Mini cuestionario (3 preguntas)
        </h3>
        <p class="text-sm text-secondary-childfund mb-4">
          Responde 3 preguntas para verificar tu comprensión del contenido.
        </p>
        <button onclick="showQuizModule()" class="w-full bg-primary-childfund text-white px-4 py-3 rounded-lg font-semibold hover:bg-secondary-childfund transition">
          Comenzar Evaluación
        </button>
      </div>

      <!-- LECCIÓN 3: Tarea Práctica -->
      <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
        <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"></path>
          </svg>
          3. Tarea: Describe a tu Cliente Ideal
        </h3>

        <p class="text-sm text-secondary-childfund mb-3">
          Piensa en una persona real a quien le venderías. Describe:
        </p>
        <textarea class="w-full h-32 border-2 border-gray-300 
          focus:border-primary-childfund p-2 rounded-lg text-sm"
          placeholder="Ejemplo: María, 30 años, trabaja de 8 a 5, sale tarde de su trabajo, no tiene tiempo de cocinar, busca algo rico y rápido cerca de su oficina..."></textarea>
        <button onclick="openRecursosModal()"
          class="w-full text-primary-childfund border border-primary-childfund 
            px-4 py-2 rounded-lg font-semibold hover:bg-primary-childfund 
            hover:text-white transition duration-300 mt-2 flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
            fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Ver Plantillas y Ejemplos</span>
        </button>
      </div>
    `;
  } else if (moduleId === "M2") {
    return `
      <!-- Lección 1: Video + Contenido Teórico lado a lado -->
      <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
        <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          1. Video Lección: Cálculo de Costos (7 min)
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="w-full">
            <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/ZQgXyiozmYY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
            <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-2 cursor-pointer" onclick="toggleTextContent()">
              Contenido Clave
            </h3>
            <div id="textContentBody" class="text-sm text-secondary-childfund mt-3">
              <p class="font-medium mb-3">Para saber si ganas o pierdes, necesitas conocer tus costos:</p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Materia Prima:</strong> Lo que compras para producir</li>
                <li><strong>Mano de Obra:</strong> Tu tiempo vale dinero</li>
                <li><strong>Gastos Fijos:</strong> Luz, alquiler, transporte</li>
                <li><strong>Precio de Venta:</strong> Debe cubrir costos + ganancia</li>
              </ul>
              <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Plantilla</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Lección 2: Mini-Quiz -->
      <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
        <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          2. Mini-cuestionario: ¿Entendiste los costos? (3 preguntas)
        </h3>
        <form>
          <p class="text-sm font-medium text-secondary-childfund mb-2">Pregunta 1: Si vendo un jugo a Bs. 5 y mis costos son Bs. 4, ¿cuánto gano?</p>
          <div class="space-y-1 mb-3">
            <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 5</label>
            <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 1</label>
            <label class="block text-sm text-secondary-childfund"><input type="radio" name="q1" class="mr-2 text-primary-childfund"> Bs. 4</label>
          </div>
          <button type="submit" class="text-sm text-white bg-primary-childfund px-3 py-1 rounded-full hover:bg-secondary-childfund">Verificar</button>
        </form>
      </div>

      <!-- Lección 3: Tarea Práctica -->
      <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
        <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4z"></path>
          </svg>
          3. Tarea: Calcula tu Precio Real
        </h3>

        <p class="text-sm text-secondary-childfund mb-3">
          Escribe el listado de TODOS tus costos para un producto:
        </p>
        <textarea class="w-full h-32 border-2 border-gray-300 
          focus:border-primary-childfund p-2 rounded-lg text-sm"
          placeholder="Ejemplo: Jugo de naranja - Naranjas: 2bs, Azúcar: 0.5bs, Vaso: 0.3bs, Mi tiempo: 1bs, Transporte: 0.5bs = TOTAL: 4.3bs"></textarea>
        <button onclick="openRecursosModal1()"
          class="w-full text-primary-childfund border border-primary-childfund 
            px-4 py-2 rounded-lg font-semibold hover:bg-primary-childfund 
            hover:text-white transition duration-300 mt-2 flex items-center justify-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" 
            fill="none" stroke="currentColor" stroke-width="2" 
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Ver Calculadora de Costos</span>
        </button>
      </div>
    `;
  } else {
    return `
      <!-- RUTA 3: Contenido de Post-Incubación -->
      <div class="p-4 border-2 border-primary-childfund rounded-lg bg-primary-childfund bg-opacity-5">
        <h3 class="flex items-center text-lg font-bold text-primary-childfund mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          1. Video: Estrategias de Expansión (10 min)
        </h3>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div class="w-full">
            <iframe class="w-full rounded-lg" style="height:315px;" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          
          <div class="p-4 rounded-lg bg-white shadow-md offline-ready">
            <h3 class="text-lg font-bold text-secondary-childfund mb-2">Contenido Clave</h3>
            <div class="text-sm text-secondary-childfund mt-3">
              <p class="font-medium mb-3">Para crecer necesitas:</p>
              <ul class="list-disc list-inside space-y-2">
                <li><strong>Análisis de Mercado:</strong> ¿Dónde hay más oportunidades?</li>
                <li><strong>Nuevos Canales:</strong> Ventas online, distribuidores</li>
                <li><strong>Alianzas:</strong> Colaborar con otros negocios</li>
                <li><strong>Inversión:</strong> Cuándo y cómo buscar financiamiento</li>
              </ul>
              <button class="mt-4 text-xs font-semibold text-white bg-primary-childfund hover:bg-secondary-childfund px-3 py-1 rounded-full">📄 Descargar Guía</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="p-4 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10">
        <h3 class="flex items-center text-lg font-bold text-secondary-childfund mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
          2. Ejercicio: Plan de Expansión
        </h3>
        <p class="text-sm text-secondary-childfund mb-3">
          Escribe 3 acciones concretas para crecer en los próximos 6 meses:
        </p>
        <textarea class="w-full h-32 border-2 border-gray-300 
          focus:border-primary-childfund p-2 rounded-lg text-sm"
          placeholder="Ejemplo: 1. Abrir un punto de venta en otro barrio, 2. Crear catálogo digital en redes, 3. Contratar un ayudante..."></textarea>
      </div>
    `;
  }
}

/* Toggle del contenido de texto */
export function toggleTextContent() {
  const body = document.getElementById("textContentBody");
  if (body) body.classList.toggle("hidden");
}

export function showSoftSkillsMenu() {
  const bottomNav = document.getElementById("bottom-nav");
  bottomNav.classList.remove("hidden");
  
  const softSkillsHTML = `
    <div class="p-4">
      <h2 class="text-3xl font-extrabold text-secondary-childfund mb-4">🧠 Habilidades Blandas..</h2>
      <p class="text-gray-600 mb-6">Desarrolla las habilidades personales que todo emprendedor necesita para triunfar.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div onclick="showSoftSkillModule('autoconocimiento')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">💡</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Autoconocimiento</h3>
          <p class="text-sm text-gray-600">Identifica tus fortalezas, valores y motivaciones profundas</p>
        </div>
        
        <div onclick="showSoftSkillModule('liderazgo')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">👥</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Liderazgo Emprendedor</h3>
          <p class="text-sm text-gray-600">Aprende a guiar tu negocio y equipo con propósito</p>
        </div>
        
        <div onclick="showSoftSkillModule('comunicacion')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">💬</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Comunicacion Asertiva</h3>
          <p class="text-sm text-gray-600">Expresa tus ideas con claridad, empatía y firmeza</p>
        </div>
        
        <div onclick="showSoftSkillModule('estres')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">🧘</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Manejo del Estrés</h3>
          <p class="text-sm text-gray-600">Técnicas prácticas para manejar la presión del día a día</p>
        </div>
        
        <div onclick="showSoftSkillModule('autoestima')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">⭐</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Autoestimaa Emprendedora</h3>
          <p class="text-sm text-gray-600">Fortalece tu confianza y reconoce tu valor</p>
        </div>
        
        <div onclick="showSoftSkillModule('equilibrio')" class="bg-white p-6 rounded-xl border-2 border-gray-200 cursor-pointer hover:border-primary-childfund hover:shadow-lg transition">
          <div class="text-4xl mb-3">⚖️</div>
          <h3 class="text-lg font-bold text-secondary-childfund mb-2">Equilibrio Vida-Negocio</h3>
          <p class="text-sm text-gray-600">Aprende a crecer sin descuidar tu bienestar</p>
        </div>
        
      </div>
    </div>
  `;
  
  setView(softSkillsHTML);
}

/* Muestra el módulo de Soft Skills */
export function showSoftSkillModule(skill) {
  const skills = {
    autoconocimiento: {
      title: "Autoconocimiento",
      description: "Identifica tus fortalezas, valores y motivaciones profundas",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">¿Por qué es importante?</h3>
        <p class="mb-4">Conocerte te ayuda a tomar mejores decisiones y mantenerte motivado en momentos difíciles.</p>
        <h3 class="font-bold text-lg mb-2">Ejercicio Práctico:</h3>
        <p class="mb-2">Responde honestamente:</p>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>¿Qué hago mejor que la mayoría?</li>
          <li>¿Qué me apasiona realmente?</li>
          <li>¿Cuáles son mis valores más importantes?</li>
        </ul>
      `,
    },
    liderazgo: {
      title: "Liderazgo Emprendedor",
      description: "Aprende a guiar tu negocio y equipo con propósito",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">Líder vs Jefe</h3>
        <p class="mb-4">Un líder inspira, un jefe solo ordena. Como emprendedor, tú estableces la cultura de tu negocio.</p>
        <h3 class="font-bold text-lg mb-2">Ejercicio:</h3>
        <p class="text-sm">Escribe 3 valores que quieres que definan tu emprendimiento</p>
      `,
    },
    comunicacion: {
      title: "Comunicación Asertiva",
      description: "Expresa tus ideas con claridad, empatía y firmeza",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">Los 3 estilos de comunicación</h3>
        <ul class="list-disc list-inside space-y-2 text-sm mb-4">
          <li><strong>Pasivo:</strong> No defiende sus derechos</li>
          <li><strong>Agresivo:</strong> Defiende sus derechos pisoteando los de otros</li>
          <li><strong>Asertivo:</strong> Defiende sus derechos respetando a los demás</li>
        </ul>
        <p class="text-sm">Practica decir "no" cuando sea necesario, sin sentirte culpable.</p>
      `,
    },
    estres: {
      title: "Manejo del Estrés",
      description: "Técnicas prácticas para manejar la presión del día a día",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">Señales de estrés no saludable:</h3>
        <ul class="list-disc list-inside space-y-1 text-sm mb-4">
          <li>Dificultad para dormir</li>
          <li>Irritabilidad constante</li>
          <li>Dolores de cabeza frecuentes</li>
          <li>Falta de concentración</li>
        </ul>
        <h3 class="font-bold text-lg mb-2">Técnica rápida: Respiración 4-7-8</h3>
        <p class="text-sm">Inhala 4 seg → Retén 7 seg → Exhala 8 seg</p>
      `,
    },
    autoestima: {
      title: "Autoestima Emprendedora",
      description: "Fortalece tu confianza y reconoce tu valor",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">Tu trabajo tiene valor</h3>
        <p class="mb-4">Muchos emprendedores sufren del "síndrome del impostor". Recuerda: estás aprendiendo y cada paso cuenta.</p>
        <h3 class="font-bold text-lg mb-2">Ejercicio diario:</h3>
        <p class="text-sm">Cada noche, escribe 3 cosas que hiciste bien hoy en tu emprendimiento.</p>
      `,
    },
    equilibrio: {
      title: "Equilibrio Vida-Negocio",
      description: "Aprende a crecer sin descuidar tu bienestar",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: `
        <h3 class="font-bold text-lg mb-2">El emprendimiento es un maratón, no una carrera de 100 metros</h3>
        <p class="mb-4">Es imposible sostener ritmos agotadores por mucho tiempo. El descanso NO es pérdida de tiempo.</p>
        <h3 class="font-bold text-lg mb-2">Establece límites:</h3>
        <ul class="list-disc list-inside space-y-1 text-sm">
          <li>Define tu horario de trabajo</li>
          <li>Respeta tu tiempo familiar</li>
          <li>Programa al menos 1 día de descanso</li>
        </ul>
      `,
    },
  };

  const selectedSkill = skills[skill];
  const skillHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <button onclick="showRouteSelection()" class="text-primary-childfund font-semibold hover:underline flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver a Rutas
      </button>
      
      <h2 class="text-2xl font-bold text-primary-childfund mb-2">${selectedSkill.title}</h2>
      <p class="text-gray-600 mb-6">${selectedSkill.description}</p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
        <div class="w-full">
          <iframe class="w-full rounded-lg" style="height:250px;" src="${selectedSkill.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        <div class="p-4 rounded-lg bg-accent-childfund bg-opacity-10 border-2 border-primary-childfund overflow-y-auto" style="max-height:250px;">
          ${selectedSkill.content}
        </div>
      </div>

      <div class="bg-white border-2 border-primary-childfund rounded-xl p-4">
        <h3 class="font-bold text-secondary-childfund mb-3">✍️ Reflexión Personal</h3>
        <textarea class="w-full h-32 border-2 border-gray-300 focus:border-primary-childfund p-3 rounded-lg text-sm" 
          placeholder="Escribe tus reflexiones sobre este módulo... ¿Qué aprendiste? ¿Cómo lo aplicarás?"></textarea>
        <button onclick="alert('¡Reflexión guardada!'); showRouteSelection();" class="w-full mt-3 bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
          Guardar y Completar
        </button>
      </div>
    </div>
  `;
  setView(skillHTML);
}

/*  modal de insignia cuando se completa un módulo */
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

/* Cierra el modal de insignia */
export function closeBadgeModal() {
  const modal = document.getElementById("badgeModal");
  if (modal) modal.remove();
  showRouteSelection();
}

/* modal de recursos para Ruta 1 */
export function openRecursosModal() {
  document.getElementById("recursosModal").classList.remove("hidden");
  document.getElementById("recursosModal").classList.add("flex");
}

/*Cierra el modal de recursos para Ruta 1 */
export function closeRecursosModal() {
  document.getElementById("recursosModal").classList.add("hidden");
  document.getElementById("recursosModal").classList.remove("flex");
}

/* Abre el modal de recursos para Ruta 2 */
export function openRecursosModal1() {
  document.getElementById("recursosModal1").classList.remove("hidden");
  document.getElementById("recursosModal1").classList.add("flex");
}

/* Cierra el modal de recursos para Ruta 2 */
export function closeRecursosModal1() {
  document.getElementById("recursosModal1").classList.add("hidden");
  document.getElementById("recursosModal1").classList.remove("flex");
}

/* módulo de quiz interactivo*/
export function showQuizModule() {
  const quizQuestions = [
    {
      question: "¿Qué significa mi 'Por Qué' al emprender?",
      options: [
        "Es la razón principal que me mueve a empezar un negocio, lo que me hace querer ayudar a otros o mejorar algo, no solo ganar dinero.",
        "Es solo la cantidad de plata que quiero ganar.",
        "Es solamente el producto o servicio que voy a vender."
      ],
      correctAnswer: 0
    },
    {
      question: "¿Por qué es importante saber mi 'Por Qué'?",
      options: [
        "Porque me ayuda a seguir adelante cuando haya problemas y tomar buenas decisiones en mi negocio.",
        "Solo es para decir algo bonito.",
        "No importa mientras venda."
      ],
      correctAnswer: 0
    },
    {
      question: "¿Cuál de estas frases SÍ es un buen motivo para emprender?",
      options: [
        "Quiero ayudar a las personas ofreciéndoles algo que les haga la vida más fácil o mejor.",
        "Vendo solo porque necesito dinero.",
        "Vendo lo mismo que todos venden, sin pensar en quién lo necesita."
      ],
      correctAnswer: 0
    }
  ];

  let currentQuestionIndex = 0;
  let userAnswers = Array(quizQuestions.length).fill(null);
  let score = 0;

  const quizHTML = `
    <div class="p-4 bg-white rounded-xl shadow-lg mt-4">
      <button onclick="showModuleContent('M1')" class="text-primary-childfund font-semibold hover:text-secondary-childfund hover:underline flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mr-1"><path d="M19 12H5"></path><polyline points="12 19 5 12 12 5"></polyline></svg>
        Volver al Módulo
      </button>

      <h3 class="text-2xl font-bold text-primary-childfund mb-4">📝 Evaluación: Mi "Por Qué"</h3>
      
      <div class="mb-6">
        <div class="flex justify-between text-sm text-gray-600 mb-2">
          <span>Pregunta <span id="currentQuestionNum">1</span> de ${quizQuestions.length}</span>
          <span id="progressText">0%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div id="quizProgressBar" class="bg-primary-childfund h-2 rounded-full transition-all duration-300" style="width: 0%"></div>
        </div>
      </div>

      <div id="quizQuestionContainer" class="p-6 border-2 border-accent-childfund rounded-lg bg-accent-childfund bg-opacity-10 mb-6">
        <p id="quizQuestionText" class="text-lg font-bold text-secondary-childfund mb-4"></p>
        <div id="quizOptionsContainer" class="space-y-3"></div>
        <div id="feedbackMessage" class="hidden mt-4 p-3 rounded-lg"></div>
      </div>

      <div class="flex justify-between mb-4">
        <button id="prevQuizBtn" class="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 transition" disabled>
          Anterior
        </button>
        <button id="nextQuizBtn" class="bg-primary-childfund text-white px-6 py-2 rounded-lg hover:bg-secondary-childfund transition hidden">
          Siguiente
        </button>
        <button id="verifyBtn" class="bg-accent-childfund text-secondary-childfund px-6 py-2 rounded-lg hover:bg-primary-childfund hover:text-white transition font-semibold">
          Verificar Respuesta
        </button>
      </div>

      <button id="finishQuizBtn" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition hidden">
        Ver Resultados
      </button>
    </div>
  `;

  setView(quizHTML);

  const questionText = document.getElementById("quizQuestionText");
  const optionsContainer = document.getElementById("quizOptionsContainer");
  const feedbackMessage = document.getElementById("feedbackMessage");
  const prevBtn = document.getElementById("prevQuizBtn");
  const nextBtn = document.getElementById("nextQuizBtn");
  const verifyBtn = document.getElementById("verifyBtn");
  const finishBtn = document.getElementById("finishQuizBtn");
  const progressBar = document.getElementById("quizProgressBar");
  const currentQuestionNum = document.getElementById("currentQuestionNum");
  const progressText = document.getElementById("progressText");

  function updateQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    questionText.textContent = currentQuestion.question;
    
    const progress = ((currentQuestionIndex) / quizQuestions.length) * 100;
    progressBar.style.width = progress + "%";
    progressText.textContent = Math.round(progress) + "%";
    currentQuestionNum.textContent = currentQuestionIndex + 1;
    
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionDiv = document.createElement("div");
      optionDiv.className = "flex items-start space-x-3 p-3 border-2 border-gray-300 rounded-lg hover:border-primary-childfund transition cursor-pointer";
      optionDiv.innerHTML = `
        <input type="radio" name="quizAnswer" value="${index}" id="option${index}" class="mt-1 form-radio text-primary-childfund h-5 w-5">
        <label for="option${index}" class="text-sm text-secondary-childfund cursor-pointer flex-1">${option}</label>
      `;
      
      optionDiv.onclick = () => {
        document.getElementById(`option${index}`).checked = true;
      };
      
      optionsContainer.appendChild(optionDiv);
    });
    
    if (userAnswers[currentQuestionIndex] !== null) {
      document.querySelector(`input[value="${userAnswers[currentQuestionIndex]}"]`).checked = true;
      showFeedback(userAnswers[currentQuestionIndex] === currentQuestion.correctAnswer);
      verifyBtn.classList.add("hidden");
      nextBtn.classList.remove("hidden");
    } else {
      feedbackMessage.classList.add("hidden");
      verifyBtn.classList.remove("hidden");
      nextBtn.classList.add("hidden");
    }
    
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1 && userAnswers[currentQuestionIndex] !== null) {
      nextBtn.classList.add("hidden");
      finishBtn.classList.remove("hidden");
    } else {
      finishBtn.classList.add("hidden");
    }
  }

  function showFeedback(isCorrect) {
    feedbackMessage.classList.remove("hidden");
    
    if (isCorrect) {
      feedbackMessage.className = "mt-4 p-3 rounded-lg bg-green-100 border-2 border-green-500";
      feedbackMessage.innerHTML = `
        <div class="flex items-center space-x-2">
          <span class="text-2xl">✅</span>
          <div>
            <p class="font-bold text-green-700">¡Correcto!</p>
            <p class="text-sm text-green-600">Muy bien, has entendido el concepto.</p>
          </div>
        </div>
      `;
    } else {
      const correctAnswer = quizQuestions[currentQuestionIndex].options[quizQuestions[currentQuestionIndex].correctAnswer];
      feedbackMessage.className = "mt-4 p-3 rounded-lg bg-red-100 border-2 border-red-500";
      feedbackMessage.innerHTML = `
        <div class="flex items-start space-x-2">
          <span class="text-2xl">❌</span>
          <div>
            <p class="font-bold text-red-700">Incorrecto</p>
            <p class="text-sm text-red-600 mt-1"><strong>Respuesta correcta:</strong> ${correctAnswer}</p>
          </div>
        </div>
      `;
    }
  }

  verifyBtn.onclick = () => {
    const selectedOption = document.querySelector('input[name="quizAnswer"]:checked');
    
    if (!selectedOption) {
      alert("Por favor selecciona una respuesta antes de verificar.");
      return;
    }
    
    const selectedValue = parseInt(selectedOption.value);
    userAnswers[currentQuestionIndex] = selectedValue;
    
    const isCorrect = selectedValue === quizQuestions[currentQuestionIndex].correctAnswer;
    if (isCorrect) score++;
    
    showFeedback(isCorrect);
    
    verifyBtn.classList.add("hidden");
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
      finishBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
    }
  };

  nextBtn.onclick = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      currentQuestionIndex++;
      updateQuestion();
    }
  };

  prevBtn.onclick = () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      updateQuestion();
    }
  };

  finishBtn.onclick = () => {
    showQuizResults();
  };

  function showQuizResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = percentage >= 70;
    
    const resultsHTML = `
      <div class="p-6 bg-white rounded-xl shadow-lg mt-4">
        <div class="text-center">
          <div class="w-32 h-32 mx-auto mb-6 ${passed ? 'bg-green-500' : 'bg-yellow-400'} rounded-full flex items-center justify-center shadow-lg">
            <span class="text-6xl">${passed ? '🎉' : '📚'}</span>
          </div>
          
          <h2 class="text-3xl font-bold ${passed ? 'text-green-600' : 'text-yellow-600'} mb-4">
            ${passed ? '¡Felicitaciones!' : '¡Sigue Practicando!'}
          </h2>
          
          <div class="mb-6 p-6 bg-accent-childfund bg-opacity-20 rounded-xl">
            <p class="text-5xl font-bold text-primary-childfund mb-2">${percentage}%</p>
            <p class="text-gray-600">Respuestas correctas: ${score} de ${quizQuestions.length}</p>
          </div>
          
          ${passed ? `
            <p class="text-gray-700 mb-6">Has demostrado que comprendes bien los conceptos de este módulo. ¡Continúa así!</p>
            <button onclick="showModuleContent('M1')" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition mb-3">
              Continuar con el Módulo
            </button>
          ` : `
            <p class="text-gray-700 mb-6">Te recomendamos revisar el contenido del video nuevamente para reforzar tu aprendizaje.</p>
            <button onclick="showModuleContent('M1')" class="w-full bg-yellow-500 text-white font-bold py-3 rounded-xl hover:bg-yellow-600 transition mb-3">
              Revisar Contenido
            </button>
            <button onclick="showQuizModule()" class="w-full bg-primary-childfund text-white font-bold py-3 rounded-xl hover:bg-secondary-childfund transition">
              Reintentar Evaluación
            </button>
          `}
        </div>
      </div>
    `;
    
    setView(resultsHTML);
  }

  updateQuestion();
}