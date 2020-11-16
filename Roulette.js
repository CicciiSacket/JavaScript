function roulette(...numbers) {
    var credit = 200
    var extract = Math.floor((Math.random() * 36) + 1)
    if(numbers.num.includes(extract)){
        credit += extract
    }
    else{
        credit -= extract
    }
    return credit
}

function rouletteDuePuntoZero(numbers=[]) {
    var credit = 200
    var extract = Math.floor((Math.random() * 36) + 1)//se metto 23 prova per vedere che il tutto funzioni come da commento in ultima riga
    var minim = 0

    console.log("il numero estratto è:",extract)

    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i].val)
        minim +=numbers[i].val

        if (credit >= minim){
            if(numbers[i].num == extract){
                // console.log(credit,numbers[i].val)
                credit = credit + numbers[i].val 
                // console.log(credit,numbers[i].val)
            }
            else if(numbers[i].num != extract){
                credit = credit - numbers[i].val
            }
        }
        else return "nun av sodd"
    }
    // console.log(minim)
    return credit + "\tcrediti rimanenti dopo la giocata"
}



console.log(rouletteDuePuntoZero([{num:1,val:30},{num:23,val:20},{num:36,val:10},{num:18,val:10}])) //--> output = 190 perchè okay che ne ho presi 20 il numero 23 ma ne perdo 30 perchè li ho messi in quello che non è uscito 