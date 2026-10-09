(function () {
  "use strict";

  var registry = {};

  function coerce(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value.trim() !== "" && !isNaN(Number(value))) return Number(value);
    return value;
  }

  function readOptions(el) {
    var opts = {};
    Array.prototype.forEach.call(el.attributes, function (attr) {
      var match = attr.name.match(/^data-m-(.+)$/);
      if (!match) return;
      var key = match[1].replace(/-([a-z])/g, function (_, c) {
        return c.toUpperCase();
      });
      opts[key] = coerce(attr.value);
    });
    return opts;
  }

  var Motion = {
    reducedMotion:
      !!window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    hasGsap: typeof window.gsap !== "undefined",

    define: function (name, fn, meta) {
      registry[name] = { fn: fn, meta: meta || {} };
    },

    run: function (el) {
      var def = registry[el.getAttribute("data-motion")];
      var instance = {};

      if (def) {
        try {
          instance = def.fn(el, readOptions(el)) || {};
        } catch (e) {
          instance = {};
        }
      }

      el._motion = instance;
      el.classList.add("m-on");

      if (instance.tl && Motion.reducedMotion) {
        instance.tl.progress(1);
      }
      return instance;
    },

    replay: function (el) {
      if (el._motion && el._motion.cleanup) el._motion.cleanup();
      el.classList.remove("m-on");
      Motion.run(el);
    },

    init: function (root) {
      var els = (root || document).querySelectorAll("[data-motion]");
      if (!els.length) return;

      var start = function () {
        var observer =
          "IntersectionObserver" in window
            ? new IntersectionObserver(
                function (entries) {
                  entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                      observer.unobserve(entry.target);
                      Motion.run(entry.target);
                    }
                  });
                },
                { threshold: 0.3 }
              )
            : null;

        Array.prototype.forEach.call(els, function (el) {
          var trigger = el.getAttribute("data-m-trigger") || "view";
          if (trigger === "manual") return;
          if (trigger === "load" || !observer) {
            Motion.run(el);
          } else {
            observer.observe(el);
          }
        });
      };

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(start, start);
      } else {
        start();
      }
    },
  };

  window.Motion = Motion;
})();
