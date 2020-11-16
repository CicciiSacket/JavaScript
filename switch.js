/*for(let i = 0; i < 10; i++){
    console.log(i)
    if(i == 5)
       break //istruzione che blocca l'esecuzione del ciclo
}
*/

for(let i = 0; i < 10; i++){
    if(i % 2 == 0)
       continue //istruzione che dalla riga in cui si trova non permette di eseguire le altre istruzioni
console.log(i)
}


// un altro operatore è lo switch, che matcha il valore della variabile con i casi che sono inseriti, si può usare un caso di default che verrà sempre eseguito
let name = "mario"

switch(name){
    case "luigi" : 
        console.log("utente luigi")
    break 
    case "mario" : 
        console.log("utente mario")
    break

}
