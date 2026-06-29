// src/js/theme.js
var initTheme = () => {
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (savedTheme === "dark" || !savedTheme && systemPrefersDark) {
    document.documentElement.setAttribute("data-theme", "dark");
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");
      let newTheme = "light";
      if (currentTheme !== "dark") {
        newTheme = "dark";
      }
      document.documentElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    });
  }
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTheme);
} else {
  initTheme();
}

// src/js/sidebar.js
var initSidebar = () => {
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const sidebarToggles = document.querySelectorAll(".sidebar-toggle:not([data-lumora-init])");
  const sidebarCloses = document.querySelectorAll(".sidebar-close:not([data-lumora-init])");
  function openSidebar() {
    if (sidebar)
      sidebar.classList.add("show");
    if (sidebarOverlay)
      sidebarOverlay.classList.add("show");
  }
  function closeSidebar() {
    if (sidebar)
      sidebar.classList.remove("show");
    if (sidebarOverlay)
      sidebarOverlay.classList.remove("show");
  }
  function toggleDesktop() {
    if (sidebar)
      sidebar.classList.toggle("collapsed");
  }
  sidebarToggles.forEach((toggle) => {
    toggle.setAttribute("data-lumora-init", "true");
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.innerWidth <= 991) {
        const isOpen = sidebar && sidebar.classList.contains("show");
        if (isOpen)
          closeSidebar();
        else
          openSidebar();
      } else {
        toggleDesktop();
      }
    });
  });
  sidebarCloses.forEach((closeBtn) => {
    closeBtn.setAttribute("data-lumora-init", "true");
    closeBtn.addEventListener("click", closeSidebar);
  });
  if (sidebarOverlay && !sidebarOverlay.hasAttribute("data-lumora-init")) {
    sidebarOverlay.setAttribute("data-lumora-init", "true");
    sidebarOverlay.addEventListener("click", closeSidebar);
  }
  const collapseToggles = document.querySelectorAll('.sidebar-nav-link[data-toggle="collapse"]:not([data-lumora-init])');
  collapseToggles.forEach((toggle) => {
    toggle.setAttribute("data-lumora-init", "true");
    toggle.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = toggle.getAttribute("data-target");
      if (!targetId)
        return;
      const targetMenu = document.getElementById(targetId.replace("#", ""));
      if (targetMenu) {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !isExpanded);
        targetMenu.classList.toggle("show");
      }
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initSidebar);
} else {
  initSidebar();
}
window.Lumora = window.Lumora || {};
window.Lumora.initSidebar = initSidebar;

// src/js/accordion.js
var initAccordion = () => {
  const accordionButtons = document.querySelectorAll(".accordion-button");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const collapseId = button.getAttribute("aria-controls");
      const collapseContent = document.getElementById(collapseId);
      const accordionGroup = button.closest(".accordion");
      if (accordionGroup) {
        const groupButtons = accordionGroup.querySelectorAll(".accordion-button");
        groupButtons.forEach((btn) => {
          if (btn !== button) {
            btn.setAttribute("aria-expanded", "false");
            const target = document.getElementById(btn.getAttribute("aria-controls"));
            if (target)
              target.classList.remove("show");
          }
        });
      }
      if (isExpanded) {
        button.setAttribute("aria-expanded", "false");
        if (collapseContent)
          collapseContent.classList.remove("show");
      } else {
        button.setAttribute("aria-expanded", "true");
        if (collapseContent)
          collapseContent.classList.add("show");
      }
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAccordion);
} else {
  initAccordion();
}
window.Lumora = window.Lumora || {};
window.Lumora.initAccordion = initAccordion;

// src/js/dropdown.js
var initDropdown = () => {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");
  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = toggle.nextElementSibling;
      if (menu && menu.classList.contains("dropdown-menu")) {
        menu.classList.toggle("show");
        toggle.setAttribute("aria-expanded", menu.classList.contains("show"));
      }
    });
  });
  document.addEventListener("click", () => {
    const menus = document.querySelectorAll(".dropdown-menu.show");
    menus.forEach((menu) => {
      menu.classList.remove("show");
      const toggle = menu.previousElementSibling;
      if (toggle)
        toggle.setAttribute("aria-expanded", "false");
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDropdown);
} else {
  initDropdown();
}
window.Lumora = window.Lumora || {};
window.Lumora.initDropdown = initDropdown;

// src/js/modal.js
var initModal = () => {
  const modalTriggers = document.querySelectorAll('[data-toggle="modal"]');
  const modalDismissers = document.querySelectorAll('[data-dismiss="modal"]');
  const backdrops = document.querySelectorAll(".modal-backdrop");
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add("show");
      document.body.style.overflow = "hidden";
    }
  }
  function closeModal(modal) {
    if (modal) {
      modal.classList.remove("show");
      document.body.style.overflow = "";
    }
  }
  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = trigger.getAttribute("data-target");
      if (targetId)
        openModal(targetId.replace("#", ""));
    });
  });
  modalDismissers.forEach((dismisser) => {
    dismisser.addEventListener("click", (e) => {
      e.preventDefault();
      const modal = dismisser.closest(".modal-backdrop");
      if (modal)
        closeModal(modal);
    });
  });
  backdrops.forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initModal);
} else {
  initModal();
}
window.Lumora = window.Lumora || {};
window.Lumora.initModal = initModal;

