// Tarjeta de ruta de emprendimiento
export function createRouteCard(title, subtitle, stage, description, progress, id, userData) {
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

// Tarjeta para solicitudes de Fondo Semilla (vista admin)
export function createAdminFondoSemillaCard(name, rubro, monto, status, statusColor = "bg-yellow-500") {
  return `
    <div class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm border">
      <div>
        <p class="font-bold text-secondary-childfund">${name} <span class="text-sm font-normal text-gray-500">(${rubro})</span></p>
        <p class="text-xs text-gray-600">${monto} solicitado</p>
      </div>
      <div class="flex items-center space-x-2">
        <span class="text-xs font-semibold text-white px-3 py-1 rounded-full ${statusColor}">${status}</span>
        <button onclick="alert('Acción sobre ${name}')" class="text-primary-childfund hover:text-secondary-childfund">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  `;
}

// Tarjeta de progreso de usuario (vista admin)
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


export function createNotificationCard(type, title, message) {
  const typeConfig = {
    info: { bgColor: "bg-blue-50", borderColor: "border-blue-500" },
    success: { bgColor: "bg-green-50", borderColor: "border-green-500" },
    warning: { bgColor: "bg-yellow-50", borderColor: "border-yellow-500" },
    error: { bgColor: "bg-red-50", borderColor: "border-red-500" }
  };
  
  const config = typeConfig[type] || typeConfig.info;
  
  return `
    <div class="p-4 ${config.bgColor} border-l-4 ${config.borderColor} rounded-lg">
      <p class="font-semibold text-gray-800">${title}</p>
      <p class="text-sm text-gray-600">${message}</p>
    </div>
  `;
}

// Tarjeta de evento
export function createEventCard(title, date, time, description, registrationLink, featured = false) {
  const cardClass = featured 
    ? "bg-gradient-to-br from-primary-childfund to-secondary-childfund text-white" 
    : "bg-white border-2 border-primary-childfund";
  
  const textClass = featured ? "text-white" : "text-secondary-childfund";
  const buttonClass = featured 
    ? "bg-accent-childfund text-secondary-childfund hover:bg-white" 
    : "bg-primary-childfund text-white hover:bg-secondary-childfund";
  
  return `
    <div class="${cardClass} p-6 rounded-xl shadow-xl mb-6">
      ${featured ? '<h3 class="text-xl font-bold mb-2">¡ALERTA DE EVENTO!</h3>' : ''}
      <div class="flex items-center space-x-4 mb-4 ${featured ? 'border-b border-accent-childfund border-opacity-30 pb-3' : ''}">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
          <path d="M12 6v6l4 2"></path>
        </svg>
        <div>
          <p class="text-lg font-semibold ${textClass}">${title}</p>
          <p class="text-sm ${textClass}">🗓️ ${date} | ⌚ ${time}</p>
        </div>
      </div>
      <p class="text-sm italic mb-4 ${textClass}">${description}</p>
      <a href="${registrationLink}" target="_blank" class="block text-center ${buttonClass} font-bold py-2 rounded-lg transition duration-300">
        Regístrate Aquí
      </a>
    </div>
  `;
}

// Tarjeta de mentor
export function createMentorCard(name, initials, specialty, rating, description, featured = false) {
  const borderClass = featured 
    ? "border-2 border-primary-childfund bg-accent-childfund bg-opacity-10" 
    : "border-2 border-gray-200";
  
  return `
    <div class="${borderClass} rounded-xl p-4 mb-4">
      <div class="flex items-center space-x-4 mb-3">
        <div class="w-16 h-16 bg-primary-childfund bg-opacity-70 rounded-full flex items-center justify-center text-white text-xl font-bold">
          ${initials}
        </div>
        <div>
          <h4 class="font-bold text-secondary-childfund">${name}</h4>
          <p class="text-sm text-gray-600">${specialty}</p>
          <div class="flex items-center text-yellow-500 text-sm mt-1">
            ${'⭐'.repeat(Math.floor(rating))} <span class="text-gray-600 ml-1">(${rating})</span>
          </div>
        </div>
      </div>
      <p class="text-sm text-secondary-childfund mb-3">${description}</p>
      <button onclick="requestMentorship('${name}')" class="w-full bg-primary-childfund text-white py-2 rounded-lg font-semibold hover:bg-secondary-childfund transition">
        Solicitar Mentoría
      </button>
    </div>
  `;
}

// Tarjeta de historia de éxito
export function createSuccessStoryCard(name, business, city, testimonial) {
  return `
    <div class="bg-white border rounded-lg p-3">
      <p class="text-sm font-semibold text-primary-childfund">${name} - ${business} (${city})</p>
      <p class="text-xs text-gray-600 mt-1">"${testimonial}"</p>
    </div>
  `;
}

// Tarjeta de post de foro
export function createForumPostCard(author, city, content, likes, comments, isExpert = false) {
  const authorLabel = isExpert 
    ? `<p class="text-sm font-bold text-secondary-childfund">Profesional Invitado: ${author}</p>` 
    : `<p class="text-sm font-bold text-primary-childfund">${author} (${city})</p>`;
  
  return `
    <div class="border-b pb-4 mb-4">
      ${authorLabel}
      <p class="text-secondary-childfund my-2">${content}</p>
      <div class="flex space-x-4 text-sm text-gray-500 mt-2">
        <span>❤️ ${likes} Me Gusta</span>
        <span>💬 ${comments} Comentarios</span>
      </div>
    </div>
  `;
}

// Tarjeta de información de perfil
export function createProfileInfoCard(label, value) {
  return `
    <div class="p-4 bg-accent-childfund bg-opacity-10 rounded-lg border-l-4 border-primary-childfund">
      <p class="text-sm text-secondary-childfund opacity-80">${label}</p>
      <p class="font-semibold text-secondary-childfund">${value}</p>
    </div>
  `;
}

// Tarjeta estadística (vista admin))
export function createAdminStatCard(label, value, sublabel, bgColor = "bg-primary-childfund", textColor = "text-white") {
  return `
    <div class="${bgColor} p-6 rounded-xl ${textColor} shadow-lg">
      <p class="text-sm font-light opacity-90">${label}</p>
      <p class="text-5xl font-bold mt-1">${value}</p>
      <p class="text-xs mt-3 opacity-80">${sublabel}</p>
    </div>
  `;
}