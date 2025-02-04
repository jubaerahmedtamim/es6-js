class hello {
    message() {
        console.log('hello everyone')
    }
    sorry() {
        console.log('Sorry everyone')
    }
}

const a = new hello();

// a.message()
// a.sorry();

class student {
    //constructor method
    constructor(name, age) {
        this.studentName = name;
        this.studentAge = age;
        console.log('constructor method')
    }
    // prototype method
    hello(){
        console.log(`hello ${this.studentName}, are you ${this.studentAge} years old?`)
    }
    static staticMethod(){
        console.log('static method')
    }
}
//constructor method call automatically. no need to called manually

let a2 = new student('zunu', 3);
a2.hello()

// calling to a static method. to invoke a static method just use the className.staticMethodName()
student.staticMethod();