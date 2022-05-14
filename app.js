var btn = document.querySelector(".voltar_topo");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})









