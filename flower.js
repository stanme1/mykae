// Start animations when page loads
(function() {
  function startAnimations() {
    if (document.body.classList.contains("not-loaded")) {
      document.body.classList.remove("not-loaded");
    }
  }
  
  // Try multiple events to ensure it works
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(startAnimations, 1000);
    });
  } else {
    setTimeout(startAnimations, 1000);
  }
  
  window.addEventListener('load', () => {
    setTimeout(startAnimations, 1000);
  });
})();