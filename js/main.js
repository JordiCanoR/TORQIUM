function ocultarIntro() {
  const intro = document.getElementById("intro-video");
  const contenido = document.getElementById("contenido");
  document.getElementById("intro-video").style.display = "none";
  document.getElementById("pantalla-inicio").style.display = "flex";
  document.body.style.overflow = "hidden"; // para evitar scroll
}