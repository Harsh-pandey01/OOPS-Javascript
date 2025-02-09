// create a class

class User {
  constructor(fname, lastname, age) {
    this.fname = fname;
    this.lastname = lastname;
    this.age = age;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.fname + " " + this.lastname;
  }
}

class student {
  constructor(fname, lastname, age, roll) {
    this.fname = fname;
    this.lastname = lastname;
    this.age = age;
    this.roll = roll;
  }

  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }

  getFullName() {
    return this.fname + " " + this.lastname;
  }

}


const user1 = new student("Hanni" , "pandey" , 12 , 2)

console.dir(user1);


// we are writting the duplicate codes which is not a very good thing hence we need a inheritance



// inheritance
class Emp extends User {


    constructor(fname, lastname, age,salary){
        super(fname, lastname, age) // for the constructor of the parent
    this.salary = salary // ses new properties as well
    }

    getAnotherFullName() {
        return this.fname + " " + this.lastname;
      }

    //   getFullName() {
    //     return "hello"
    //   }
    
}

const emp1 = new Emp("Hanni" , "pandey" , 12 , 2)

console.log(emp1)

const h1 = document.querySelector('h1')
h1.addEventListener('click',function(){
    console.log(this)
})


console.log(h1)



