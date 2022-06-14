// TODO: Adicionar link para o facebook
window.addEventListener('load', main, false)

function randint(end) {
    return Math.floor(Math.random() * (end + 1))
}

function preloadImages() {
    let images = []
    for(let i = 0; i <= 12; i++) {
        images[i] = new Image()
        images[i].src = `./assets/notas/${i}.png`
    }
}

async function main() {

    // Variáveis
    let numeroAleatorio = randint(12)
    let rodada = 1
    
    const buttonsIds = ['#btn_do', '#btn_re', '#btn_mi', '#btn_fa', 
                    '#btn_sol', '#btn_la', '#btn_si']
        
    const notas = {
        12: 'la',
        11: 'sol',
        10: 'fa',
        9: 'mi',
        8: 're',
        7: 'do',
        6: 'si',
        5: 'la',
        4: 'sol',
        3: 'fa',
        2: 'mi',
        1: 're',
        0: 'do',
    }


    // binds
    const pentagrama = document.querySelector('#pentagrama')
    const textRodada = document.querySelector('#text_rodada')
    const buttons = buttonsIds.map((btnId) => {
        return document.querySelector(btnId)
    })

    // Pre carregar imagens
    preloadImages()

    // Carregar nota aleatória
    const imgNota = document.createElement('img')
    imgNota.src = `./assets/notas/${numeroAleatorio}.png`
    pentagrama.append(imgNota)

    // Lógica
    buttonsIds.forEach(btnId =>{
        const btn = document.querySelector(btnId)
        btn.addEventListener('click', (e) => {
            const nota = e.target.id.slice(4)
            if (nota == notas[numeroAleatorio]) {

                // Muda a cor do botão para verde
                e.target.className = 'app__button app__button-right'

                // Aguarda alguns segundos antes da próxima rodada
                setTimeout(()=> {

                    // Incrementa
                    rodada += 1
                    textRodada.innerHTML = rodada

                    // Reseta ClassName dos botões
                    buttons.forEach(btn => {
                        btn.className = 'app__button'
                    })

                    // Evita números repetidos
                    let novoNumeroAleatorio = randint(12)
                    while(numeroAleatorio == novoNumeroAleatorio){
                        novoNumeroAleatorio = randint(12)
                    }
                    numeroAleatorio = novoNumeroAleatorio

                    imgNota.src = `./assets/notas/${numeroAleatorio}.png`

                }, 1000)

                
            } else {
                // Muda a cor do botão para vermelho
                e.target.className = 'app__button app__button-error'
            }
            
        })
    })

}