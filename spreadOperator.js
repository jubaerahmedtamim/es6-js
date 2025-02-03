function sum (name, ...args){
    let sum = 0;
    for(let i in args){
        sum += args[i];
    }
    return `${name}: ${sum}`;
}

let arr = [10, 20, 30]
// console.log(sum('askay kumar', ...arr))


const arr2 = ["a", 'b', 'c'];

const newArr2 = [...arr2]
newArr2.push('2p')
arr2.push('p')
console.log(arr2)
console.log(newArr2)



const obj1 = {
    name: 'Bobby',
    course: 'English',
    age: 24
}

const obj2 = {
    age: 32,
    
}

const obj3 = {
    ...obj1, ...obj2
}

console.log(obj1)
console.log(obj2)
console.log(obj3)