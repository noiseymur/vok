let inputMail = document.querySelector('.input-mail');
let btnMail = document.querySelector('.btn-mail');

btnMail.addEventListener('click',()=>{
    btnMail.style.transform = 'translateX(0px)';
    inputMail.classList.add('input-active');
})

let video = document.querySelector('video');
let unmute = document.querySelector('.unmute');

unmute.addEventListener('click',()=>{
    console.log('clicked');
    video.muted = !video.muted;
    video.currentTime = 0;
})