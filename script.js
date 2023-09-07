
function carregar() {
    
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours() 
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = './imagens/manha.jpg'
        document.body.style.background = '#77A9C9'
        img.style.borderRadius = '18px'
        img.style.boxShadow = '20px 20px 5px #77A9C9'
        
    } else if ( hora >= 12 && hora <= 18) {
        // boa tarde
        img.src = './imagens/tarde.jpg'
        document.body.style.background = '#CB722C'
        img.style.borderRadius = '18px'
        img.style.boxShadow = '20px 20px 5px #CB722C'

    } else {
        // boa noite!
        img.src = './imagens/noite.jpg'
        document.body.style.background = '#515154'
        img.style.borderRadius = '18px'
        img.style.boxShadow = '20px 20px 5px black'
    }


}

