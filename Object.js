// let user = {
//     firstName : "cicci",
//     lastName : "sacchi"
// } // tipo object  OCCHIO A VIRGOLE E DUE PUNTI \ la defizioni delle variabili può avere un valore esterno allo scope
// console.log(user)
// console.log(user.lastName)//notazione puntata
// console.log(['firstName'])//notazione con parentesi quadre, alli'interno va il nome della proprietà quando viene iniziallizata quella varibile dichiarata fuori da uno scope;

// user.verified = true       
// user['email'] = 'mail@mail.mail'//vengono aggiunte le proprità verified e email
// console.log(user)

// delete user.email
// console.log(user)//viene eliminata la prorpietà email

// _________________________________

//object2

let user = {
    firstName : "cicci",
    lastName : "sacchi",
 

    /*metodo*/name:function() //=>callback, variabile che elimina le parentesi in richiamo eventualmente solo se c'è un argomento// 
    {
      return 'Cosimo'
    }
}

console.log(user.name)