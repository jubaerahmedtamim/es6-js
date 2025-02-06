fetch('https://jsonplaceholder.typicode.com/posts').then(res => {
    return res.json()
}).then(data => {
    console.log(data.length)
    for(let i in data){
        console.log(data[i].title)
    }
}).catch(error => console.log(error));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json',
    }
}).then(res => res.json()).then(json => console.log(json))