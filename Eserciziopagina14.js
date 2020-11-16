


// var points = [40, 100, 1, 5, 25, 10]

// var ascend = points.sort(function(a, b){return a-b})// ordina in crescente
                                                                                            
// //var points1 = [40, 100, 1, 5, 25, 10]
// var discend = points.sort(function(a, b){return b-a})// ordina in decrescente 


//-------------------------

// function esercizio(points){
//     var points = [40, 100, 1, 5, 25, 10]
//     //var ascend = points.sort(function(a, b){return a-b})
//     var discend = points.sort(function(a, b){return b-a})
    
//     if(points == ascend){
//         return true
//     }
//     else if(prove== discend){
//         return false
//     }
// }
// console.log(esercizio([100, 1, 5, 25, 10]))
// //console.log(ascend)

// function orderBy(listN){return - (a - b)} 

function numeri(){
    var listN = new Array(2,4,6,1,0)
    listN.sort(function(a, b) {
        return a - b;
    })
    return listN
    
    
    /*for(let i = 0; i < listN.length-1;i++){   --> Insertion Sort()
        let jmin = i 
        for(let j = i+1; j<listN.length; j++){
            if(listN[j] < listN[jmin]){
                jmin = j
            }
        }
        let aux = listN[jmin]
        listN[jmin] = listN[i]
        listN[i] = aux
    }*/
}


console.log(numeri())