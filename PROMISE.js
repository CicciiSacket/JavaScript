const file = require('fs')

console.log(1)

//creazione di una promise [ azione asincrona che ad un certo punto potrebbe completarsi e produrre un valore]
var readFile = (namefile)=>{
    console.log(2)
    return new Promise(function(resolve,reject){ //callback invocate nel caso di resolve quando la promise si conclude con successo, mentre del caso di reject quando si risolve con um errore.
        console.log(3)
        file.readFile(namefile,function(err,data){
        console.log(4)
        if(err){
            reject(err)
        }
        resolve(data)
       })
    })
}

let fs = readFile('./data.txt')
fs.then(data=> console.log(data.toString()),err=> console.log(err.toString()))
//il metodo then si usa per ottenere il risultato della promise che registra una funzione di callback e la chiama quando la promise viene risolta

console.log(5)

/*
output :
1
2
3
5
4
data.txt
*/// questo perchè nel modello asincrono l'avvio di un'azione provoca una suddivione della timeline, ovvero il programma che ha iniziato l'azione continua la sua esecuzione e in parallelo l'azione promise procede affiancata notificando il programma quando si risolve