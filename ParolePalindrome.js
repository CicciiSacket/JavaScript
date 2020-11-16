
const str = "eran i mesi di seminare"

function palindroma(){
    var variabileCount
    const revArray = []; 
    const length = str.length ; 
    for(let i = 0 ; i < length; i++) { 
        revArray.push(str[i]);
    }  
    console.log(revArray.join('')); 
    
    const revArray1 = []; 
    for(let j = length; j >= 0; j--) { 
        revArray1.push(str[j]); 
    }  
    console.log(revArray1.join(''))
    
    for(let i = 0 ; i < str.length; i++){
        for(let j = str.length ; j >= 0 ; j--) {
            if(str[i] == str[j]){
                variabileCount = true
            } 
            else{
                variabileCount = false
            }
        }
    } 
    return variabileCount
}
console.log(palindroma())