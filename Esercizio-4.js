let min = function(j,i) {
    if (j<0 | i<0 ){
        return "Errore"
    }else
     if(j<i){
         return j
    }else if (i<j){
        return i
    }
    return "equals"
}

console.log(min(5,7))
console.log(min(25,17))

