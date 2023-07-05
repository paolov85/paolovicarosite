// Ottieni tutti gli elementi con la classe specifica
var mobileNav = document.getElementsByClassName("mobileNav");
var mobileNavLink = document.getElementsByClassName("mobileNavLink");

// Aggiungi un listener per il cambiamento di dimensione della finestra
window.addEventListener("resize", function() {
  // Controlla la larghezza della finestra
  if (window.innerWidth > 768) {
    // Itera su tutti gli elementi
    for (var i = 0; i < mobileNav.length; i++) {
      // Rimuovi l'attributo HTML dall'elemento corrente
      mobileNav[i].removeAttribute("data-bs-toggle");
      mobileNav[i].setAttribute("style", "display: inline-block; width: 100%;");
      mobileNavLink[i].removeAttribute("style");
    }
  }
});

window.addEventListener("resize", function() {
  // Controlla la larghezza della finestra
  if (window.innerWidth < 768) {
    // Itera su tutti gli elementi
    for (var i = 0; i < mobileNav.length; i++) {
      // Rimuovi l'attributo HTML dall'elemento corrente
      mobileNav[i].setAttribute("data-bs-toggle", "collapse");
      mobileNav[i].setAttribute("style", "display: inline-block; width: 100%; height: 40px");
      mobileNavLink[i].setAttribute("style", "padding: 0;");
    }
  }
});