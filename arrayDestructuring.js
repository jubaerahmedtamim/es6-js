const array1 = [12, 'Anik', ,'Hacker', ['Male', 120000]];

const [anikAge, AnikName, hackerAge = 60, hackerName, [gender, salary] ] = array1; // using default value

console.log(anikAge, AnikName, hackerAge, hackerName, gender, salary )


const user = ['Baby Laila', 12, 'male'];
const [name, ...args] = user;

console.log(args);



function user2 () {
    return ['Rocky', 12, 'male']
}

const [name2, age2, gender3] = user2();

console.log(name2, age2, gender3)