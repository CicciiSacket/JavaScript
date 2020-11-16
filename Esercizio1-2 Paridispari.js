
var PariDispari = (choose, number) =>{
    var PcNumber = Math.floor((Math.random() * 5) + 1)
    // console.log(PcNumber)
    var game = number + PcNumber
    var result = ""

    if (choose == "Pari") {
        if (game % 2 == 0) {
            result = "user win"
        }
        else result = "user loser"
    }
    else if (choose == "Dispari"){
        if (game % 2 != 0) {
            result = "user win"
        }
        else result = "user loser"
    }
    return result
}

console.log(PariDispari("Pari", 3))
console.log("___")
console.log(PariDispari("Dispari", 2))
