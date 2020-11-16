// sono bisestili tutti gli anni a partire dal 1956 che sono divisibili per 4 in %0


function TypeYear(x){
    if(x%4 == 0 && x >= 1956){
        return 'bisestile'
    } 
    else return 'non bisestile'
}

console.log(TypeYear(2012))





