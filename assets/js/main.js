const revealItems = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

document.querySelectorAll("[data-year]").forEach((item) => {
  item.textContent = new Date().getFullYear();
});

const methodTabs = document.querySelectorAll("[data-method-tab]");
const methodPanels = document.querySelectorAll("[data-method-panel]");

methodTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.methodTab;

    methodTabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    methodPanels.forEach((panel) => {
      panel.classList.toggle("is-active", panel.dataset.methodPanel === target);
    });
  });
});

const priorityCards = document.querySelectorAll("[data-priority-card]");
const priorityTitle = document.querySelector("[data-priority-title]");
const priorityCopy = document.querySelector("[data-priority-copy]");
const priorityNote = document.querySelector("[data-priority-note]");

priorityCards.forEach((card) => {
  card.addEventListener("click", () => {
    priorityCards.forEach((item) => item.classList.toggle("is-selected", item === card));

    if (priorityTitle) priorityTitle.textContent = card.dataset.title;
    if (priorityCopy) priorityCopy.textContent = card.dataset.copy;
    if (priorityNote) priorityNote.textContent = card.dataset.note;
  });
});

const navLinks = document.querySelectorAll("[data-nav-link]");
const sections = document.querySelectorAll("[data-section]");

if ("IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => navObserver.observe(section));
}
