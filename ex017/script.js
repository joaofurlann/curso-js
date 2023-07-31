function gerar(){
    let num = document.getElementById('num')
    let numero = Number(num.value)

    if(num.value.length == 0){
        res.innerHTML = 'Por favor, digite um número.'
    }else{
        res.innerHTML =''
        for(let i = 1 ; i <= 10; i++){
            res.innerHTML += (`${numero} x ${i} = ${numero * i} <br>`)
            
        }
    }
}