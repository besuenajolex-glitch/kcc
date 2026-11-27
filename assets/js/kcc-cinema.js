/**
 * Kabankalan Catholic College, Inc. (KCC)
 * Royal Heritage Editorial — GSAP, ScrollTrigger, Lenis, Canvas FX & Interactive Catalog
 */
(function () {
  "use strict";

  var docEl = document.documentElement;
  docEl.dataset.kccCinema = "true";

  var reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  var isReducedMotion = reducedMotionQuery.matches;
  var hasGsap = typeof window.gsap !== "undefined";
  var hasScrollTrigger = typeof window.ScrollTrigger !== "undefined";
  var hasLenis = typeof window.Lenis !== "undefined";
  var isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches && window.innerWidth >= 1200;

  if (isReducedMotion) {
    docEl.classList.add("kcc-reduced-motion");
  }
  if (hasGsap && hasScrollTrigger && !isReducedMotion) {
    window.gsap.registerPlugin(window.ScrollTrigger);
    docEl.classList.add("kcc-anim-ready");
  }

  /*--------------------------------------------------------------
   * 1. Authentic KCC Modal Catalog (Programs, Levels, Heritage, Admissions)
   *------------------------------------------------------------*/
  var KCC_CATALOG = {
    bsba: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Business Administration (BSBA)",
      img: "assets/img/programs/bsba.jpg",
      summary:
        "Develops strategic business thinkers ready for corporate management, banking, financial analysis, marketing strategy, and entrepreneurship.",
      box1Title: "Available Majors",
      box1Items: ["Financial Management", "Marketing Management"],
      box2Title: "Career Pathways",
      box2Items: ["Financial Analyst", "Marketing Manager", "Business Consultant", "Entrepreneur"]
    },
    bsit: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Information Technology (BSIT)",
      img: "assets/img/programs/bsit.png",
      summary:
        "Develops future-ready IT professionals with strong competencies in software engineering, networking, database management, cybersecurity, and building real-world applications.",
      box1Title: "Core Focus Areas",
      box1Items: ["Software Development", "Networking & Systems", "Database Management", "Emerging Technologies"],
      box2Title: "Career Pathways",
      box2Items: ["Software Developer", "Systems Analyst", "Network Administrator", "IT Project Manager"]
    },
    bsa: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Accountancy (BSA)",
      img: "assets/img/programs/bsa.png",
      summary:
        "Comprehensive preparation in financial accounting, auditing, taxation, and management advisory services to form ethical accountants ready for the CPA licensure examination.",
      box1Title: "Academic Pillars",
      box1Items: ["Financial Accounting", "Auditing & Assurance", "Taxation", "CPA Licensure Readiness"],
      box2Title: "Career Pathways",
      box2Items: ["Certified Public Accountant", "External / Internal Auditor", "Tax Specialist", "Chief Finance Officer"]
    },
    bsais: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Accounting Information System (BSAIS)",
      img: "assets/img/programs/bsis.png",
      summary:
        "Integrates accounting principles with enterprise information technology so graduates can design, implement, and manage accounting systems and business analytics.",
      box1Title: "Core Competencies",
      box1Items: ["Enterprise Information Systems", "Accounting Analytics", "Internal Controls", "IT Audit Foundations"],
      box2Title: "Career Pathways",
      box2Items: ["Accounting Systems Analyst", "ERP Specialist", "Risk & Compliance Officer", "IT Auditor"]
    },
    bsma: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Management Accounting (BSMA)",
      img: "assets/img/programs/bsais.png",
      summary:
        "Focuses on strategic financial management, cost analysis, budgeting, performance evaluation, and decision-making for modern organizations.",
      box1Title: "Core Competencies",
      box1Items: ["Cost Accounting", "Strategic Budgeting", "Performance Evaluation", "Corporate Advisory"],
      box2Title: "Career Pathways",
      box2Items: ["Management Accountant", "Budget Analyst", "Corporate Controller", "Financial Planner"]
    },
    bstm: {
      kicker: "CMAT • Degree Program",
      title: "Bachelor of Science in Tourism Management (BSTM)",
      img: "assets/img/programs/bstm.png",
      summary:
        "Prepares service-oriented leaders for the dynamic tourism and hospitality industry through training in travel operations, events management, and sustainable tourism.",
      box1Title: "Core Competencies",
      box1Items: ["Tourism Planning", "Event Management", "Hospitality Operations", "Sustainable Tourism"],
      box2Title: "Career Pathways",
      box2Items: ["Tourism Officer", "Travel Operations Manager", "Events Planner", "Airline & Hospitality Specialist"]
    },
    beed: {
      kicker: "CEAS • Teacher Education",
      title: "Bachelor of Elementary Education (BEEd)",
      img: "assets/img/programs/beed.png",
      summary:
        "Forms compassionate and skilled educators dedicated to foundational childhood learning with strong pedagogical foundations and content mastery.",
      box1Title: "Specialization",
      box1Items: ["General Education", "Child-Centered Pedagogy", "Instructional Design", "Christian Formation"],
      box2Title: "Career Pathways",
      box2Items: ["Elementary School Teacher", "Curriculum Developer", "Academic Coordinator"]
    },
    bsed: {
      kicker: "CEAS • Teacher Education",
      title: "Bachelor of Secondary Education (BSEd)",
      img: "assets/img/programs/bsed.png",
      summary:
        "Trains subject-matter educators ready to inspire junior and senior high school learners with advanced discipline knowledge and teaching methodologies.",
      box1Title: "Available Majors",
      box1Items: ["English", "Filipino", "Values Education", "Science", "Mathematics"],
      box2Title: "Career Pathways",
      box2Items: ["High School Teacher", "Subject Area Coordinator", "Instructional Designer"]
    },
    beced: {
      kicker: "CEAS • Teacher Education",
      title: "Bachelor of Early Childhood Education (BECEd)",
      img: "assets/img/programs/beced.png",
      summary:
        "Prepares educators specializing in early childhood development, play-based pedagogy, and nurturing learning environments for young children.",
      box1Title: "Core Focus Areas",
      box1Items: ["Early Childhood Development", "Play-Based Pedagogy", "Preschool Instruction", "Family Partnership"],
      box2Title: "Career Pathways",
      box2Items: ["Preschool Teacher", "Early Childhood Specialist", "Learning Center Director"]
    },
    bped: {
      kicker: "CEAS • Teacher Education",
      title: "Bachelor of Physical Education (BPEd)",
      img: "assets/img/programs/bped.png",
      summary:
        "Develops competent physical education teachers and sports professionals grounded in exercise science, sports coaching, and health-related fitness.",
      box1Title: "Core Focus Areas",
      box1Items: ["Exercise Science", "Sports Coaching", "Health & Fitness", "Movement Pedagogy"],
      box2Title: "Career Pathways",
      box2Items: ["PE Teacher", "Athletic Coach", "Sports Program Coordinator", "Wellness Trainer"]
    },
    baphilo: {
      kicker: "CEAS • Liberal Arts",
      title: "Bachelor of Arts in Philosophy (AB Philosophy)",
      img: "assets/img/programs/baphilo.png",
      summary:
        "Cultivates critical inquiry, analytical reasoning, logic, and ethical reflection on existence, knowledge, and the human condition—ideal preparation for law and ministry.",
      box1Title: "Core Focus Areas",
      box1Items: ["Ethics & Moral Philosophy", "Logic & Critical Inquiry", "History of Philosophy", "Pastoral & Civic Thought"],
      box2Title: "Career Pathways",
      box2Items: ["Pre-Law & Legal Research", "Educator", "Ethics Consultant", "Pastoral & Public Service"]
    },
    bspsycho: {
      kicker: "CEAS • Behavioral Sciences",
      title: "Bachelor of Science in Psychology (BS Psychology)",
      img: "assets/img/programs/bspsycho.png",
      summary:
        "Provides a comprehensive understanding of human behavior, mental health, psychological assessment, counseling foundations, and research.",
      box1Title: "Core Focus Areas",
      box1Items: ["Psychological Assessment", "Counseling Foundations", "Organizational Psychology", "Empirical Research"],
      box2Title: "Career Pathways",
      box2Items: ["Psychometrician", "HR Specialist", "Guidance Associate", "Pre-Medicine / Graduate Studies"]
    },
    bscrim: {
      kicker: "College of Criminology",
      title: "Bachelor of Science in Criminology (BS Criminology)",
      img: "assets/img/programs/bscrim.png",
      summary:
        "Provides rigorous academic and practical training in criminal law, forensic science, crime detection, and law enforcement administration anchored in Catholic ethics.",
      box1Title: "Core Focus Areas",
      box1Items: ["Criminal Law & Jurisprudence", "Forensic Science", "Crime Detection & Investigation", "Law Enforcement Admin"],
      box2Title: "Career Pathways",
      box2Items: ["Registered Criminologist", "PNP / BFP / BJMP / NBI Officer", "Forensic Specialist", "Security & Investigation Manager"]
    },
    "basic-education": {
      kicker: "Kindergarten to Grade 10",
      title: "Basic Education Department (Elementary & Junior High)",
      img: "assets/img/home/basic_education.jpg",
      summary:
        "A warm, Christ-centered learning environment where children build strong literacy, numeracy, STEM readiness, and K-C-C-I-A-N-S character from Kindergarten through Grade 10.",
      box1Title: "Why Choose KCC Basic Ed",
      box1Items: ["Christ-Centered Daily Formation", "Licensed Dedicated Teachers", "STEM Readiness", "Safe Child-Friendly Campus"],
      box2Title: "9 Core JHS Learning Areas",
      box2Items: ["English", "Mathematics", "Science", "Filipino", "Araling Panlipunan", "MAPEH", "EsP", "TLE", "Christian Living"]
    },
    "senior-high": {
      kicker: "Grades 11 & 12",
      title: "Senior High School — Academic & TVL Tracks",
      img: "assets/img/home/senior_highschool.jpg",
      summary:
        "Charting your path to the future with DepEd-aligned college readiness, TESDA-oriented technical skills, and Catholic values formation.",
      box1Title: "Academic Track Strands",
      box1Items: ["STEM (Science, Tech, Eng, Math)", "ABM (Accountancy & Business)", "HUMSS (Humanities & Social Sciences)", "GAS (General Academic Strand)"],
      box2Title: "TVL Track Specializations",
      box2Items: ["TVL • ICT (Programming & Systems)", "TVL • HE (Culinary & Hospitality)", "TVL • IA (Electrical & Trade Skills)"]
    },
    heritage: {
      kicker: "Founded 1927 • Road to Centennial",
      title: "Our Catholic Identity, History & School Seal",
      img: "assets/img/home/about_kcc.png",
      summary:
        "Guided by the Great Commission — “Teach Ye All Nations” (Matthew 28:19) — Kabankalan Catholic College, Inc. forms socially conscious, morally upright, and intellectually competent individuals in the Diocese of Kabankalan.",
      box1Title: "The School Seal Symbolism",
      box1Items: [
        "Twelve Waves: The Twelve Apostles & Church Mission",
        "Two Stars: Faith & Reason Guiding Learners",
        "Philippine Map: Commitment to Nation-Building",
        "Dark Blue & Gold: Marian Devotion & Excellence"
      ],
      box2Title: "Historical Milestones (1927–2025)",
      box2Items: [
        "1927: Founded as Kabankalan Institute",
        "1953: Columban Fathers Stewardship",
        "1963–64: College & Elementary Opened",
        "1988: Cornerstone of Diocese of Kabankalan",
        "2025: Fr. Richard L. Lachica, MAEd Appointed President"
      ]
    },
    admissions: {
      kicker: "Admissions Guide",
      title: "Four Steps to Enrollment & Requirements",
      img: "assets/img/home/admission.png",
      summary:
        "Begin your journey as a KCCian. Pre-register online via the KCC Wela portal or visit the Registrar’s Office at Guanzon St., Brgy. 1, Kabankalan City.",
      box1Title: "Four Steps to Enrollment",
      box1Items: [
        "01 Submit Requirements (Online via Wela or Registrar)",
        "02 Take Entrance & Placement Examination",
        "03 Attend Department Head / Counselor Interview",
        "04 Finalize Enlistment & Settle Assessment"
      ],
      box2Title: "Document Checklist",
      box2Items: [
        "Report Card (Form 138 / SF9)",
        "PSA Birth Certificate (Photocopy)",
        "Certificate of Good Moral Character",
        "2x2 ID Pictures (White Background)",
        "ESC/QVR Voucher (SHS) or TOR (Transferees)"
      ]
    }
  };

  /*--------------------------------------------------------------
   * 2. Preloader & Lenis Smooth Scroll Setup
   *------------------------------------------------------------*/
  var preloader = document.getElementById("kccPreloader");
  var lenis = null;

  function dismissPreloaderNow() {
    if (!preloader) return;
    preloader.classList.add("is-done");
    preloader.setAttribute("aria-hidden", "true");
  }

  if (isReducedMotion || !hasGsap || !hasScrollTrigger) {
    dismissPreloaderNow();
  }

  if (hasLenis && !isReducedMotion) {
    lenis = new window.Lenis({
      lerp: 0.085,
      smoothWheel: true,
      wheelMultiplier: 0.95
    });

    if (hasGsap && hasScrollTrigger) {
      lenis.on("scroll", window.ScrollTrigger.update);
      window.gsap.ticker.add(function (time) {
        lenis.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  // Smooth anchor navigation across the single-page experience
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      if (anchor.hasAttribute("data-kcc-modal")) return;
      var href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      var targetEl = document.querySelector(href);
      if (!targetEl) return;

      e.preventDefault();
      if (document.body.classList.contains("mobile-nav-active")) {
        document.body.classList.remove("mobile-nav-active");
        var toggle = document.getElementById("mobileNavToggle");
        if (toggle) {
          toggle.setAttribute("aria-expanded", "false");
          var icon = toggle.querySelector("i");
          if (icon) {
            icon.classList.add("bi-list");
            icon.classList.remove("bi-x-lg");
          }
        }
      }

      if (lenis) {
        lenis.scrollTo(targetEl, { offset: -74, duration: 1.15 });
      } else {
        targetEl.scrollIntoView({ behavior: isReducedMotion ? "auto" : "smooth" });
      }
    });
  });

  /*--------------------------------------------------------------
   * 3. Quick-View Modal Engine (Works in all motion modes)
   *------------------------------------------------------------*/
  var modalEl = document.getElementById("kccDetailModal");
  var modalInstance = null;

  function openCatalogModal(key) {
    if (!modalEl || typeof window.bootstrap === "undefined") return;
    var item = KCC_CATALOG[key];
    if (!item) return;

    var kickerEl = modalEl.querySelector("[data-modal-kicker]");
    var titleEl = modalEl.querySelector("[data-modal-title]");
    var imgEl = modalEl.querySelector("[data-modal-img]");
    var summaryEl = modalEl.querySelector("[data-modal-summary]");
    var box1TitleEl = modalEl.querySelector("[data-modal-box1-title]");
    var box1ListEl = modalEl.querySelector("[data-modal-box1-list]");
    var box2TitleEl = modalEl.querySelector("[data-modal-box2-title]");
    var box2ListEl = modalEl.querySelector("[data-modal-box2-list]");

    if (kickerEl) kickerEl.textContent = item.kicker;
    if (titleEl) titleEl.textContent = item.title;
    if (summaryEl) summaryEl.textContent = item.summary;
    if (imgEl) {
      imgEl.src = item.img;
      imgEl.alt = item.title;
    }

    function fillList(listEl, items) {
      if (!listEl) return;
      listEl.innerHTML = "";
      items.forEach(function (txt) {
        var li = document.createElement("li");
        li.textContent = txt;
        listEl.appendChild(li);
      });
    }

    if (box1TitleEl) box1TitleEl.textContent = item.box1Title;
    fillList(box1ListEl, item.box1Items || []);
    if (box2TitleEl) box2TitleEl.textContent = item.box2Title;
    fillList(box2ListEl, item.box2Items || []);

    modalInstance = window.bootstrap.Modal.getOrCreateInstance(modalEl);
    modalInstance.show();
  }

  if (modalEl) {
    modalEl.addEventListener("show.bs.modal", function () {
      if (lenis) lenis.stop();
    });
    modalEl.addEventListener("hidden.bs.modal", function () {
      if (lenis) lenis.start();
    });
  }

  document.querySelectorAll("[data-kcc-modal]").forEach(function (trigger) {
    trigger.addEventListener("click", function (e) {
      e.preventDefault();
      var key = trigger.getAttribute("data-kcc-modal");
      openCatalogModal(key);
    });
  });

  /*--------------------------------------------------------------
   * 4. Department Filter Tabs (CMAT / CEAS / Criminology / All)
   *------------------------------------------------------------*/
  var filterButtons = Array.from(document.querySelectorAll(".kcc-dept-filter-btn"));
  var deptGroups = Array.from(document.querySelectorAll(".kcc-dept-group[data-dept]"));

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var selected = btn.getAttribute("data-dept-filter");
      filterButtons.forEach(function (b) {
        var active = b === btn;
        b.classList.toggle("is-active", active);
        b.setAttribute("aria-pressed", String(active));
      });

      deptGroups.forEach(function (group) {
        var match = selected === "all" || group.getAttribute("data-dept") === selected;
        group.classList.toggle("d-none", !match);
        if (match && hasGsap && !isReducedMotion) {
          var cards = group.querySelectorAll(".kcc-offered-card");
          window.gsap.fromTo(
            cards,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.48, stagger: 0.05, ease: "power3.out", overwrite: "auto" }
          );
        }
      });

      if (hasScrollTrigger && !isReducedMotion) {
        window.ScrollTrigger.refresh();
      }
    });
  });

  /*--------------------------------------------------------------
   * 5. Scroll Progress, Circular Back-to-Top Ring & Chapter ScrollSpy
   *------------------------------------------------------------*/
  var progressBar = document.getElementById("kccScrollProgress");
  var scrollTopCircle = document.querySelector(".kcc-scroll-top-ring circle");
  var scrollRingCircumference = 144.5;
  var chapterDots = Array.from(document.querySelectorAll(".kcc-chapter-dot"));
  var topNavLinks = Array.from(document.querySelectorAll(".kcc-nav > ul > li > a[href^='#']"));
  var observedSections = ["home", "about", "pillars", "programs", "programs-offered", "admissions-cta"]
    .map(function (id) {
      return document.getElementById(id);
    })
    .filter(Boolean);

  function updateScrollChrome() {
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var maxScroll = Math.max(1, docEl.scrollHeight - window.innerHeight);
    var ratio = Math.min(1, Math.max(0, scrollY / maxScroll));

    if (progressBar) {
      progressBar.style.transform = "scaleX(" + ratio.toFixed(4) + ")";
    }
    if (scrollTopCircle) {
      scrollTopCircle.style.strokeDashoffset = (scrollRingCircumference * (1 - ratio)).toFixed(2);
    }

    var activeId = observedSections[0] ? observedSections[0].id : "home";
    var probe = scrollY + window.innerHeight * 0.36;
    for (var i = 0; i < observedSections.length; i++) {
      if (observedSections[i].offsetTop <= probe) {
        activeId = observedSections[i].id;
      }
    }

    chapterDots.forEach(function (dot) {
      dot.classList.toggle("is-active", dot.getAttribute("href") === "#" + activeId);
    });

    topNavLinks.forEach(function (link) {
      var href = link.getAttribute("href");
      var match = href === "#" + activeId || (activeId === "programs-offered" && href === "#programs");
      link.classList.toggle("active", match);
    });
  }

  window.addEventListener("scroll", updateScrollChrome, { passive: true });
  window.addEventListener("resize", updateScrollChrome, { passive: true });
  updateScrollChrome();

  /*--------------------------------------------------------------
   * 6. Fine-Pointer Cursor Aura, Magnetic Buttons, 3D Tilt & Spotlight
   *------------------------------------------------------------*/
  if (isFinePointer && !isReducedMotion) {
    var cursorDot = document.getElementById("kccCursorDot");
    var cursorRing = document.getElementById("kccCursorRing");
    var cursorRingLabel = cursorRing ? cursorRing.querySelector("span") : null;
    var mouseX = window.innerWidth * 0.5;
    var mouseY = window.innerHeight * 0.5;
    var ringX = mouseX;
    var ringY = mouseY;
    var cursorLoopRunning = false;

    function tickCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (cursorDot) {
        cursorDot.style.transform = "translate3d(" + mouseX + "px, " + mouseY + "px, 0) translate(-50%, -50%)";
      }
      if (cursorRing) {
        cursorRing.style.transform = "translate3d(" + ringX.toFixed(1) + "px, " + ringY.toFixed(1) + "px, 0) translate(-50%, -50%)";
      }
      if (Math.abs(mouseX - ringX) > 0.25 || Math.abs(mouseY - ringY) > 0.25) {
        window.requestAnimationFrame(tickCursor);
      } else {
        cursorLoopRunning = false;
      }
    }

    document.addEventListener(
      "pointermove",
      function (e) {
        if (e.pointerType !== "mouse") return;
        document.body.classList.add("kcc-cursor-active");
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (!cursorLoopRunning) {
          cursorLoopRunning = true;
          window.requestAnimationFrame(tickCursor);
        }
      },
      { passive: true }
    );

    document.addEventListener("mouseleave", function () {
      document.body.classList.remove("kcc-cursor-active");
    });

    document.querySelectorAll("[data-cursor-label]").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (!cursorRing || !cursorRingLabel) return;
        cursorRingLabel.textContent = el.getAttribute("data-cursor-label") || "VIEW";
        cursorRing.classList.add("is-labeled");
      });
      el.addEventListener("mouseleave", function () {
        if (!cursorRing) return;
        cursorRing.classList.remove("is-labeled");
      });
    });

    document.querySelectorAll("a, button").forEach(function (el) {
      el.addEventListener("mouseenter", function () {
        if (cursorRing) cursorRing.classList.add("is-interactive");
      });
      el.addEventListener("mouseleave", function () {
        if (cursorRing) cursorRing.classList.remove("is-interactive");
      });
    });

    // 3D Perspective Tilt + Specular Glare on Pillar Cards
    document.querySelectorAll("[data-tilt]").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        var rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        var rotY = (px - 0.5) * 11;
        var rotX = (0.5 - py) * 11;

        card.style.setProperty("--gx", (px * 100).toFixed(1) + "%");
        card.style.setProperty("--gy", (py * 100).toFixed(1) + "%");
        card.style.transform =
          "perspective(1000px) rotateX(" + rotX.toFixed(2) + "deg) rotateY(" + rotY.toFixed(2) + "deg) translateY(-6px)";
      });
      card.addEventListener("pointerleave", function () {
        card.style.transform = "";
      });
    });

    // Radial Cursor Spotlight on Offered Degree Cards
    document.querySelectorAll(".kcc-offered-card").forEach(function (card) {
      card.addEventListener("pointermove", function (e) {
        if (e.pointerType !== "mouse") return;
        var rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", (e.clientX - rect.left).toFixed(1) + "px");
        card.style.setProperty("--my", (e.clientY - rect.top).toFixed(1) + "px");
      });
    });

    // Magnetic Pull on Hero & Primary CTA Buttons
    if (hasGsap) {
      document.querySelectorAll("[data-magnetic]").forEach(function (btn) {
        btn.addEventListener("pointermove", function (e) {
          if (e.pointerType !== "mouse") return;
          var rect = btn.getBoundingClientRect();
          var dx = (e.clientX - (rect.left + rect.width * 0.5)) * 0.22;
          var dy = (e.clientY - (rect.top + rect.height * 0.5)) * 0.22;
          window.gsap.to(btn, { x: dx, y: dy, duration: 0.35, ease: "power2.out", overwrite: "auto" });
        });
        btn.addEventListener("pointerleave", function () {
          window.gsap.to(btn, { x: 0, y: 0, duration: 0.65, ease: "elastic.out(1, 0.45)", overwrite: "auto" });
        });
      });
    }
  }

  /*--------------------------------------------------------------
   * 7. Viewport-Gated Canvas Ambient Particles & Constellation FX
   *------------------------------------------------------------*/
  if (!isReducedMotion && typeof window.IntersectionObserver !== "undefined") {
    var canvasConfigs = [
      { id: "kccHeroCanvas", mode: "hero", countDesktop: 28, countMobile: 12 },
      { id: "kccAboutCanvas", mode: "goldDust", countDesktop: 26, countMobile: 12 },
      { id: "kccProgramsCanvas", mode: "constellation", countDesktop: 34, countMobile: 14 },
      { id: "kccAdmissionCanvas", mode: "goldDust", countDesktop: 26, countMobile: 12 }
    ];

    var activeCanvases = [];
    var rafCanvasId = null;

    function initCanvasStage(cfg) {
      var canvas = document.getElementById(cfg.id);
      if (!canvas) return null;
      var ctx = canvas.getContext("2d");
      if (!ctx) return null;

      var count = window.innerWidth < 768 ? cfg.countMobile : cfg.countDesktop;
      var particles = [];
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random(),
          y: Math.random(),
          vx: (Math.random() - 0.5) * 0.00045,
          vy: cfg.mode === "goldDust" ? -(0.00025 + Math.random() * 0.00045) : (Math.random() - 0.5) * 0.00045,
          r: 1.4 + Math.random() * 2.6,
          alpha: 0.22 + Math.random() * 0.55,
          gold: Math.random() > 0.42
        });
      }

      var state = {
        canvas: canvas,
        ctx: ctx,
        mode: cfg.mode,
        particles: particles,
        visible: false,
        w: 0,
        h: 0
      };

      function resize() {
        var rect = canvas.getBoundingClientRect();
        var dpr = Math.min(window.devicePixelRatio || 1, 2);
        state.w = Math.max(1, rect.width);
        state.h = Math.max(1, rect.height);
        canvas.width = Math.round(state.w * dpr);
        canvas.height = Math.round(state.h * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      resize();
      window.addEventListener("resize", resize, { passive: true });
      return state;
    }

    var stages = canvasConfigs.map(initCanvasStage).filter(Boolean);

    function renderCanvases() {
      var anyVisible = false;
      for (var s = 0; s < stages.length; s++) {
        var st = stages[s];
        if (!st.visible) continue;
        anyVisible = true;

        var ctx = st.ctx;
        var w = st.w;
        var h = st.h;
        var pts = st.particles;
        ctx.clearRect(0, 0, w, h);

        for (var i = 0; i < pts.length; i++) {
          var p = pts[i];
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < -0.05) p.x = 1.05;
          if (p.x > 1.05) p.x = -0.05;
          if (p.y < -0.05) p.y = 1.05;
          if (p.y > 1.05) p.y = -0.05;

          var px = p.x * w;
          var py = p.y * h;

          // Keep hero center-right white area very subtle so cutout remains ultra-clean
          var alpha = p.alpha;
          if (st.mode === "hero" && p.x > 0.52) {
            alpha *= 0.32;
          }

          ctx.beginPath();
          ctx.arc(px, py, p.r, 0, Math.PI * 2);
          if (st.mode === "hero") {
            ctx.fillStyle = p.gold
              ? "rgba(200, 155, 60, " + (alpha * 0.55).toFixed(3) + ")"
              : "rgba(22, 84, 211, " + (alpha * 0.45).toFixed(3) + ")";
          } else {
            ctx.fillStyle = p.gold
              ? "rgba(246, 220, 141, " + alpha.toFixed(3) + ")"
              : "rgba(125, 178, 255, " + (alpha * 0.78).toFixed(3) + ")";
          }
          ctx.fill();

          if (st.mode === "constellation") {
            for (var j = i + 1; j < pts.length; j++) {
              var q = pts[j];
              var dx = (p.x - q.x) * w;
              var dy = (p.y - q.y) * h;
              var dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 135) {
                var lineAlpha = (1 - dist / 135) * 0.16;
                ctx.beginPath();
                ctx.moveTo(px, py);
                ctx.lineTo(q.x * w, q.y * h);
                ctx.strokeStyle = "rgba(232, 194, 102, " + lineAlpha.toFixed(3) + ")";
                ctx.lineWidth = 0.8;
                ctx.stroke();
              }
            }
          }
        }
      }

      if (anyVisible) {
        rafCanvasId = window.requestAnimationFrame(renderCanvases);
      } else {
        rafCanvasId = null;
      }
    }

    var io = new window.IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          for (var s = 0; s < stages.length; s++) {
            if (stages[s].canvas === entry.target) {
              stages[s].visible = entry.isIntersecting;
            }
          }
        });
        if (!rafCanvasId && stages.some(function (s) { return s.visible; })) {
          rafCanvasId = window.requestAnimationFrame(renderCanvases);
        }
      },
      { threshold: 0.02 }
    );

    stages.forEach(function (st) {
      io.observe(st.canvas);
    });
  }

  /*--------------------------------------------------------------
   * 8. GSAP Master Preloader, Parallax, Counters & Scroll Choreography
   *------------------------------------------------------------*/
  if (hasGsap && hasScrollTrigger && !isReducedMotion) {
    var gsap = window.gsap;
    var ScrollTrigger = window.ScrollTrigger;

    // Failsafe guarantee so preloader never hangs
    var preloaderTimer = window.setTimeout(dismissPreloaderNow, 2500);

    // Master Intro Timeline
    var heroItems = gsap.utils.toArray('[data-reveal="hero-item"]');
    var heroLineInners = gsap.utils.toArray(".kcc-hero-title .kcc-line-inner");
    var heroModel = document.querySelector(".kcc-hero-model");
    var heroChips = gsap.utils.toArray(".kcc-float-chip");

    if (heroLineInners.length) gsap.set(heroLineInners, { yPercent: 110 });
    if (heroModel) gsap.set(heroModel, { y: 42, opacity: 0, scale: 0.97 });
    if (heroChips.length) gsap.set(heroChips, { y: 20, opacity: 0, scale: 0.9 });

    var introTl = gsap.timeline({
      onComplete: function () {
        window.clearTimeout(preloaderTimer);
        dismissPreloaderNow();
        ScrollTrigger.refresh();
      }
    });

    if (preloader) {
      introTl
        .to(".kcc-preloader-ring-progress", { strokeDashoffset: 0, duration: 0.72, ease: "power2.inOut" })
        .to(".kcc-preloader-seal", { scale: 1.08, duration: 0.22, yoyo: true, repeat: 1, ease: "power1.inOut" }, "-=0.2")
        .to(".kcc-preloader-center", { opacity: 0, scale: 0.94, duration: 0.28, ease: "power2.in" })
        .to(".kcc-preloader-curtain-top", { yPercent: -102, duration: 0.72, ease: "expo.inOut" }, "-=0.05")
        .to(".kcc-preloader-curtain-bottom", { yPercent: 102, duration: 0.72, ease: "expo.inOut" }, "<")
        .set(preloader, { display: "none" });
    }

    introTl
      .fromTo(
        heroItems,
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.75, stagger: 0.1, ease: "power3.out" },
        "-=0.45"
      )
      .to(
        heroLineInners,
        { yPercent: 0, duration: 0.85, stagger: 0.12, ease: "expo.out" },
        "-=0.68"
      );

    if (heroModel) {
      introTl.to(heroModel, { y: 0, opacity: 1, scale: 1, duration: 0.95, ease: "power3.out" }, "-=0.72");
    }
    if (heroChips.length) {
      introTl.to(
        heroChips,
        { y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.11, ease: "back.out(1.6)" },
        "-=0.55"
      );
    }

    // Multi-Layer Scrubbed Hero Parallax
    var heroSection = document.getElementById("home");
    if (heroSection) {
      gsap.to(".kcc-parallax-hero", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(".kcc-hero-watermark", {
        yPercent: 28,
        xPercent: -4,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
      });
      if (heroModel) {
        gsap.to(heroModel, {
          y: 34,
          ease: "none",
          scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
        });
      }
      gsap.to(".kcc-float-chip-a", {
        y: -46,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(".kcc-float-chip-b", {
        y: -26,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
      });
      gsap.to(".kcc-float-chip-c", {
        y: 26,
        ease: "none",
        scrollTrigger: { trigger: heroSection, start: "top top", end: "bottom top", scrub: true }
      });

      // Gentle desktop pointer depth inside Hero
      if (isFinePointer) {
        heroSection.addEventListener(
          "pointermove",
          function (e) {
            if (e.pointerType !== "mouse") return;
            var rx = (e.clientX / window.innerWidth - 0.5) * 2;
            var ry = (e.clientY / window.innerHeight - 0.5) * 2;
            gsap.to(".kcc-float-chip-a", { x: rx * -12, duration: 0.8, ease: "power2.out", overwrite: "auto" });
            gsap.to(".kcc-float-chip-b", { x: rx * 14, duration: 0.8, ease: "power2.out", overwrite: "auto" });
            gsap.to(".kcc-float-chip-c", { x: rx * -8, duration: 0.8, ease: "power2.out", overwrite: "auto" });
            gsap.to(".kcc-hero-watermark", { x: rx * 16, y: ry * 10, duration: 1.0, ease: "power2.out", overwrite: "auto" });
          },
          { passive: true }
        );
      }
    }

    // About KCC Scrubbed Ken Burns Parallax + Rolling Counters
    var aboutSection = document.getElementById("about");
    if (aboutSection) {
      gsap.fromTo(
        ".kcc-parallax-about",
        { yPercent: -12, scale: 1.16 },
        {
          yPercent: 12,
          scale: 1.02,
          ease: "none",
          scrollTrigger: { trigger: aboutSection, start: "top bottom", end: "bottom top", scrub: true }
        }
      );

      document.querySelectorAll("[data-count-to]").forEach(function (el) {
        var target = parseInt(el.getAttribute("data-count-to"), 10);
        var suffix = el.getAttribute("data-count-suffix") || "";
        var startVal = target > 1000 ? 1900 : 0;
        var counter = { val: startVal };

        gsap.to(counter, {
          val: target,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true
          },
          onUpdate: function () {
            el.textContent = Math.round(counter.val) + suffix;
          }
        });
      });
    }

    // Admissions Opposite-Axis Scrubbed Parallax
    var admissionSection = document.getElementById("admissions-cta");
    if (admissionSection) {
      gsap.fromTo(
        ".kcc-parallax-admission",
        { yPercent: 12, scale: 1.03 },
        {
          yPercent: -12,
          scale: 1.15,
          ease: "none",
          scrollTrigger: { trigger: admissionSection, start: "top bottom", end: "bottom top", scrub: true }
        }
      );
    }

    // Inner Photo Scrub Parallax on Academic Programs & Degree Cards
    gsap.utils.toArray(".kcc-program-media img, .kcc-offered-img").forEach(function (img) {
      gsap.fromTo(
        img,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: img.closest("article, a") || img,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        }
      );
    });

    // Velocity-Reactive Kinetic Marquees
    var marqueeTweens = [];
    document.querySelectorAll(".kcc-marquee-track").forEach(function (track, idx) {
      var direction = idx % 2 === 1 ? 1 : -1;
      var fromX = direction === -1 ? 0 : -50;
      var toX = direction === -1 ? -50 : 0;
      var tween = gsap.fromTo(
        track,
        { xPercent: fromX },
        { xPercent: toX, duration: 28, ease: "none", repeat: -1 }
      );
      marqueeTweens.push({ tween: tween, dir: direction });
    });

    ScrollTrigger.create({
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      onUpdate: function (self) {
        var vel = Math.min(4.2, Math.abs(self.getVelocity()) / 420);
        marqueeTweens.forEach(function (item) {
          gsap.to(item.tween, { timeScale: 1 + vel, duration: 0.35, overwrite: "auto" });
        });
      }
    });

    // Four Pillars SVG Stroke-Draw + Staggered 3D Entrance
    var pillarGrid = document.querySelector(".kcc-pillars-grid");
    if (pillarGrid) {
      var pillarCards = pillarGrid.querySelectorAll(".kcc-pillar-card");
      gsap.fromTo(
        pillarCards,
        { y: 44, opacity: 0, rotateX: 8 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.78,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: pillarGrid, start: "top 84%", once: true }
        }
      );

      pillarGrid.querySelectorAll(".kcc-pillar-badge svg path, .kcc-pillar-badge svg circle").forEach(function (shape) {
        if (typeof shape.getTotalLength !== "function") return;
        var len = shape.getTotalLength();
        gsap.set(shape, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(shape, {
          strokeDashoffset: 0,
          duration: 1.05,
          ease: "power2.out",
          scrollTrigger: { trigger: pillarGrid, start: "top 82%", once: true }
        });
      });
    }

    // Generic Scroll Reveal for Headings, Banners, and Card Grids
    gsap.utils.toArray('[data-reveal="fade-up"]').forEach(function (el) {
      gsap.fromTo(
        el,
        { y: 34, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.78,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 86%", once: true }
        }
      );
    });

    gsap.utils.toArray(".kcc-programs-section .row, .kcc-dept-group .row").forEach(function (row) {
      var cards = row.querySelectorAll('[data-reveal="card"]');
      if (!cards.length) return;
      gsap.fromTo(
        cards,
        { y: 38, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.72,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: { trigger: row, start: "top 86%", once: true }
        }
      );
    });
  }
})();
