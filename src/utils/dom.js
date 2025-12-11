export const elements = {
  get content() {
    return document.getElementById("content");
  },
  get bottomNav() {
    return document.getElementById("bottom-nav");
  },
  get sidebar() {
    return document.getElementById("sidebar");
  },
  get overlay() {
    return document.getElementById("overlay");
  },
  get appHeader() {
    return document.getElementById("app-header");
  }
};


export function setView(htmlContent) {
  elements.content.innerHTML = htmlContent;
  window.scrollTo(0, 0);
}

/* visibilidad del sidebar */
export function toggleSidebar() {
   if (window.innerWidth < 768) {
    elements.sidebar.classList.toggle("open");
    elements.overlay.classList.toggle("show");
  } else {
    elements.sidebar.classList.toggle("open");
    elements.overlay.classList.toggle("show");
  }
}

/* Cierra el sidebar  */
export function handleResize() {
  if (window.innerWidth < 768) {
    elements.sidebar.classList.remove("open");
    elements.overlay.classList.remove("show");
  }
}


export function showMainUI() {
  elements.appHeader.classList.remove("hidden");
  elements.sidebar.classList.remove("hidden");
}


export function hideMainUI() {
  elements.bottomNav.classList.add("hidden");
  elements.sidebar.classList.add("hidden");
  elements.appHeader.classList.add("hidden");
}


export function showBottomNavOnly() {
  elements.bottomNav.classList.remove("hidden");
  elements.sidebar.classList.add("hidden");
  elements.appHeader.classList.add("hidden");
}


export function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  }
}


export function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
}


export function toggleSubmenu(submenuId, arrowId = null) {
  const submenu = document.getElementById(submenuId);
  if (submenu) {
    submenu.classList.toggle("hidden");
  }

  if (arrowId) {
    const arrow = document.getElementById(arrowId);
    if (arrow) {
      arrow.classList.toggle("rotate-180");
    }
  }
}

export function toggleTextContent(elementId = "textContentBody") {
  const body = document.getElementById(elementId);
  if (body) {
    body.classList.toggle("hidden");
  }
}


export function updateBottomNavActive(activeIndex) {
  const buttons = elements.bottomNav.querySelectorAll("button");
  buttons.forEach((btn, index) => {
    if (index === activeIndex) {
      btn.classList.add("text-primary-childfund");
    } else {
      btn.classList.remove("text-primary-childfund");
    }
  });
}


export function initDOMListeners() {
  
  window.addEventListener("resize", handleResize);
  
  elements.overlay.addEventListener("click", toggleSidebar);
}


export function getInputValue(inputId) {
  const input = document.getElementById(inputId);
  return input ? input.value : "";
}


export function setInputValue(inputId, value) {
  const input = document.getElementById(inputId);
  if (input) {
    input.value = value;
  }
}


export function getRadioValue(name) {
  const selected = document.querySelector(`input[name="${name}"]:checked`);
  return selected ? selected.value : null;
}


export function updateElementText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}