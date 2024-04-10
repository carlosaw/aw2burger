/* Menu HAMBURGER abre e fecha nav */
function menuOpener() {
  var x = document.querySelector("#nav");
  var right = document.querySelector(".rightside");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    right.style.display = "none";
  }

}