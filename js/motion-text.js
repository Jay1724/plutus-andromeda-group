(function () {
  "use strict";

  var Motion = window.Motion;
  if (!Motion) return;

  function collectWords(node, cls, out) {
    Array.prototype.forEach.call(node.childNodes, function (child) {
      if (child.nodeType === 3) {
        child.textContent.split(/\s+/).forEach(function (word) {
          if (word) out.push({ text: word, cls: cls });
        });
      } else if (child.nodeType === 1) {
        collectWords(child, (cls + " " + child.className).trim(), out);
      }
    });
    return out;
  }

  function wrapLines(container, source) {
    var wordEls = collectWords(source, "", []).map(function (word) {
      var span = document.createElement("span");
      span.className = ("m-word " + word.cls).trim();
      span.textContent = word.text;
      return span;
    });

    container.textContent = "";
    wordEls.forEach(function (span, i) {
      container.appendChild(span);
      if (i < wordEls.length - 1) container.appendChild(document.createTextNode(" "));
    });

    var groups = [];
    var lastTop = null;
    wordEls.forEach(function (span) {
      var top = span.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) > 2) {
        groups.push([]);
        lastTop = top;
      }
      groups[groups.length - 1].push(span);
    });

    container.textContent = "";
    return groups.map(function (group) {
      var mask = document.createElement("span");
      mask.className = "m-line-mask";
      var line = document.createElement("span");
      line.className = "m-line";
      group.forEach(function (span, i) {
        line.appendChild(span);
        if (i < group.length - 1) line.appendChild(document.createTextNode(" "));
      });
      mask.appendChild(line);
      container.appendChild(mask);
      return line;
    });
  }

  Motion.split = function (el) {
    var originalHTML = el.innerHTML;
    var original = el.textContent;

    var visual = document.createElement("span");
    visual.className = "m-split";
    visual.setAttribute("aria-hidden", "true");

    var sr = document.createElement("span");
    sr.className = "m-sr-only";
    sr.textContent = original;

    el.textContent = "";
    el.appendChild(visual);
    el.appendChild(sr);

    var source = document.createElement("div");
    source.innerHTML = originalHTML;
    var lines = wrapLines(visual, source);

    return {
      lines: lines,
      revert: function () {
        el.innerHTML = originalHTML;
      },
    };
  };

  Motion.define(
    "line-reveal",
    function (el, opts) {
      if (!Motion.hasGsap) return {};

      var split = Motion.split(el);
      var tl = window.gsap.timeline({
        delay: opts.delay || 0,
        onComplete: split.revert,
      });

      tl.from(split.lines, {
        yPercent: 115,
        rotate: 4,
        duration: opts.duration || 1,
        ease: "expo.out",
        stagger: opts.stagger || 0.12,
      });

      return {
        tl: tl,
        cleanup: function () {
          tl.kill();
          split.revert();
        },
      };
    },
    { options: ["duration", "stagger", "delay"] }
  );
})();
