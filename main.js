let mark = document.querySelector('.question')
let help = document.querySelector('.help')
let next = document.querySelector('.active')
let ex = document.querySelector('.ex')

mark.addEventListener('click', ()=>{
    mark.classList.add('displayNone')
    help.classList.add('displayNone')
    next.classList.add('display')

})

help.addEventListener('click', ()=>{
    mark.classList.add('displayNone')
    help.classList.add('displayNone')
    next.classList.add('display')
})

ex.addEventListener('click', ()=>{
    mark.classList.remove('displayNone')
    help.classList.remove('displayNone')
    next.classList.remove('display')

})

