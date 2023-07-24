
let user = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName= lastName;
    this.getLastName= function(){
        console.log(`lastname was ${this.lastName}`);
    }
}

let kiran = new user("kiran", "madiwalar")
let kira = new user("kira", "madiwalar")
console.log(kiran);
console.log(kira);