// src/js/alert.js
var initAlerts = () => {
  const dismissButtons = document.querySelectorAll('[data-dismiss="alert"]');
  dismissButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const alert = btn.closest(".alert");
      if (alert) {
        alert.classList.add("fade-out");
        setTimeout(() => {
          alert.remove();
        }, 300);
      }
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initAlerts);
} else {
  initAlerts();
}
window.Lumora = window.Lumora || {};
window.Lumora.initAlerts = initAlerts;

// src/js/tab.js
var initTabs = () => {
  const tabLinks = document.querySelectorAll('[data-toggle="tab"]');
  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      if (!targetId)
        return;
      const targetPane = document.querySelector(targetId);
      if (!targetPane)
        return;
      const nav = link.closest(".nav-tabs");
      if (!nav)
        return;
      nav.querySelectorAll(".nav-link").forEach((navLink) => {
        navLink.classList.remove("active");
      });
      const tabContent = targetPane.closest(".tab-content");
      if (tabContent) {
        tabContent.querySelectorAll(".tab-pane").forEach((pane) => {
          pane.classList.remove("active");
        });
      }
      link.classList.add("active");
      targetPane.classList.add("active");
    });
  });
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTabs);
} else {
  initTabs();
}
window.Lumora = window.Lumora || {};
window.Lumora.initTabs = initTabs;

// src/js/carousel.js
class Carousel {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.items = Array.from(this.element.querySelectorAll(".carousel-item"));
    this.indicators = Array.from(this.element.querySelectorAll(".carousel-indicators [data-bs-target]"));
    this.currentIndex = this.items.findIndex((item) => item.classList.contains("active")) || 0;
    if (this.currentIndex === -1)
      this.currentIndex = 0;
    this.isTransitioning = false;
    this.bindEvents();
  }
  bindEvents() {
    const prevBtn = this.element.querySelector('[data-bs-slide="prev"]');
    const nextBtn = this.element.querySelector('[data-bs-slide="next"]');
    if (prevBtn)
      prevBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.prev();
      });
    if (nextBtn)
      nextBtn.addEventListener("click", (e) => {
        e.preventDefault();
        this.next();
      });
    this.indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => this.to(index));
    });
  }
  next() {
    if (this.isTransitioning)
      return;
    const nextIndex = (this.currentIndex + 1) % this.items.length;
    this.slide("next", nextIndex);
  }
  prev() {
    if (this.isTransitioning)
      return;
    const prevIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.slide("prev", prevIndex);
  }
  to(index) {
    if (this.isTransitioning || index === this.currentIndex)
      return;
    const direction = index > this.currentIndex ? "next" : "prev";
    this.slide(direction, index);
  }
  slide(direction, nextIndex) {
    this.isTransitioning = true;
    const currentItem = this.items[this.currentIndex];
    const nextItem = this.items[nextIndex];
    const directionClass = direction === "next" ? "carousel-item-start" : "carousel-item-end";
    const orderClass = direction === "next" ? "carousel-item-next" : "carousel-item-prev";
    nextItem.classList.add(orderClass);
    nextItem.offsetWidth;
    currentItem.classList.add(directionClass);
    nextItem.classList.add(directionClass);
    this.indicators.forEach((ind, i) => {
      if (i === nextIndex)
        ind.classList.add("active");
      else
        ind.classList.remove("active");
    });
    setTimeout(() => {
      nextItem.classList.remove(orderClass, directionClass);
      nextItem.classList.add("active");
      currentItem.classList.remove("active", directionClass);
      this.currentIndex = nextIndex;
      this.isTransitioning = false;
    }, 600);
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".carousel").forEach((el) => new Carousel(el));
});

