const btn = document.getElementById('openMenu');
const closeBtn = document.getElementById('closeBtn')
btn.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show');
})

closeBtn.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('show')
})