const startBtn = document.querySelector('.start-btn')
const stopMusicBtn = document.querySelector('.stop-music-btn')
const music = document.getElementById('bgm') 
const content = document.querySelector('.content')
const letterModal = document.querySelector('.letter-modal');

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji')
    emoji.innerHTML = '💣️'
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 3 + "s";
    content.appendChild(emoji);
    setTimeout(() => {
        emoji.remove()
    }, 3000);
}

function createGiftEmoji() {
    const giftEmoji = document.createElement('div');
    giftEmoji.classList.add('gift-emoji')
    giftEmoji.innerHTML = '🎁'
    giftEmoji.style.left = Math.random() * 100 + 'vw';
    giftEmoji.style.animationDuration = Math.random() * 2 + "s";
    content.appendChild(giftEmoji);
    setTimeout(() => {
        giftEmoji.remove()
    }, 1000);
    
}


startBtn.addEventListener('click', function() {
    startBtn.classList.add('undisplay');
    stopMusicBtn.classList.add('display');
    
    music.play();
    const femoji = setInterval(createEmoji, 100)
    const femoji2 = setInterval(createGiftEmoji, 500)
    document.body.classList.add('bg-modal');
    
    setTimeout(() => {
        clearInterval(femoji)
        clearInterval(femoji2)
        letterModal.classList.add('display');    
    }, 5000);
})


stopMusicBtn.addEventListener('click', () => {
    music.pause();
    music.currentTime = 0
})

stopMusicBtn.addEventListener('dblclick', () => {
    music.play();
})