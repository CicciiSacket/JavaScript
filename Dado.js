


var dadoRandom = () =>  {
    var value = Math.floor((Math.random() * 6) + 1)
    return value    
}

var avarageDado = () => {
    var count
    for (let i = 0; i < 100; i++) {
       var count =  dadoRandom() 
       //console.log(count)
    }
    return count / 100
}

console.log(avarageDado())
console.log(avarageDado())
console.log(avarageDado())



