// let myName = "Rehan     ";
// let myCaste = "Chhipa     ";

// console.log(myName.truelength());


let myHeros = ["thor","spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.rehan = function(){
    console.log(`Rehan is present in all objects`);
    
}


//heroPower.rehan();
myHeros.rehan();
