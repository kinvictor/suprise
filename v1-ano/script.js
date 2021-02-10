const startBtn = document.querySelector('.start-btn')
const stopMusicBtn = document.querySelector('.stop-music-btn')
const music = document.getElementById('bgm') 
const content = document.querySelector('.content')
const modalContainer = document.querySelector('#modalkw')
const giftContainer = document.querySelector('.giftbox')
const giftText = document.querySelector('.giftbox .text')
const giftImg = document.querySelector('.gift')
const giftImgOpen = document.querySelector('.gift-open')
const letter1 = document.querySelector('.letter1')

function createEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji')
    emoji.innerHTML = '💣️'
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDuration = Math.random() * 5 + "s";
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
    giftEmoji.style.animationDuration = Math.random() * 3 + "s";
    content.appendChild(giftEmoji);
    setTimeout(() => {
        giftEmoji.remove()
    }, 1000);
    
}


startBtn.addEventListener('click', function() {
    startBtn.classList.add('undisplay');
    stopMusicBtn.classList.add('display');
    content.classList.add('display');
    
    music.play();
    const femoji = setInterval(createEmoji, 100)
    const femoji2 = setInterval(createGiftEmoji, 500)
    
    
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('gift-emoji')) {
            clearInterval(femoji)
            clearInterval(femoji2)
            modalContainer.classList.add('display')
            giftContainer.classList.add('display')
            giftText.classList.add('display')
            giftImg.classList.add('display')
        }
    })
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('a')) {
            giftImg.classList.remove('display');
            giftImgOpen.classList.add('display');
        }
    })
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('b')) {
            giftContainer.classList.remove('display')
            letter1.classList.add('display')
        }
    })
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('close')) {
            letter1.classList.remove('display')
            const end = document.createElement('a');
            end.setAttribute('href', 'index2.html');
            end.classList.add('end')
            end.innerHTML = 'PENCET AKUU BUAT AIB DISCOVERY !!!'
            modalContainer.appendChild(end);
        }
    })

})



stopMusicBtn.addEventListener('click', () => {
    music.pause();
    music.currentTime = 0
})

stopMusicBtn.addEventListener('dblclick', () => {
    music.play();
})