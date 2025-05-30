document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out!");
  });

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // triggers once
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.scroll-fade').forEach(el => {
    observer.observe(el);
  });
});

window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bg-music");

  function enableAudio() {
    audio.play().catch((error) => {
      console.log("Autoplay failed:", error);
    });

    // Only run once
    window.removeEventListener("click", enableAudio);
  }

  // Start audio on first click anywhere
  window.addEventListener("click", enableAudio);
});
