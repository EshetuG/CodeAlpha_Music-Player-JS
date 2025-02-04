'use strict'
const audio = document.getElementById('audio');
    const playBtn = document.getElementById('play');
    const pauseBtn = document.getElementById('pause');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');

    playBtn.addEventListener('click', () => {
      audio.play();
    });

    pauseBtn.addEventListener('click', () => {
      audio.pause();
    });
    const progressBar = document.getElementById('progress'); 
    audio.addEventListener('timeupdate', () => {
      const currentTime = audio.currentTime;
      const duration = audio.duration;

      currentTimeEl.textContent = formatTime(currentTime);
      durationEl.textContent = formatTime(duration);

      const progressPercent = (currentTime / duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
    });

    function formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }
    const reload=document.querySelector('.reloadpage');
    reload.addEventListener('click',function()
{
    window.location.href="index.html";
})