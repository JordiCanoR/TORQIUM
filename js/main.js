function ocultarIntro() {
  document.getElementById("intro-video").style.display = "none";
  document.getElementById("contenido").style.display = "flex";
  document.getElementById("pantalla-inicio").style.display = "block";
  document.body.style.overflow = "hidden";
}
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const sonido = document.getElementById("sonidoRayo");
    if (sonido) sonido.play().catch(() => {
      console.log("Interacción necesaria para reproducir audio.");
    });
  }, 2000);
});
document.body.addEventListener('click', () => {
  const sonido = document.getElementById("sonidoRayo");
  if (sonido) sonido.play().catch(() => {});
});
