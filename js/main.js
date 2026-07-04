(function () {
  "use strict";

  /* Theme toggle */
  function initTheme() {
    var toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    toggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      var isDark = current
        ? current === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      var next = isDark ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* storage unavailable */
      }
    });
  }

  /* Nav: scroll shadow, mobile menu, active link */
  function initNav() {
    var nav = document.querySelector("[data-nav]");
    if (!nav) return;

    var onScroll = function () {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    var toggle = nav.querySelector("[data-nav-toggle]");
    if (toggle) {
      toggle.addEventListener("click", function () {
        var isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        document.documentElement.style.overflow = isOpen ? "hidden" : "";
      });
    }

    nav.querySelectorAll("[data-nav-mobile-link]").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        if (toggle) toggle.setAttribute("aria-expanded", "false");
        document.documentElement.style.overflow = "";
      });
    });

    var currentPath = window.location.pathname.replace(/\/index\.html$/, "/");
    nav.querySelectorAll("[data-nav-link]").forEach(function (link) {
      var linkPath = link.pathname.replace(/\/index\.html$/, "/");
      if (linkPath === currentPath) {
        link.classList.add("is-active");
      }
    });
  }

  /* Scroll reveal */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    items.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* Generic single-open accordion (services list, FAQ) */
  function initAccordions() {
    document.querySelectorAll("[data-accordion-group]").forEach(function (group) {
      var items = group.querySelectorAll("[data-accordion-item]");
      items.forEach(function (item) {
        var trigger = item.querySelector("[data-accordion-trigger]");
        if (!trigger) return;
        trigger.addEventListener("click", function () {
          var isOpen = item.classList.contains("is-open");
          items.forEach(function (other) {
            other.classList.remove("is-open");
            var otherTrigger = other.querySelector("[data-accordion-trigger]");
            if (otherTrigger) otherTrigger.setAttribute("aria-expanded", "false");
          });
          if (!isOpen) {
            item.classList.add("is-open");
            trigger.setAttribute("aria-expanded", "true");
          }
        });
      });
    });
  }

  /* Hero scroll parallax */
  function initHeroParallax() {
    var hero = document.querySelector("[data-hero]");
    var content = document.querySelector("[data-hero-content]");
    if (!hero || !content) return;

    var ticking = false;

    function update() {
      var rect = hero.getBoundingClientRect();
      var progress = Math.min(Math.max(-rect.top / rect.height, 0), 1);
      var opacity = 1 - progress * 1.25;
      var scale = 1 - progress * 0.08;
      var translate = progress * 80;
      content.style.opacity = String(Math.max(opacity, 0));
      content.style.transform =
        "translateY(" + translate + "px) scale(" + scale + ")";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* Process timeline scroll-fill */
  function initProcessFill() {
    var process = document.querySelector("[data-process]");
    var fill = document.querySelector("[data-process-fill]");
    if (!process || !fill) return;

    var ticking = false;

    function update() {
      var rect = process.getBoundingClientRect();
      var vh = window.innerHeight;
      var start = vh * 0.8;
      var total = rect.height + vh * 0.4;
      var progress = Math.min(Math.max((start - rect.top) / total, 0), 1);
      fill.style.transform = "scaleY(" + progress + ")";
      ticking = false;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  /* Contact form -> mailto */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var successEl = document.querySelector("[data-contact-success]");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.querySelector("#name").value.trim();
      var email = form.querySelector("#email").value.trim();
      var company = form.querySelector("#company")
        ? form.querySelector("#company").value.trim()
        : "";
      var budget = form.querySelector("#budget")
        ? form.querySelector("#budget").value
        : "";
      var message = form.querySelector("#message").value.trim();

      var bodyLines = [
        "Name: " + name,
        "Email: " + email,
        company ? "Company: " + company : null,
        budget ? "Estimated budget: " + budget : null,
        "",
        message,
      ].filter(Boolean);

      var subject = "New project enquiry from " + name;
      var mailto =
        "mailto:hello@plutusandromeda.com" +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      if (successEl) {
        form.hidden = true;
        successEl.hidden = false;
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initNav();
    initReveal();
    initAccordions();
    initHeroParallax();
    initProcessFill();
    initContactForm();
  });
})();
