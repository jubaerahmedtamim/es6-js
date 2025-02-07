async function test (){
    return 'hello';
}

let test2 = async function(){
    return "hello 2";
}

const test3 = async () => 'hello 3';

// console.log(test())

// test().then(result => console.log(result))

async function test4() {
    console.log("2: Message")
    await console.log("3: Message")
    console.log("4: Message")
}

// console.log("1: Message")
// test4();
// console.log("5: Message")

const dataFetch = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

dataFetch().then(result => console.log(result.length))