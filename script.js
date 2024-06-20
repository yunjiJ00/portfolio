function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function() {
  "use strict";
  var bars = document.querySelectorAll(".bar");

  var methods = {
    init: function() {
      methods.bindEvents();
    },
    bindEvents: function() {
      bars.forEach(function(bar) {
        var pct = bar.querySelector(".pct");
        var data = JSON.parse(bar.getAttribute("data-bar"));

        setTimeout(function() {
          bar.style.backgroundColor = data.color;
          bar.style.width = pct.innerHTML;
          pct.style.color = data.color;
          pct.style.opacity = 1;
        }, data.delay || 0);
      });
    }
  };
  methods.init();
});