function ocultarIntro() {
  const intro = document.getElementById("intro-video");
  const contenido = document.getElementById("contenido");

  intro.style.display = "none";
  contenido.style.display = "block"; // cambiamos a block para visibilidad
  document.body.style.overflow = "hidden"; // mantiene el scroll oculto si lo deseas
}
