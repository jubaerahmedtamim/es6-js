let name = 'Rakesh';
let course = 'Js';

const obj = {
    name,
    course
}

// console.log(obj)

let n = 'student'

const obj2 = {
    [n+ 'name']: 'Yash', 
    course: 'Physics',
    detail: function(){
        return `${this.studentname} is student of ${this.course}`;
    }
}
// console.log(obj2)
// console.log(obj2.studentname)
// console.log(obj2.detail())

// New function syntax
let obj3 = {
    name: 'Nila',
    detail(){
        return `${this.name} is a good girl.`
    }
}
// console.log(obj3.detail())
// console.log(obj3['detail']())


let carName = "Noah";
let brandName = 'Toyota';

function carDetails(name, brand){
    return {
        name, 
        brand
    }
}

const carObj = carDetails(carName, brandName)  // creating an object in carObj
console.log(carObj)
console.log(carObj.name)
console.log(carObj.brand)