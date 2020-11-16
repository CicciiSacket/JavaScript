let x;
let y;

x = 10
y = x
console.log(x)
console.log(y) // y avrà lo stesso valore che ha x in indirizzi di memoria diversi

y = 30 
console.log(x)
console.log(y) // qui la variabile y viene ridefinita ma la variabile x non viene alternata


let user

user = {} // il tipo diventa un oggetto mentre il riferimento di memoria è una struttura dati object che conterrà le proprietà e i loro rispettivi valori tramite però i loro INDIRIZZI DI MEMORIA, in questo modo più oggetti possono fare riferimento alla stessa struttura dati e se viene modificato in un pggetto cambia in tutti a cascade
//ciò è possibile solo in strutture dati refernziate e non in quelle predefinite in quanto sono immutabili.

