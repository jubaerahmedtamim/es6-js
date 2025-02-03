function sum () {
    // console.log(arguments)
    let sum = 0;
    for( let i in arguments){
        sum = sum + arguments[i];
    }
    console.log(sum)
}
sum(20, 30, 40)
sum(20, 30)


// rest operator
function sum2 (name, ...args){
    let sum = 0;
    for (let i in args) {
        sum += args[i]; 
    }
    return `${name} : ${sum}`;   
}

console.log(sum2("Aksay Kaumar", 20, 30, 40))
console.log(sum2("Tulsi Kaumar", 25, 35, 45))