//gioco della morra cinese
function morra(){
    giocata = Math.random()
    if(giocata <= 0.33 ){
        return 'carta'
    } 
    else if (giocata > 0.34){
        return 'forbice'
    }
    else if (giocata >= 0.67 ){
        return 'sasso'
    }  
}

function winner(choise){
    if(choise == morra()){
        return 0 //pari
    }
    if(choise == 'carta' && morra() == 'forbice' || choise == 'forbice' && morra() == 'sasso' || choise == 'sasso' && morra() == 'carta'){
        return -1 //sconfitta
    }
    else return 1 //vittoria
}

choise = 'forbice'
console.log(winner(choise))