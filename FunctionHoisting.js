// hoisting per allocazione e inizializzazione delle funzioni vedi Funzioni.js


let sum = function(x,y){
    return x+y
}
console.log(sum(1,2))

// js co da la possibilità di usare i rest parameter, sostituendo nella dichiarazione di funzione i parametri con tre punti:
let sum2 = function(...numbers){
    let sum = 0
    for(let i=0; i<numbers.length;i++){//con questo ciclo sommiamo tutti i numeri che saranno argmenti della funzione che ha il rest parameter in dichiarazione 
    sum = sum + numbers[i] //si usa array e .lenght perchè il rest parameter crea un array con i valori che passiamo come parametri nella definizione dell'operazione di funzione
    }
    return sum
}
console.log(sum2(1,2,3,4))// il risultato sarà 10

//è possibile ottenere lo stesso risultato utiizzando l'operatore for-of in questa maniera:

let sum3 = function(...numbers){ // in questo modo il risultato prodotto sarà uguale
    let summ2 = 0
    for(let num of numbers){ //attraerso questo diciamo al compilatore di iterare tutti i valori di numbers e assegnare ad ogni ciclo questo valore alla variabile num che usiamo poi dentro la funzione
        summ2 += num
    }
    return summ2
}
console.log(sum3(1,2,3,4))