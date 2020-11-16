
//METODO
let rabbit = {} // dichiarazione oggetto
rabbit.speek = function(line){
    console.log(line)
}
rabbit.speek('Adrianaa') //richiamo al metodo

//COSTRUTTORE
function rabbitMake(type){
    let rabbit1 = Object.create(rabbit) 
    rabbit1.type = type
    return rabbit1
}

function Rabbit(type){
    this.type = type
}
Rabbit.prototype.speek = function(line){ //prototype modifica l'oggeto di sorgente 
    console.log(this.type +'and'+ line)
}
let sugoconiglio = new Rabbit('morto')
console.log(sugoconiglio.speek('pazienza'))


let mimmo = new rabbitMake('sugo')  //richiamo al costruttore[funzione] con keywords NEW
let pippo = new rabbitMake('agrodolce') //richiamo al costruttore[funzione] con keywords NEW
console.log(mimmo)
console.log(pippo)

//....prototipi!!!!! --> oggetti utiizzati come sorgenti di proprietà degli altri oggetti

class cunigghiu{
    constructor(type){
        this.type = type
    }
    speek(line){
        return this.type + line // return elimina undefined mentre console log stampa e torna undefined
    }
}
let Con2 = new cunigghiu('killer')
console.log(Con2.speek('mario'))



let ages = new Map() //MAP = struttura dati che associa valori ad altri valori 
ages.set("mario",33)
ages.set('pippo',42)
console.log('mario av' + ages.get('mario'))


