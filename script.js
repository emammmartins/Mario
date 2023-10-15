const mario=document.querySelector('.mario') /*Passa ums eletor css*/

const jump = () => {
    mario.classList.add('jump'); /*Adiciona uma nova classe*/
    setTimeout(() => {
        mario.classList.remove('jump')
    },500) /*Tira a class passado algum tempo para se poder usar outra vez. 500 vem do tempo que a animacao demora*/
}
document.addEventListener('keydown',jump); /*Chama jump quando precionado uma tecla*/