// src/js/collapse.js
class Collapse {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.isTransitioning = false;
  }
  toggle() {
    if (this.element.classList.contains("show")) {
      this.hide();
    } else {
      this.show();
    }
  }
  show() {
    if (this.isTransitioning || this.element.classList.contains("show"))
      return;
    this.element.classList.remove("collapse");
    this.element.classList.add("collapsing");
    this.element.style.height = 0;
    this.isTransitioning = true;
    const scrollHeight = this.element.scrollHeight;
    const complete = () => {
      this.element.classList.remove("collapsing");
      this.element.classList.add("collapse", "show");
      this.element.style.height = "";
      this.isTransitioning = false;
      this.element.removeEventListener("transitionend", complete);
    };
    this.element.addEventListener("transitionend", complete);
    this.element.style.height = scrollHeight + "px";
  }
  hide() {
    if (this.isTransitioning || !this.element.classList.contains("show"))
      return;
    this.element.style.height = this.element.getBoundingClientRect().height + "px";
    this.element.offsetHeight;
    this.element.classList.add("collapsing");
    this.element.classList.remove("collapse", "show");
    this.isTransitioning = true;
    const complete = () => {
      this.element.classList.remove("collapsing");
      this.element.classList.add("collapse");
      this.isTransitioning = false;
      this.element.removeEventListener("transitionend", complete);
    };
    this.element.addEventListener("transitionend", complete);
    this.element.style.height = "";
  }
}
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="collapse"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute("data-bs-target") || toggleBtn.getAttribute("href");
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      if (!targetEl._collapse)
        targetEl._collapse = new Collapse(targetEl);
      targetEl._collapse.toggle();
    }
  }
});

// src/js/offcanvas.js
class Offcanvas {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.backdrop = null;
    this.isShown = false;
    this.element.addEventListener("click", (e) => {
      if (e.target.hasAttribute("data-bs-dismiss") && e.target.getAttribute("data-bs-dismiss") === "offcanvas") {
        this.hide();
      }
    });
  }
  toggle() {
    this.isShown ? this.hide() : this.show();
  }
  show() {
    if (this.isShown)
      return;
    this.isShown = true;
    this.backdrop = document.createElement("div");
    this.backdrop.className = "offcanvas-backdrop fade";
    document.body.appendChild(this.backdrop);
    this.backdrop.offsetWidth;
    this.backdrop.classList.add("show");
    this.element.classList.add("show");
    document.body.style.overflow = "hidden";
    this.backdrop.addEventListener("click", () => this.hide());
  }
  hide() {
    if (!this.isShown)
      return;
    this.isShown = false;
    this.element.classList.remove("show");
    this.backdrop.classList.remove("show");
    setTimeout(() => {
      this.backdrop.remove();
      this.backdrop = null;
      document.body.style.overflow = "";
    }, 300);
  }
}
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="offcanvas"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute("data-bs-target") || toggleBtn.getAttribute("href");
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      if (!targetEl._offcanvas)
        targetEl._offcanvas = new Offcanvas(targetEl);
      targetEl._offcanvas.toggle();
    }
  }
});

// src/js/popover.js
class Popover {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.popoverEl = null;
    this.isShown = false;
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      this.toggle();
    });
    document.addEventListener("click", (e) => {
      if (this.isShown && !this.element.contains(e.target) && (!this.popoverEl || !this.popoverEl.contains(e.target))) {
        this.hide();
      }
    });
  }
  toggle() {
    this.isShown ? this.hide() : this.show();
  }
  show() {
    if (this.isShown)
      return;
    const title = this.element.getAttribute("title") || this.element.getAttribute("data-bs-title") || "";
    const content = this.element.getAttribute("data-bs-content") || "";
    this.popoverEl = document.createElement("div");
    this.popoverEl.className = "popover bs-popover-top";
    this.popoverEl.innerHTML = `
      <div class="popover-arrow"></div>
      ${title ? `<h3 class="popover-header">${title}</h3>` : ""}
      <div class="popover-body">${content}</div>
    `;
    document.body.appendChild(this.popoverEl);
    this.popoverEl.classList.add("show");
    const rect = this.element.getBoundingClientRect();
    const popRect = this.popoverEl.getBoundingClientRect();
    this.popoverEl.style.top = rect.top + window.scrollY - popRect.height - 8 + "px";
    this.popoverEl.style.left = rect.left + window.scrollX + rect.width / 2 - popRect.width / 2 + "px";
    this.isShown = true;
  }
  hide() {
    if (!this.isShown || !this.popoverEl)
      return;
    this.popoverEl.classList.remove("show");
    this.popoverEl.remove();
    this.popoverEl = null;
    this.isShown = false;
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-bs-toggle="popover"]').forEach((el) => new Popover(el));
});

