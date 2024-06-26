const sounds = ["applause", "boo" , "gasp" , "tada", "victory" , "wrong"]


sounds.forEach(sound => {
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click' , () => {
        stopSongs()
        document.getElementById(sound).onplay()
    })

    document.getElementById("buttons").appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.onpause()
        song.currentTime = 0;
    })
}