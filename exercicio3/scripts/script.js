let vetor = new Array()

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }
}

function adcionar(){

    let dado = document.getElementById('num')
    let num = Number(dado.value)
    let res = document.querySelector('div#result')
    
    if(num <= 100 && num >= 1 && !inLista(num, vetor)){
        vetor.push(num)
        res.innerHTML += `Adcionado número : ${num} <br>`
    }else{
        
        window.alert('Por favor, insira os números de 1 a 100 que não foram adcionados ainda')
    }
    dado.value = ''
    dado.focus()
}

function calcular(){

    if (vetor.length == 0){
        window.alert('Adcione valores para calcular')
    }else{

        let soma = 0
        
        for(let i = 0; i < vetor.length; i++){
            soma  += vetor[i]
            
        }
        
        let media = soma / vetor.length
        let final = document.querySelector('div#calculo')
        let maior = Math.max(...vetor)
        let menor = Math.min(...vetor)
        
        
        final.innerHTML = `Identificamos um total de <strong>${vetor.length}</strong> valores numéricos <br>`
        final.innerHTML += `O maior elemento é <strong>${maior}</strong> e o menor elemento é <strong>${menor}</strong> <br>`
        final.innerHTML += `Seus números somados resultam em <strong>${soma}</strong> <br>`
        final.innerHTML += `A média dos seus valores é: <strong>${media}</strong> <br>`
    }
}