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
