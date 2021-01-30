const startBtn = document.querySelector('.start-btn')
const stopMusicBtn = document.querySelector('.stop-music-btn')
const music = document.getElementById('bgm') 
const content = document.querySelector('.content')

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
    giftEmoji.innerHTML = '🎁️'
    giftEmoji.style.left = Math.random() * 100 + 'vw';
    giftEmoji.style.animationDuration = Math.random() * 2 + "s";
    content.appendChild(giftEmoji);
    setTimeout(() => {
        giftEmoji.remove()
    }, 1000);

}


startBtn.addEventListener('click', function() {
    startBtn.classList.add('undisplay');

    music.play();
    stopMusicBtn.classList.add('display');
    setInterval(createEmoji, 100)
    setInterval(createGiftEmoji, 500)


    const giftEmoji = document.querySelector('.gift-emoji')
    const emoji = document.querySelector('.emoji')
    giftEmoji.addEventListener('mouseover', function() {
        alert('ok');
        // emoji.remove();
        // giftEmoji.remove();
        emoji.classList.add('undisplay')
        giftEmoji.classList.add('undisplay')
    })
})

stopMusicBtn.addEventListener('click', () => {
    music.pause();
    music.currentTime = 0
})

stopMusicBtn.addEventListener('dblclick', () => {
    music.play();
})
