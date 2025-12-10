// Lista de videos disponibles en MiniTube
const videos = [
  {
    titulo: "Video 1",
    archivo: "https://raw.githubusercontent.com/newbrothersstudios/GetBrainrotsFree/main/videos/ssstik.io_@supery084_1760750295491%20(1).mp4"
  }
];

// Cargar videos en la página
function cargarVideos() {
  const contenedor = document.getElementById("listaVideos");
  
  videos.forEach((v, index) => {
    const item = document.createElement("div");
    item.className = "video-item";
    item.innerHTML = `
      <p>${v.titulo}</p>
      <button onclick="reproducir(${index})">Ver</button>
    `;
    contenedor.appendChild(item);
  });
}

// Reproducir un video
function reproducir(i) {
  const player = document.getElementById("player");
  player.src = videos[i].archivo;
  player.play();
}

// Iniciar al cargar
document.addEventListener("DOMContentLoaded", cargarVideos);