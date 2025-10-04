document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const errorIcon = document.querySelector(".error-icon");
  const errorText = document.querySelector(".error-text");

  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add("invalid");
    errorIcon.style.display = "block";
    errorText.style.display = "block";
  } else {
    emailInput.classList.remove("invalid");
    errorIcon.style.display = "none";
    errorText.style.display = "none";
    // Puc afegir nissatge d'èxit
  }
});


/* toggle menú */

  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.checked = false; // Tanca el menú
      });
    });
  });

