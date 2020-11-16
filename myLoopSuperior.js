

function superior(Array,very){
    let newA = []
    for(element of Array){
        if(element > very(element)){
        newA.push(element)
        }
        else newA.push('NO')
    }
    return newA
}


console.log(superior([1,2,3,4,5,6,7],(n) =>(n/2 > 0))) 





