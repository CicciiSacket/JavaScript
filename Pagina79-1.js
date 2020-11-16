function range(start,end){
    var structure = []
    for(let i = start+1; i <= end; i++){
        structure.push(i)
    }
    return structure
}
console.log(range(2,8))


function sum(numbers=[]){
    var result = 0
    for(let m of numbers){
        result+=m
    }
    return result
}
console.log(sum([5,15,30,5]))


function rangeModificata(start,end,step = 1){
    var structure = []
    for(let i = start; i < end; i+=step){
        structure.push(i)
    }
    return structure
}
console.log(rangeModificata(1,10,2))
//console.log(rangeModificata(1,15,-3))       // FARSI SPIEGARE DA SARO PERCHÈ NON VA CON I NUMERI NEGATIVI


function rangeModificataNegativo(start,end){
    var structure = []
    for(let i = start; i >= end; i--){
        structure.push(i)
    }
    return structure
}
console.log(rangeModificataNegativo(5,2,-1))
