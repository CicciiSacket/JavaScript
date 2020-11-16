function arrayToList(numbersA = [1,2,3]){
    let list = {
        value:numbersA[0],
        rest:{
            value:numbersA[1],
            rest:{
                value:numbersA[2],
                rest: null
            }
        }
    } 
    return list
}

console.log(arrayToList())

function listToArray(){
    let list = {
        value:0,
        rest:{
            value:1,
            rest:{
                value:2,
                rest: null
            }
        }
    }
    arrayProve = [list]
    return arrayProve
}
console.log(listToArray())



