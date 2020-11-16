// funzione che prende in ingresso due numeri interi e restituisce un array di numeri consecutivi che partono dal valore del primo argomento e finiscono coon il valore dell'ultimo argomento


let range = function(x,y){
    let result = []
    for(let i=x;i<=y;i++){
        result.push(i) //!!!!!!!IMPORTANT
    }
    return result
}
console.log(range(2,8))