// src/js/scrollspy.js
class ScrollSpy {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    const targetSelector = this.element.getAttribute("data-bs-target") || "body";
    this.target = document.querySelector(targetSelector);
    if (!this.target)
      return;
    this.links = Array.from(this.target.querySelectorAll(".nav-link, .list-group-item"));
    this.observables = this.links.map((link) => {
      const hash = link.getAttribute("href");
      if (hash && hash.startsWith("#") && hash.length > 1) {
        const el = document.querySelector(hash);
        if (el)
          return { link, el };
      }
      return null;
    }).filter((item) => item !== null);
    this.initObserver();
  }
  initObserver() {
    const options = {
      root: this.element.tagName === "BODY" ? null : this.element,
      rootMargin: "0px 0px -50% 0px",
      threshold: 0
    };
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          this.activate("#" + id);
        }
      });
    }, options);
    this.observables.forEach((item) => this.observer.observe(item.el));
  }
  activate(hash) {
    this.links.forEach((l) => l.classList.remove("active"));
    const activeLink = this.links.find((l) => l.getAttribute("href") === hash);
    if (activeLink)
      activeLink.classList.add("active");
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-bs-spy="scroll"]').forEach((el) => new ScrollSpy(el));
});

// src/js/toast.js
class Toast {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.isShown = false;
    const closeBtn = this.element.querySelector('[data-bs-dismiss="toast"]');
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.hide());
    }
  }
  show() {
    if (this.isShown)
      return;
    this.element.classList.add("showing");
    this.element.classList.add("show");
    this.element.offsetHeight;
    this.element.style.opacity = "1";
    setTimeout(() => {
      this.element.classList.remove("showing");
      this.isShown = true;
      const autohide = this.element.getAttribute("data-bs-autohide") !== "false";
      if (autohide) {
        setTimeout(() => this.hide(), 5000);
      }
    }, 150);
  }
  hide() {
    if (!this.isShown)
      return;
    this.element.classList.add("showing");
    this.element.style.opacity = "0";
    setTimeout(() => {
      this.element.classList.remove("show", "showing");
      this.isShown = false;
    }, 150);
  }
}
document.addEventListener("click", (e) => {
  const toggleBtn = e.target.closest('[data-bs-toggle="toast"]');
  if (toggleBtn) {
    e.preventDefault();
    const targetSelector = toggleBtn.getAttribute("data-bs-target");
    const targetEl = document.querySelector(targetSelector);
    if (targetEl) {
      if (!targetEl._toast)
        targetEl._toast = new Toast(targetEl);
      targetEl._toast.show();
    }
  }
});

// src/js/tooltip.js
class Tooltip {
  constructor(element) {
    this.element = typeof element === "string" ? document.querySelector(element) : element;
    if (!this.element)
      return;
    this.tooltipEl = null;
    this.isShown = false;
    this.element.addEventListener("mouseenter", () => this.show());
    this.element.addEventListener("mouseleave", () => this.hide());
    this.element.addEventListener("focus", () => this.show());
    this.element.addEventListener("blur", () => this.hide());
  }
  show() {
    if (this.isShown)
      return;
    const title = this.element.getAttribute("title") || this.element.getAttribute("data-bs-title");
    if (!title)
      return;
    this.element.setAttribute("data-original-title", title);
    this.element.removeAttribute("title");
    this.tooltipEl = document.createElement("div");
    this.tooltipEl.className = "tooltip bs-tooltip-top show";
    this.tooltipEl.innerHTML = `
      <div class="tooltip-arrow"></div>
      <div class="tooltip-inner">${title}</div>
    `;
    document.body.appendChild(this.tooltipEl);
    const rect = this.element.getBoundingClientRect();
    const tipRect = this.tooltipEl.getBoundingClientRect();
    this.tooltipEl.style.top = rect.top + window.scrollY - tipRect.height - 4 + "px";
    this.tooltipEl.style.left = rect.left + window.scrollX + rect.width / 2 - tipRect.width / 2 + "px";
    this.isShown = true;
  }
  hide() {
    if (!this.isShown || !this.tooltipEl)
      return;
    this.tooltipEl.remove();
    this.tooltipEl = null;
    this.isShown = false;
    const origTitle = this.element.getAttribute("data-original-title");
    if (origTitle) {
      this.element.setAttribute("title", origTitle);
    }
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => new Tooltip(el));
});
