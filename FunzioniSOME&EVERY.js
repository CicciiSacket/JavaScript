const pippo = [0,1,2,3,4,5,6,7,8]
console.log(pippo.some((n) => (n/2 > 0))) //-> true  
//some restiusce true o false a seconda che tutti gli elementi dell'array passano il test o meno

// come some esiste un metodo che si chiama every che ha lo stesso funzionamento, la differenza la si può spiegare dicendo che some è come un OR mentre every è come un AND 
console.log(pippo.every((n) => (n/2 > 0)))//-> false

//-------------//


function every(ArrayP,mario){
    const soglia = 4
        for(let element of ArrayP){
            if/*(element > soglia)*/(element == mario(element)){
                return true
            }
            else return false
        }
}

//console.log(every([12,22,13,41,15,6,7,8]))// -> true perchè sono tutti maggiori della soglia
//console.log(every([1,2,3,4,-1,-2])) //-> false perchè sono tutti minori della soglia

console.log(every([3,6,7,8],(x) => (x > 4))) //--> false 