function enviar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('uano')
    var res = document.getElementById('result')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os valores e tente novamente !') 
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var gender = ''

        if(fsex[0].checked) {
            gender='homem'
            if(idade >=0 && idade <10) {
                //Criança
               img.setAttribute('src','criancamasc.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','jovemmasc.jpg')
            }else if(idade <50) {
                //Adulto
                img.setAttribute('src','adultomasc.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idosomasc.jpg')
            }
            
            
        }else  {
            gender='mulher'
            if(idade >=0 && idade <10) {
                //Criança
                img.setAttribute('src','criancafem.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','jovemfem.jpg')
            }else if(idade <50) {
                //Adulto
                img.setAttribute('src','adultofem.jpg')
            }else{
                //Idoso
                img.setAttribute('src','idosa.jpg')
            }
            
        }
        res.style.textAlign ='center'
        res.innerHTML =`Detectamos ${gender} com ${idade} anos.`
        res.appendChild(img)
    }
}