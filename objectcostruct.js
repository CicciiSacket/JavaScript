function User(firstName, lastName){ //constructor

    this.firstName = firstName
    this.lastName = lastName
    
    this.name = function(){
        return firstName  + lastName
    }
}

let user1 = new User("pippo", "baudo") //new per richiamare il costruttore

// con typeof ci tornerà che è di tipo object, mentre con istanceof ci dice se l'oggetot 1e istanza del costruttore o no, true o false
// console.log(typeof user1)
// console.log(user1 instanceof User)

console.log(user1.name())



