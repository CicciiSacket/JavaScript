// funzione sum che prende come input un array di interi e restituisce la somma dei valori




let range = function(x,y){
    let result = []
    for(let i=x;i<=y;i++){
        result.push(i) //!!!!!!!IMPORTANT
    }
    return result
}
console.log(range(2,8))


let sum = function(numbers){
    let summ=0
    for(let i of numbers){
        summ+=i
    }
    return summ
}
console.log(sum(range(2,8)))


let reverse = function(array){ // funzione che prende un array in input e lo restiutisce in ordine decrescente

    let result = []

    for(let i = array.lenght-1; i>=0; i++){
        result.push(array[i])
    }

    return result
}
console.log(reverse(range(1,4)))




