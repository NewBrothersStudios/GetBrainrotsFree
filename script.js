const videos = [
  {
    titulo: "METAMORPHOSIS [NEW]",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/METAMORPHOSIS(360P).mp4"
  },
  {
    titulo: "LOXKS edit [kathyzx]",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/VID-20251210-WA0000.mp4"
  },
  {
    titulo: "Cats edit [NEW]",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/48f6c404ffb4b41be65fe4112501f0af.mp4"
  }
  ];

const lista = document.getElementById("video-list");
const titulo = document.getElementById("video-title");
const player = document.getElementById("video-player");

videos.forEach((video, index) => {
  const item = document.createElement("div");
  item.className = "video-item";
  item.textContent = video.titulo;

  item.onclick = () => {
    titulo.textContent = video.titulo;
    player.src = video.archivo;
    player.play();
  };

  lista.appendChild(item);
});