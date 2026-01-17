function rediret_0(){
    window.open('https://mosisem.github.io/tcc/')
}

function rediret_1(){
    window.open('https://mosisem.github.io/Helena_lombardin/')
}

function rediret_2(){
    window.open('https://mosisem.github.io/net_games/')
}


function rediret_3(){
    window.open('https://mosisem.github.io/mercado_livre/')
}

function curriculo_(){
    window.open('doc\\Mosi.João_Currículo.pdf.pdf')
}

function git(){
    window.open('https://github.com/Mosisem')
}

// removendo elementos

var nu_atu = Number(0)
if (window.innerWidth <  814 ) {
    
    document.getElementById('redes').remove()

}
else{
}

function verificarTamanhoTela() {
    const larguraTela = window.innerWidth;
    if (larguraTela < 814) {
        document.getElementById('redes').remove() 
    }
}

  window.onload = verificarTamanhoTela;


function redirecionarParawhas() {
    const numero = "5511952934053"; 
    window.open(`https://wa.me/${numero}`)
}


function redirecionarParagmail(){
    const destinatario = "mosisebastiaodasilva@gmail.com"
   window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${destinatario}`)

}
