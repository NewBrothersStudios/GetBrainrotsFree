const videos = [
  {
    titulo: "Video 1",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/ssstik.io_@supery084_1760750295491%20(1).mp4"
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