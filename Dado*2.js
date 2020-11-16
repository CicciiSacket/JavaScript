

var dadoRandom = () =>  {
    var value = Math.floor((Math.random() * 6) + 1)
    var value2 = Math.floor((Math.random() * 6) + 1)
    //console.log(value + " & " +  value2)
    return value+value2
}

//console.log(dadoRandom())


var avarageDado = () => {
    var count
    for (let i = 0; i < 100; i++) {
       var count =  dadoRandom()
       console.log(count)
    }
    return count / 100 //somma dei valori di entrambi i dati diviso il numero di giocate, ogni giocata è contata con la somma dei due output del dado
}

console.log(avarageDado())

