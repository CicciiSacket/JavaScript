//date altezza e larghezza viene prodotta una griglia

let n = 8
let m = 1
 
for( let j = 0 ; j < n ; j++){
    let line = "####\n"
   for(let i = 0; i < m ; i++){ //\n e \t per andare a capo e spaziare nella nuova riga
       line+="\t####"
   }
   console.log(line)
}


