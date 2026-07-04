// //Function Declaration
// function aaa(a) {
//   console.log("heyyylloo", a);
// }

// // Functions Expressions
// var bbb = function () {
//   console.log("hellooooo");
// };

// // Arrow Functions
// var ccc = () => {
//   console.log("hellooollo");
// };

// var ddd = (c, b, a) => console.log("helelele", a);

// var eee = () => console.log("helloooloo");

// // IIFE
// // Immidiately Invoked function expression
// (function () {
//   console.log("This is IIFE");
// })()(() => console.log("hello"))();

// function dada() {
//   console.log("I am dada");

//   function papa() {
//     console.log("I am papa");

//     function child() {
//       console.log("I am child");
//     }
//     return child;
//   }
//   return papa;
// }

// dada()()();

// function footpath(w = 10) {
//   console.log("I am Footpath", w, "feet");
// }
// function mainRoad(wid, cb) {
//   console.log("I am Main road", wid, "Feet");
//   cb(wid / 10);
//   cb();
// }

// mainRoad(80, footpath);

// function greet(){
//   console.log("Hello World");
// }
// greet()

// function add(a,b){
//   return a+b
// }
// console.log(add(9,10));

// const square = (a)=>{return a*a};
// console.log(square(4));

// const checkeveneorodd=function(a){
//   if (a%2==0) {return "even"}
//   return "odd"
// }

// console.log(checkeveneorodd(5));

// const checkTemp = function(cel){
//   return (cel*9/5)+32;
// }
// console.log(checkTemp(30));

// let func = function(user="Guest"){
//  return user;
// }
// console.log(func("Adnan"));

// let checkGreater = function (a, b, c) {
//   return a > b && a > c ? a : b > a && b > c ? b : c;
// };
// console.log(checkGreater(9,10,34));


// function areaOfRec (l,b){
//   return l*b;
// }
// console.log(areaOfRec(8,15));


// let checkAdult = (age) =>{
//   if(age>=18) return "Adult"
//   return "Minor"
// }
// console.log(checkAdult(19));


// function rev(str){
//   for(let i=str.length-1; i>=0; i--){
//     console.log(str[i]);
//   }
// }
// rev("Adnan");


// const mul = function(a,b){
//   return a*b;
// }
// console.log(mul(9,4));


// function normalFun(){
//   console.log("normal Function");
// }
// const arrowFunc = ()=>{
//   console.log("Arrow Function");
// }
// normalFun()
// arrowFunc()


// function unlimitedFun(...arr){
//   return arr.reduce((acc,num)=> acc + num,0)
// }
// console.log(unlimitedFun(2,4,3,32));


// let str = "The balck box with a white fox "
// function checkvowels(str){
//   var count =0;
//   for(let i in str){
//     if(str[i]==="a" || str[i]==="e"||str[i]==="i"||str[i]==="o"||str[i]==="u"){
//       count++;
//     }
//   }
//   console.log(count);
// }
// checkvowels(str)


// function palindrome(str){
//   for(let i=0; i<str.length/2; i++){
//     if(str[i]!==str[str.length-1-i]){
//       return "not palindrome"
//     }
//   }
//   return "palindrome"
// }

// console.log(palindrome("naman"))



// setTimeout(function() {
//   console.log("hello");
// }, 3000);

// function func(){
//   return "order 2"
// }
// function highorder(func){
//   console.log(func);
//   return func
// }
// console.log(highorder(func()))



// function fun2(){
//   return "fun2"
// }
// function fun(fun2){
//   return fun2
// }
// console.log(fun(fun2()));


// function sub(a,b){
//   return a-b;
// }
// console.log(sub(3,5));


// function factorial(n){
//   if(n==1) return 1
//   return factorial(n-1)*n
// }
// console.log(factorial(5));



// function febonaci(a,b,ans,n){
//   if(n==0) return
//   ans = a+b;
//   console.log(ans);
//   a=b;
//   b=ans;
//   return febonaci(a,b,ans,n-1)
// }
// let a=0,b=1,ans=0;
// console.log(a);
// console.log(b);
// console.log(febonaci(a,b,ans,3));


// function findPower(num,power){
//   if(power ==0) return 0
// else if (power==1) return 1
// return findPower(num,power-1)*num
// }
// console.log(findPower(2,10));


// (function(){
//   console.log("Executed");
// })();



// function factorial(n){
//   if(n==1) return 1
//   return factorial(n-1)*n
// }
// console.log(factorial(5));


// function counter(){
//   let count =0
//   return function(){
//     count++
//     return count
//   }
// };

// let count = counter()
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())



// let currying = (a)=>(b)=>{
// return a+b
// }
// let curried = currying(10)
// console.log(curried(5));


// setTimeout(()=>{
//   console.log("debouce func");
// },1000)


// setTimeout(()=>{
//   console.log("Throttle func");
// },2000)

// setTimeout(()=>{
//   console.log("executes only once ");
// },5000)



// let arr =[1,2,3,4,5]
// let arr2 = arr.map((a)=>{
//   return a*2
// })
// console.log(arr);
// console.log(arr2);


// let arr =[100,122,33,423,53]
// let arr2 = arr.filter((a)=>{
//   return a>99
// })
// console.log(arr);
// console.log(arr2);


// const arr =[1,2,3,4,5]
// let arr2 = arr.reduce((acc,num)=>acc+num,0)
// console.log(arr);
// console.log(arr2);


// let arr =[1,2,3,4,5]
// arr.forEach(i=>console.log(i))


// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());