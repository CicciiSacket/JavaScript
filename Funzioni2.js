// in js i tipi di dato primitivo vengono passati come valore
let num = 3 


function sum1(x){
    x++
    return x
}
console.log(sum1(num))



// i tipi di dato referenziato vengono passati alla funzione come riferimento
let num1 = { 
    val:4
}

function sum2(x){
    x.val++
    return x.val
}
console.log(sum2(num1))

//FUNZNIONI DI PRIMA CLASSE

let sum = function(){
    console.log('m')
}

let apply = function(fun){//funzione come parametro di una funzione
    fun()
}
apply(sum)





