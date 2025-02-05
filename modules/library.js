let message = 'Hello World';

function user(name){
    return `hello ${name}.`
}

class text {
    constructor(){
        console.log('constractor : method')
    }
}

export default function(){
    console.log("Default function.")
}

export {
    message, 
    user, 
    text,

}