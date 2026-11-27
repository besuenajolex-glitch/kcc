/**
 * Kabankalan Catholic College, Inc. (KCC) Site Scripts
 * Shared navigation, scroll-to-top, animations, parallax, lightbox, and page helpers
 */
(function () {
  "use strict";

  // 1. Header scroll shadow & scroll-top visibility
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  function handleScroll() {
    const y = window.scrollY || window.pageYOffset;
    document.body.classList.toggle("scrolled", y > 24);
    if (scrollTopBtn) {
      scrollTopBtn.classList.toggle("active", y > 240);
    }
  }
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function (e) {
      if (scrollTopBtn.getAttribute("href") === "#") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  }

  // 2. Mobile navigation drawer
  const mobileToggle = document.getElementById("mobileNavToggle");
  const navMenu = document.getElementById("navmenu");

  function setMobileNav(open) {
    document.body.classList.toggle("mobile-nav-active", open);
    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", String(open));
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-list", !open);
        icon.classList.toggle("bi-x-lg", open);
      }
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      setMobileNav(!document.body.classList.contains("mobile-nav-active"));
    });
  }

  document.addEventListener("click", function (e) {
    if (
      document.body.classList.contains("mobile-nav-active") &&
      navMenu &&
      !navMenu.contains(e.target) &&
      mobileToggle &&
      !mobileToggle.contains(e.target)
    ) {
      setMobileNav(false);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.body.classList.contains("mobile-nav-active")) {
      setMobileNav(false);
    }
  });

  // Mobile dropdown toggle
  document.querySelectorAll(".kcc-nav .dropdown-trigger").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.innerWidth < 1200) {
        trigger.parentElement.classList.toggle("dropdown-open");
      }
    });
  });

  // Silent no-op click guard on inactive secondary-page links
  document.querySelectorAll(".kcc-link-muted:not(.dropdown-trigger)").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
    });
  });

  // Close mobile nav on link click
  document.querySelectorAll(".kcc-nav a:not(.dropdown-trigger):not(.kcc-link-muted)").forEach(function (link) {
    link.addEventListener("click", function () {
      if (document.body.classList.contains("mobile-nav-active")) {
        setMobileNav(false);
      }
    });
  });

  // 3. Initialize AOS animations
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      mirror: false
    });
  }

  // 4. Initialize GLightbox (Campus Life galleries)
  if (typeof GLightbox !== "undefined") {
    GLightbox({
      selector: ".glightbox"
    });
  }

  // 5. Smooth GPU-accelerated parallax for Hero, About KCC, and Apply for Admission
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const parallaxLayers = Array.from(document.querySelectorAll(".kcc-parallax-bg"));

  if (parallaxLayers.length > 0 && !prefersReducedMotion.matches) {
    let ticking = false;

    function updateParallax() {
      ticking = false;
      const vh = window.innerHeight;
      const mobileFactor = window.innerWidth < 768 ? 0.65 : 1;

      for (let i = 0; i < parallaxLayers.length; i++) {
        const bg = parallaxLayers[i];
        const section = bg.parentElement;
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.bottom < -120 || rect.top > vh + 120) continue;

        const speed = (parseFloat(bg.dataset.parallaxSpeed) || 0.25) * mobileFactor;
        const sectionCenter = rect.top + rect.height * 0.5;
        const viewportCenter = vh * 0.5;
        const maxShift = rect.height * 0.2;
        const rawShift = (viewportCenter - sectionCenter) * speed;
        const clampedShift = Math.max(-maxShift, Math.min(maxShift, rawShift));

        bg.style.transform = "translate3d(0, " + clampedShift.toFixed(2) + "px, 0)";
      }
    }

    function requestParallaxTick() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateParallax);
      }
    }

    window.addEventListener("scroll", requestParallaxTick, { passive: true });
    window.addEventListener("resize", requestParallaxTick, { passive: true });
    updateParallax();
  }

  // 6. Category Filter Pills (News & Campus Life)
  document.querySelectorAll("[data-filter-group]").forEach(function (group) {
    const targetSelector = group.getAttribute("data-filter-group");
    const buttons = group.querySelectorAll("[data-filter]");
    const items = document.querySelectorAll(targetSelector);

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        const filter = btn.getAttribute("data-filter");
        buttons.forEach(function (b) {
          b.classList.remove("active");
        });
        btn.classList.add("active");

        items.forEach(function (item) {
          const cat = item.getAttribute("data-category");
          if (filter === "all" || cat === filter) {
            item.classList.remove("d-none");
          } else {
            item.classList.add("d-none");
          }
        });
      });
    });
  });

  // 7. Contact Form Client-Side Handler
  const contactForm = document.getElementById("kccContactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const feedback = document.getElementById("kccContactFeedback");
      const name = (document.getElementById("contactName")?.value || "").trim();
      const email = (document.getElementById("contactEmail")?.value || "").trim();
      const subject = (document.getElementById("contactSubject")?.value || "").trim();
      const message = (document.getElementById("contactMessage")?.value || "").trim();

      if (!name || !email || !subject || !message) {
        if (feedback) {
          feedback.className = "alert alert-danger mt-3";
          feedback.textContent = "Please complete all required fields before sending your message.";
          feedback.classList.remove("d-none");
        }
        return;
      }

      if (feedback) {
        feedback.className = "alert alert-success mt-3";
        feedback.innerHTML =
          '<strong>Message received!</strong> Thank you, ' +
          name.replace(/</g, "&lt;") +
          '. For urgent inquiries, you may also email <a href="mailto:kcc_1927@yahoo.com" class="alert-link">kcc_1927@yahoo.com</a> or call (032) 4712-479.';
        feedback.classList.remove("d-none");
      }
      contactForm.reset();
    });
  }

  // 8. About Page Sticky Jump-Nav Active State
  const aboutNavLinks = document.querySelectorAll(".kcc-subnav .nav-link[href^='#']");
  if (aboutNavLinks.length > 0) {
    const sections = Array.from(aboutNavLinks)
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    function updateAboutNav() {
      const scrollPos = window.scrollY + 190;
      let currentId = sections[0]?.id || "";
      sections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });
      aboutNavLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
      });
    }

    window.addEventListener("scroll", updateAboutNav, { passive: true });
    updateAboutNav();
  }
})();
