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
document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll('.project');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const link = entry.target.querySelector('a.more-btn').href;
        prefetchLink(link);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  projects.forEach(project => {
    observer.observe(project);
  });

  function prefetchLink(url) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }
});