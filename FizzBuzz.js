//fizz tutti i numeri divisibili per 3 ; Buzz numeri divisibili per 5 ma non per tre

for(let n=1;n<100;n++){
    if ((n%5) == 0 && (n%3) == 0){
        console.log('FizzBuzz')
    }
    else if((n%3) == 0){
        console.log('Fizz')
    }
    else if((n%5) == 0 && (n%3) != 0){
        console.log('Buzz')
    }
    else console.log(n)
}




