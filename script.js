// Lista de videos
const videos = [
    {
        title: "Video de prueba",
        src: "https://raw.githubusercontent.com/newbrothersstudios/GetBrainrotsFree/main/videos/ssstik.io_@supery084_1760750295491 (1).mp4"
    },
    {
        title: "Video 2",
        src: "LINK-DE-TU-VIDEO-2.mp4"
    },
    {
        title: "Video 3",
        src: "LINK-DE-TU-VIDEO-3.mp4"
    }
];

// Cargar videos en el HTML
const container = document.getElementById("video-list");

videos.forEach(video => {
    const card = document.createElement("div");
    card.className = "video-card";

    card.innerHTML = `
        <video controls>
            <source src="${video.src}" type="video/mp4">
        </video>
        <div class="video-title">${video.title}</div>
    `;

    container.appendChild(card);
});
