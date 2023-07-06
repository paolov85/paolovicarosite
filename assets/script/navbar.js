// Ottieni tutti gli elementi con la classe specifica
var elementi = document.getElementsByClassName("navbar-collapse");

// Aggiungi un event listener per l'evento di click a ciascun elemento
for (var i = 0; i < elementi.length; i++) {
  elementi[i].addEventListener("click", function() {
    // Rimuovi la classe dall'elemento cliccato
    this.classList.remove("show");
  });
}