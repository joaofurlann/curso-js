function carregar(){

    
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. <br>`
    
    if (hora >=0 && hora <12 ) {
        //Bom dia !
        img.src ='manha.jpg'
        msg.innerHTML += 'Bom dia !'
        document.body.style.background = '#D1A767'
    } else if (hora >=12 && hora <18) {
        //Boa tarde !
        img.src ='tarde.jpg'
        msg.innerHTML += 'Boa tarde !'
        document.body.style.background = '#D67019'

    } else {
        //Boa noite !
        img.src ='noite.jpg'
        msg.innerHTML += 'Boa noite !'
        document.body.style.background ='#4D3B5F'
        
    }
    
}
