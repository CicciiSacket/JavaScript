let n = 10

for(let i = 0; i < n; i++){ // numeri da uno a 9
    console.log(i)
}

for(let i = 0; i < n; i+=2){ // numeri da uno a 9 solo pari 
    console.log(i)
}

for(let i = 1; i < n; i+=2){ // numeri da uno a 9 solo dispari 
    console.log(i)
}

for(let i = 0; i < n; i++){ // numeri da uno a 9 p d
    console.log(i, i % 2 == 0 ? "pari"  : "dispari")
}