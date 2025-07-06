document.addEventListener("astro:before-preparation", (event) => {
    const originalLoader = event.loader;

    event.loader = async function () {
      await new Promise((resolve) => setTimeout(resolve, 250));
      return originalLoader();
    };
  });

  function setupNavigation() {
    const nav = document.querySelector(".nav-link");
    if (!nav) return;

    const navLinks = nav.querySelectorAll("a");
    const navBackground = nav.querySelector(".nav-background") as HTMLElement;
    if (!navBackground) return;

    const currentUrl = window.location.pathname;
    function positions(element, backgroundElement) {
      const rect = element.getBoundingClientRect();
      const nav = element.parentElement.getBoundingClientRect();
      const left = rect.left - nav.left;
      

      backgroundElement.style.width = `${rect.width}px`;
      backgroundElement.style.height = `${rect.height}px`;
      backgroundElement.style.left = `${left}px`;

      
    }

    let matchFound = false;
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentUrl) {
        link.classList.add("active");
        positions(link, navBackground);
        navBackground.style.opacity = "1";
        matchFound = true;
      }
    });

    if (!matchFound) {
      navBackground.style.opacity = "0";
    }

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (!href) return;
        const currentActive = nav.querySelector("a.active");
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        link.classList.add("active");

        positions(link, navBackground);
      });
    });
  }

  document.addEventListener("DOMContentLoaded", setupNavigation);
  document.addEventListener("astro:after-swap", setupNavigation);