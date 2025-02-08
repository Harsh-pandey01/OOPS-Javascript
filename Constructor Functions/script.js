// we have a constructor function which provide us extra edge over factory function as
/*
Each and every function / object has a property called as 
prototype with them

//the prototype property has constructor which is pointing to the same function / object

*/

// 1 :- we dont hve to use the object to return
// when we do this a constructor function of type object is being called as native code
const obj = {
  fname: "hanni",
};

// console.dir(obj)

// lets create a normal function

function sum() {
  this.fname = "harsh";
  this.lastname = "pandey";

  this.getName = () => {
    return this.fname;
  };

  return 12;
}

// the way a function is being called the function has
/*
two behaviour
1. Normal function
2. Constructor function

*/

// when we call the function normally , all the code gets executed and if the value is return or undefined

// --------------------------------- Constructor function
sum.prototype.getLname = function(){
  return this.lastname;
};


const user = new sum();

// when we create a object using the constructor function then the object ka ek chij hota hai proto usme the function jiske help se yeh object bana hai uska prootype attach hojata hai

// so agar hum function ke prototype ke ander koi property ko set karde aur usko bhej de har jagah to problem solved

console.log(user.__proto__.getLname()); // -undefined

// the issue is that sum.prototype  === user.__proto__


// everything is good but the issue is that we have to set themethods outside the function everytime 

// ... this is what class solves for us