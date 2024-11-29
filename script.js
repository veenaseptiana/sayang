function playMusic() {
    const audio = document.getElementById('birthday-song');
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
