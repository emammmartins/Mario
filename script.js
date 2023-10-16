const mario=document.querySelector('.mario') /*Passa ums eletor css*/
const pipe=document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump'); /*Adiciona uma nova classe*/
    setTimeout(() => {
        mario.classList.remove('jump')
    },500) /*Tira a class passado algum tempo para se poder usar outra vez. 500 vem do tempo que a animacao demora*/
}

const loop=setInterval(() => {

    const pipePosition = pipe.offsetLeft; /*Ve o deslocamento a esquerda*/
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px',''); /*Como a posicao pode mudar. Tira o px da string. o + converte para numero*/

    if(pipePosition<=120 && pipePosition>0 && marioPosition<80){ /*Mario encontra o tubo (mesma posicao) */
        pipe.style.animation='none';/*Tiara a animacao (para de mexer)*/
        pipe.style.left=`${pipePosition}px`;/*Meter tubo na posicao certa*/
        mario.style.animation='none';
        mario.style.bottom=`${marioPosition}px`;/*Para quando encosta no tubo*/

        mario.src='./imagens/game-over.png'; /*Muda a imagem para o mario quando perde e ajusta tamanhos*/
        mario.style.width='75px'
        mario.style.marginLeft='50px'

        clearInterval(loop);/*Parar o ciclo*/
    }
},10)
document.addEventListener('keydown',jump); /*Chama jump quando precionado uma tecla*/
