/**
 * Kabankalan Catholic College, Inc. (KCC) Interactive Helpers
 */
(function () {
  "use strict";

  // 1. Category Filter Pills (News & Campus Life)
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

  // 2. Contact Form Client-Side Handler
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

  // 3. About Page Sticky Jump-Nav Active State
  const aboutNavLinks = document.querySelectorAll(".kcc-subnav .nav-link[href^='#']");
  if (aboutNavLinks.length > 0) {
    const sections = Array.from(aboutNavLinks)
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY + 180;
      let currentId = sections[0]?.id || "";
      sections.forEach(function (sec) {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });
      aboutNavLinks.forEach(function (link) {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
      });
    });
  }
})();
