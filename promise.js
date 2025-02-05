let complete = false;

function prom(complete) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data please wait.")

        setTimeout(() => {
            if (complete) {
                resolve('I am successful.')
            }
            else {
                reject("I am failed")
            }
        }, 3000)
    })

}

const onfulfilment = (result) => {
    console.log(result);
}

const onrejection = (error) => {
    console.log(error);
}
// prom(false).then(onfulfilment).catch(onrejection)


//promise.all
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
const fetchPosts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

Promise.all([fetchUsers, fetchPosts]).then(result => {
    // console.log("users:", result[0].length);
    // console.log("posts:", result[1].length);
}).catch(error => console.log(error))


// chanining multiple async task when one api call depends on another.

// function getUser(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//       .then(response => response.json());
//   }

//   function getUserPosts(userId) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//       .then(response => response.json());
//   }

//   getUser()
//     .then(user => {
//       console.log('User:', user);
//       return getUserPosts(user.id);
//     })
//     .then(posts => console.log('Posts:', posts))
//     .catch(error => console.error('Error:', error));


function getUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(res => res.json())
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(res => res.json());
}

getUser(8).then(result => {
    console.log("user:", result)
    return getUserPosts(result.id)
}).then(posts => { console.log("Posts:", posts.length) }).catch(error => console.log(error))