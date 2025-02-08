// the issue with the constructor function is that we have to set the properties 
// in prototype to inherit

//--  This issue is solved using class

class Human{

    constructor(){

    }

    // it automatically goes to the prototype of the class prototype
    //  we dont have to set it by ourself and it automatically gets assigned and the object ke proto me chala jata hai
    
    getBirth(){
        console.log("hi");
        
    }


}

console.dir(Human)




















