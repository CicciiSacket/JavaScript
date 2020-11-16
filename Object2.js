let listProduction = {
    "0001": {name: 'PC', price: 12.45},    
    "0002": {name: 'telefono', price: 13.45},   
    "0003": {name: 'PC', price: 16.45}    
}

console.log(listProduction['0002'].name)

for(let item in listProduction){//stampa tutti gli oggetti senza proprietà
    console.log(item)// si può usare con notazione puntato
}

listProduction.forEach(item => {
    console.log(item);
});