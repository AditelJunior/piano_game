const WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j']
const BLACK_KEYS = ['w', 'e', 't', 'y', 'u']

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');
let pressedKeys = [];

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) {
        return
    }
    const key = e.key.toLowerCase();
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
        whiteKeys[whiteKeyIndex].classList.add('active')
        pressedKeys.push(key);
    }
    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex])
        blackKeys[blackKeyIndex].classList.add('active')
        pressedKeys.push(key);
    }
})
document.addEventListener('keyup', e => {
    const key = e.key.toLowerCase();
    const whiteKeyIndex = WHITE_KEYS.indexOf(key);
    const blackKeyIndex = BLACK_KEYS.indexOf(key);

    if (whiteKeyIndex > -1 ) {
        whiteKeys[whiteKeyIndex].classList.remove('active');
    }
    if (blackKeyIndex > -1 ) {
        blackKeys[blackKeyIndex].classList.remove('active');
    }
})
function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
}