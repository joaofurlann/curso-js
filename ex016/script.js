function enviou(){

    var inicio = document.getElementById('start')
    var final = document.getElementById('fim')
    var passo= document.getElementById('pace')
    var res = document.getElementById('res')
    
    if(inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar'
        window.alert('[ERRO] Faltam dados')

    }else {
        res.innerHTML ='Contando: '
        let i = Number(inicio.value)
        let f = Number(final.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('Passo inválido, considerando passo 1')
            p=1
        }

        if(i < f){
            //Contagem crescente
            for(let c = i; c <= f ; c += p){
                res.innerHTML += `${c} ➡️`
            }
        }else{
            //Contagem regressiva
            res.innerHTML +='Contagem regressiva <br>'
            for(let c = i; c >= f ; c -= p){
                
                res.innerHTML +=`${c} ➡️ `
            }
        }
    }
}