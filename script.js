const startBtn = document.querySelector('.start-btn')
const stopMusicBtn = document.querySelector('.stop-music-btn')
const music = document.getElementById('bgm') 
const content = document.querySelector('.content')
const modalContainer = document.querySelector('#modalkw')
const giftContainer = document.querySelector('.giftbox')
const giftText = document.querySelector('.giftbox .text')
const giftImg = document.querySelector('.gift')
const giftImgOpen = document.querySelector('.gift-open')
const letter1 = modalContainer.querySelector('.letter1')
const end = modalContainer.querySelector('.end')

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
    alert('hai dicky !')
    alert(`setelah kamu klik okay, bakal ada bgm yang dimainkan!\n
    kalau kamu ga suka bisa pencet yang tombol "STOP MUSIC" 1x saja\n
    kalau kamu ingin menghidupkan musiknya kembali silahkan double click tombol tadi \n
    cara bermain : pilihlah emoji bergambar hadiah\n
    SELAMAT BERMAIN ! 
    `)
    startBtn.classList.add('undisplay');
    stopMusicBtn.classList.add('display');
    content.classList.add('display');
    
    music.play();
    const femoji = setInterval(createEmoji, 100)
    const femoji2 = setInterval(createGiftEmoji, 500)
    
    // klo inner lebih berguna utk satu kali tampil, kalo utk 2/lebih penampilan lebih baik tempelkan dihtml
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('gift-emoji')) {
            clearInterval(femoji)
            clearInterval(femoji2)
            modalContainer.classList.add('display')
            giftContainer.classList.add('display')
            giftContainer.innerHTML = `
                <div class="text">
                    <p>pilih sikok kotak bae !</p>
                </div>
                <div class="gift">
                    <img src="etc/gift.svg" class="a">
                    <img src="etc/gift.svg" class="a">
                </div>`;
        }
    })
    document.addEventListener('click', function(e){
        if(e.target.classList.contains('a')) {
            giftContainer.innerHTML = `
                <div class="text">
                    <p>pilih sikok kotak bae !</p>
                </div>
                <div class="gift-open">
                    <img src="etc/gift-open.svg" class="b">
                    <img src="etc/gift-open.svg" class="b">
                </div>`;
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
            end.classList.add('display')
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