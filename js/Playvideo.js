// Elementos del video y botones
const video = document.getElementById('restaurant-video');
const playBtn = document.querySelector('.play-btn');
const pauseBtn = document.querySelector('.pause-btn');
const volumeBtn = document.querySelector('.volume-btn');
const muteBtn = document.querySelector('.mute-btn');

// Función para reproducir el video
if (playBtn) {
    playBtn.addEventListener('click', function() {
        video.play();
    });
}

// Función para pausar el video
if (pauseBtn) {
    pauseBtn.addEventListener('click', function() {
        video.pause();
    });
}

// Función para activar volumen
if (volumeBtn) {
    volumeBtn.addEventListener('click', function() {
        video.muted = false;
        video.volume = 1;
    });
}

// Función para silenciar
if (muteBtn) {
    muteBtn.addEventListener('click', function() {
        video.muted = true;
    });
}

window.onscroll = function() { scrollFunction(); };
