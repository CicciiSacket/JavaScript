//PRIMA SI DICHIARA POI SI ESEGUE __ OCCHIO ALLE VARIABILI LOCALI[*] E LE VARIABILI GLOBALI[#]

let x = 10 //[#]

{
    let y = 2//[*]
}
console.log(x) // output = 10 sia dentro che fuori lo scope; altrimenti 


let m = 10//[#]
{
    let j = 20
    console.log(m) // m può essere ridefinito come locale e log=alla sua dichairazione locale
    console.log(j)
}   