//Function Declaration
function aaa(a) {
    console.log('heyyylloo', a);
}

// Functions Expressions
var bbb = function () {
    console.log('hellooooo');
}

// Arrow Functions 
var ccc = () => {
    console.log('hellooollo');
}

var ddd = (c, b, a) => console.log('helelele', a);

var eee = () => console.log('helloooloo');


// IIFE 
// Immidiately Invoked function expression 
(function(){
    console.log('This is IIFE');
})()

(()=>console.log('hello'))()
