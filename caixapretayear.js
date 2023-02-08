var achar = document.querySelector('input#achar');
//console.log(achar);
var musicaEncontrada = document.querySelector('div#musicaEncontrada');
//console.log(musicaEncontrada);

achar.addEventListener('click', clicouAchar);

function clicouAchar () {
    //console.log('clicou achar!!!!!')

    var anoPreenchido = document.querySelector('input#anoMusica');
    console.log(anoPreenchido);
    var valorAnoPreenchido = Number(anoPreenchido.value);
    console.log(valorAnoPreenchido);

    var musicaEncontrada = document.querySelector('div#musicaEncontrada');
    console.log(musicaEncontrada);

    if (anoPreenchido.value.length == 0) /*aqui, não deu certo direto valorAnoPreenchido.length, pois length é para ver o comprimento de uma string (e no valorAnoPreenchido o dado já tinha sido convertido em number!)*/ {
        window.alert('ERRO: preencha o ano na caixa de texto');
    } else {
        if (valorAnoPreenchido == 1980 || valorAnoPreenchido == 1981) {
            musicaEncontrada.innerHTML = `Fico Louco`
        } else if (valorAnoPreenchido == 1983) {
            musicaEncontrada.innerHTML = `Negra Melodia`
        } else if (valorAnoPreenchido == 1985) {
            musicaEncontrada.innerHTML = `Isso Não Vai Ficar Assim`
        }
        
    }

}