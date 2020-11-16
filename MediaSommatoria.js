var avarageSum = number =>{
    var sum = 0
    let avarage = 0
    for(let i = number; i >=0; i--){
        sum+= i
    }
    avarage = sum / number  
    return sum + " sum and avarage is " + (avarage - 0.5)
}  // la somma é giusta ma la media non conta lo zero nella divisione ecco perché lo zero cinque 

console.log(avarageSum(3))
console.log(avarageSum(4))
console.log(avarageSum(5))
console.log(avarageSum(6))
console.log(avarageSum(7))
console.log(avarageSum(8))
