import { updateElementText } from "./dom.js";

let userData = {};

export function getUserData() {
  return userData;
}

export function setUserData(data) {
  userData = { ...userData, ...data };
}

export function updateUserData(key, value) {
  userData[key] = value;
}

export function resetUserData() {
  userData = {};
}

export function getUserProperty(key, defaultValue = null) {
  return userData[key] !== undefined ? userData[key] : defaultValue;
}

export function isUserAuthenticated() {
  return userData && userData.name && userData.email;
}

export function updateSidebarProfile() {
  if (userData.name) {
    const initial = userData.name.charAt(0).toUpperCase();

    //  Actualiza el perfil en el Sidebar
    updateElementText("userName", userData.name);
    updateElementText("userCity", userData.city || "Ciudad");
    updateElementText("userInitial", initial);

    //  Actualiza el perfil en el Header
    const headerInitialElement = document.getElementById("headerUserInitial");
    if (headerInitialElement) {
      headerInitialElement.textContent = initial;
    }
  }
}

export function saveModuleProgress(moduleId, progressPercent) {
  if (!userData.progress) userData.progress = {};
  userData.progress[moduleId] = progressPercent;

  if (progressPercent >= 100 && !userData.badges) {
    userData.badges = [];
  }

  if (progressPercent >= 100) {
    const badgeName = `${moduleId}_completo`;
    if (!userData.badges.includes(badgeName)) {
      userData.badges.push(badgeName);
      return badgeName;
    }
  }

  return null;
}

export function getModuleProgress(moduleId) {
  return userData.progress && userData.progress[moduleId]
    ? userData.progress[moduleId]
    : 0;
}

export function getCompletedModules() {
  if (!userData.progress) return [];

  return Object.entries(userData.progress)
    .filter(([_, progress]) => progress >= 100)
    .map(([moduleId, _]) => moduleId);
}

export function isModuleCompleted(moduleId) {
  return getModuleProgress(moduleId) >= 100;
}

export function getTotalProgress() {
  if (!userData.progress || Object.keys(userData.progress).length === 0) {
    return 0;
  }

  const progressValues = Object.values(userData.progress);
  const sum = progressValues.reduce((acc, val) => acc + val, 0);
  return Math.round(sum / progressValues.length);
}

export function getUserBadges() {
  return userData.badges || [];
}

export function hasBadge(badgeName) {
  return getUserBadges().includes(badgeName);
}

export function generateMedalsHTML() {
  let medalsHTML = "";

  if (userData.progress) {
    for (const [moduleId, progress] of Object.entries(userData.progress)) {
      if (progress >= 100) {
        medalsHTML += `<div class="bg-yellow-300 text-secondary-childfund px-3 py-1 rounded-full inline-block mr-2 mb-2">🏅 ${moduleId} Completado</div>`;
      }
    }
  }

  return medalsHTML || "<p>No has completado ningún módulo todavía.</p>";
}

export function isEligibleForFondoSemilla() {
  return getTotalProgress() >= 50;
}

export function getUserSummary() {
  return {
    name: userData.name || "Usuario",
    email: userData.email || "usuario@email.com",
    city: userData.city || "No especificada",
    age: userData.age || "No especificada",
    rubro: userData.rubro || "No especificado",
    recommendedRoute: userData.recommendedRoute || "Pendiente de diagnóstico",
    totalProgress: getTotalProgress(),
    completedModules: getCompletedModules().length,
    badges: getUserBadges().length,
  };
}
