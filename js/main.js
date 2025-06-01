function ocultarIntro() {
  const intro = document.getElementById("intro-video");
  const contenido = document.getElementById("contenido");

  if (intro) intro.style.display = "none";
  if (contenido) contenido.style.display = "block";
}
