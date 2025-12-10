const videos = [
  {
    titulo: "METAMORPHOSIS (♥ 76M)---(👎 1.9M)",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/METAMORPHOSIS(360P).mp4",
    thumb: "https://i.ytimg.com/vi/rQ6go3f2gG8/hqdefault.jpg",
    likes: 76000000,
    dislikes: 1900000,
    views: 120000000
  },
  {
    titulo: "LOXKS edit [kathyzx] (❤️ 62)----(👎 9)",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/VID-20251210-WA0000.mp4",
    thumb: "https://i.ytimg.com/vi/aqz-KE-bpKQ/hqdefault.jpg",
    likes: 62,
    dislikes: 9,
    views: 800
  },
  {
    titulo: "Ya es navidad! (❤️ 102)----(👎 5)",
    archivo: "https://newbrothersstudios.github.io/GetBrainrotsFree/videos/48f6c404ffb4b41be65fe4112501f0af.mp4",
    thumb: "https://i.ytimg.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    likes: 102,
    dislikes: 5,
    views: 3000
  }
];

const lista = document.getElementById("video-list");
const titulo = document.getElementById("video-title");
const player = document.getElementById("video-player");
const views = document.getElementById("views");
const likes = document.getElementById("likes");
const dislikes = document.getElementById("dislikes");

let currentIndex = 0;

function cargarVideo(i) {
  currentIndex = i;
  const v = videos[i];

  titulo.textContent = v.titulo;
  player.src = v.archivo;
  player.play();

  // actualizar estadísticas
  views.textContent = "👁 " + v.views + " vistas";
  likes.textContent = "❤️ " + v.likes;
  dislikes.textContent = "👎 " + v.dislikes;
}

videos.forEach((video, i) => {
  const item = document.createElement("div");
  item.className = "video-item";

  item.innerHTML = `
    <img class="thumbnail" src="${video.thumb}">
    <div class="info">
      <strong>${video.titulo}</strong>
      <span>👁 ${video.views} vistas</span>
    </div>
  `;

  item.onclick = () => cargarVideo(i);
  lista.appendChild(item);
});

// AUTONEXT
player.addEventListener("ended", () => {
  let next = currentIndex + 1;
  if (next >= videos.length) next = 0;
  cargarVideo(next);
});