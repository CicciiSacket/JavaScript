var countMoney = cash => {
    var count = {50: 0, 20: 0 , 10: 0 , 5: 0}
    console.log(cash)
    while(cash > 0){
        if(cash >=50){
            count[50]++
            cash-=50
        }
        else if(cash >= 20){
            count[20]++
            cash-=20
        }
        else if(cash >= 10){
            count[10]++
            cash-=10
        }
        else if(cash >= 5){
            count[10]++
            cash-=10
        }
    }
    return JSON.stringify(count)
}

//console.log(countMoney(70))
// console.log(countMoney(50))
// console.log(countMoney(90))
console.log(countMoney(180))
