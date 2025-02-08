// factory functions are used to create multiple objects having similar structure

const factoryFunc = function(fname,lname,age){
    const obj = {
        fname , 
        lname ,
        age , 

        getDetails(){
            console.log(this);
            console.log(`${fname} ${lname}`)
            
        }
    }
    return obj
}

const harsh = factoryFunc("Harhs" , "oan" , 25)
const nina = factoryFunc('nina',"oan" , 25)
console.dir(factoryFunc)
// console.log(harsh.getDetails());
// console.log(harsh)

//
// checking if the memory location they are present is same or not
//ans is no they are same at memory location 
console.log(harsh.getDetails == nina.getDetails);


// it is not a very memory efficiecnt way of doing thing

// instead we can have a globalfunction and each of the methods are pointing to that global function onlu


//--------------------- take away is 
// -- factory functions are good but they are not memory efficient

// Hence comes the constructory functions








