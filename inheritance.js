// class employee {
//     constructor(name){
//         console.log('Constructor : Employee : ' + name);
//     }
// }

// class manager extends employee{
//     constructor(name){
//         super();
//         console.log("Constructor: Manager: " + name)
//     }
// }

// let a = new manager("David Malan");

class employee {
    constructor(name, age, salary){
        this.empName = name;
        this.empAge = age;
        this.empSalary = salary;
    }
    info(){
        console.log(`${this.empName} is ${this.empAge} years old. His salary is ${this.empSalary}`);
    }
}

class manager extends employee{
    info(){
        let ta = 1000;
        let pa = 300;
        let totalSalary = this.empSalary + ta + pa;
        console.log(`${this.empName} is ${this.empAge} years old. His salary is ${totalSalary}`)
    }
}

let a = new manager("David Malan", 25, 36000);
let b = new employee("David Kalan", 28, 66000);
a.info();
b.info();