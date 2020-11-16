//ESERCIZIO PAGINA 56-57 CAPITOLO 3 

// function CountBs(mario){ //INDICA IN QUALE POSIZIONE SI TROVA LA B E NE TIENE IL CONTO
//     let totalB = 0
//     for(let i = 0; i < mario.length; i++){
//         if (mario[i] == 'B'){
//             console.log(mario[i]+'\t'+ [i])
//             totalB++
//         }
//     }
//     return `ci sono\t${totalB}\tB`
// }
// console.log(CountBs('icoBo'))

function CountChar(mario,char){ //INDICA IN CHE POSIZIONE SI TROVA IL CHAR E NE TIENE IL CONTO
    let total = 0
    for(let i = 0; i < mario.length; i++){
        if (mario[i] == char){
            console.log(mario[i]+'\t'+ [i])
            total++
        }
    }
    return `ci sono\t${total}\t${char}`
}

console.log(CountChar("Cicci",'i'))