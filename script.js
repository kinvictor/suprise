const startBtn = document.querySelector('.start-btn')
const stopMusicBtn = document.querySelector('.stop-music-btn')

startBtn.addEventListener('click', function(){
    startBtn.classList.add('undisplay');
    document.getElementById('applause').play();
    stopMusicBtn.classList.add('display');
})

stopMusicBtn.addEventListener('click', function(){
    const sbtn = document.getElementById('applause') 
    sbtn.pause();
    sbtn.currentTime = 0;
})