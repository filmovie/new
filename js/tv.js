const myAudio = document.getElementById("video");
const btn = document.getElementById("play");
const btnIcon = document.querySelector("#play> i");
const btnText = document.getElementById("btn-text");
const toggleMusic = () => { const dataPlay = btn.getAttribute('data-play'); if(dataPlay === 'false') { btn.setAttribute('data-play', 'true'); myAudio.play(); btnIcon.classList.remove("fa-play"); btnIcon.classList.add("fa-pause"); btnText.innerText = "PAUSE"; } else { btn.setAttribute('data-play', 'false'); myAudio.pause(); btnIcon.classList.remove("fa-pause"); btnIcon.classList.add("fa-play"); btnText.innerText = "PLAY"; } }; myAudio.onpause = () => { btn.setAttribute('data-play', 'false'); myAudio.pause(); btnIcon.classList.remove("fa-pause"); btnIcon.classList.add("fa-play"); btnText.innerText = "PLAY"; };