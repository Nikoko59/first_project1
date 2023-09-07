//  Début JS

let a = document.getElementsByClassName("custom-accordion");

let i;
//  boucle for initialisation

for (i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function () {
    //
    this.classList.toggle("active");
    // création d'une classe html pour basculer  .active

    let paragraphAccordion = this.nextElementSibling;

    //    Condition if ..........................else
    if (paragraphAccordion.style.display === "block") {
      paragraphAccordion.style.display = "none";
    } else {
      paragraphAccordion.style.display = "block";
    }
  });
}
