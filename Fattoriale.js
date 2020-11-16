var Fattoriale = number => {
    var result = 1
   
    for(let i = number ; i  >1; i--){ 
        result *= i
    }
    return result
}

console.log(Fattoriale(4))
console.log(Fattoriale(5))
console.log(Fattoriale(9))