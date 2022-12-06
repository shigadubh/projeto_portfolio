var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    var container = document.querySelector(".container");
    container.classList.toggle("show-menu");
});

function about(){
    document.getElementById("about").style.height = '100vh';
}