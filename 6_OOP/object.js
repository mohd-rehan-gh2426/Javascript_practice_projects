function multiplyBy5(num){
    return num * 5;
} 

multiplyBy5.power = 2;

console.log(multiplyBy5(5))
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username,price){
    this.username = username;
    this.price = price;
}

createUser.prototype.increment = function(){
    this.price++;
}

createUser.prototype.specifyName = function(){
    this.username = this.username + 'Jhannat';
}

createUser.prototype.printMe = function(){
    console.log(`price is ${this.price}`);
    console.log(`username is ${this.username}`);
    
}

const chai = new createUser("Chai",25);
const tea = new createUser("tea",250);

chai.specifyName();
chai.increment();
chai.printMe();
tea.increment();
tea.printMe();