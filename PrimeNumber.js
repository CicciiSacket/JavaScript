var isPrimeNumber = number => {
    if ( number == 1 || number == 2 ) {
        return true;
    }
    for ( var i = 2; i < number; i++ ) {
        if ( number % i == 0 ) {
            return false;
        }
    } 
    return true;
}

console.log(isPrimeNumber(13))
console.log(isPrimeNumber(1))
console.log(isPrimeNumber(33))
console.log(isPrimeNumber(341))
console.log(isPrimeNumber(11))