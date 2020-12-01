const file = require('fs')

//creazione di una promise [ azione asincrona che ad un certo punto potrebbe completarsi e produrre un valore]
var readFile = (namefile)=>{
    return new Promise(function(resolve,reject){ //callback invocate nel caso di resolve quando la promise si conclude con successo, mentre del caso di reject quando si risolve con um errore.
        file.readFile(namefile,function(err,data){
        if(err){
            reject(err)
        }
        resolve(data)
       })
    })
}

let main = async function(){// cosi è asincrona e avrà data.txt come ULTIMA STRINGA STAMPATA
    console.log('start')

    readFile('./data.txt').then(data=>console.log(data.toString()))

    console.log('end\n')
}
// main()


let main2 = async function(){// con await diventa sincrona e la stringa data.txt verrà stampata tra start ed end come lineare in codice
    console.log('\nstart')

    let first = await readFile('./data.txt')
    console.log(first.toString())

    console.log('end')
}
// main2()