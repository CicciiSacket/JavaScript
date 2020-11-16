function minMax(array = []){
    var result = {max: 0 , min: 0}
    var maxim = 0
    for (let i = 0; i < array.length ; i++){
        if(array[i] > maxim){
            maxim = array[i]
            //console.log(maxim)
        }
    }
    result.max = maxim

    var minim = array[1]
    for (let j = 0; j < array.length - 1; j++){
        if(array[j] < minim){
            minim = array[j]
        }
        else{
            array[j++] = minim
        }
    }
    result.min = minim

    return JSON.stringify(result)
}

console.log(minMax([3,1,2,3,55,6]))
console.log(minMax([3,2,3,55,6]))
console.log(minMax([22,34,56,78,99]))
console.log(minMax([332,1,2,3,55,6]))