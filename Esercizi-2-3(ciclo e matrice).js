//ciclo for annidato

let n = 8

for( let j = 0 ; j < n ; j++){
    let line = "#"
    for(let i = 0; i < j ; i++){
        line+="#"
    }
    console.log(line)
}

// matrice 
for( let j = 0 ; j < n ; j++){
     let line = "#" /*+ "\t"*/
    for(let i = 0; i < n ; i++){
        line+= "\t" + "#"
    }
    console.log(line)
}