function mediaVector(arrayP = []){
    var sum = 0
    for (const iterator of arrayP) {
        console.log(iterator)
        sum += iterator
        result = sum / arrayP.length
    }
    return result + "\tis avarege of array"
}

console.log(mediaVector([2,2,2,2,2,2]) + "\n")
console.log(mediaVector([2,7,62,13,2]) + "\n")
console.log(mediaVector([1,2,3,1,2,3]))