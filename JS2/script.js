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


// let arr = ["mango","bnana","apple","kiwi","grapes"]
// console.log(arr[arr.length-1]);
// console.log(arr[0]);
// console.log(arr.length);
// arr.push("orange")
// console.log(arr);
// arr.pop()
// console.log(arr);
// arr.unshift("stawberry")
// console.log(arr);
// arr.shift()
// console.log(arr);
// arr.reverse()
// console.log(arr);

// let arr = [3,2,8,3,7,4,5]
// arr.sort()
// console.log(arr);
// arr.sort((a,b)=>b-a)
// console.log(arr);


// let arr = [3,4,56,7,8]
// arr.splice(2,3)
// console.log(arr);
// arr.splice(1,0,4,5,6,7)
// console.log(arr);
// let arr2= arr.slice(0,4)
// console.log(arr2);
// console.log(arr2.indexOf(5));
// console.log(arr2.includes(30));
// console.log(arr2.join("."));
// console.log([...[1,2],...[3,4]]);
// console.log([...arr]);
// console.log(Math.max(...arr));
// let [x,y] = arr
// console.log(x,y);
// [x,y]= [y,x]
// console.log(x,y);


// let arr = [1,2,3,4,5,900]
// console.log(arr);
// arr.forEach(i=>console.log(i*2))

// let arr2  = arr.map(i=>{return i*i})
// console.log(arr2);

// let arr2 = arr.filter(i=>{
//   return i%2==0
// })
// console.log(arr2);

// let arr2 = arr.reduce((acc,num)=>acc + num,0)
// console.log(arr2);

// let max = arr.reduce((acc,num)=> {if (acc>num) return acc
//   else return num
// },0)
// console.log(max);

// console.log(arr.find(i=>i%2==0));

// console.log(arr.findIndex(i=>i>50));

// console.log(arr.some(i=>i<0));

// console.log(arr.every(i=>i>0));

// let names = ["Adnan","sarthak","mohsin","khan"]
// names.forEach(i=>console.log(i.toUpperCase()))

// let marks = [54,76,81,45,87,99,34]
// let student = marks.filter(i=> i>80)
// console.log(student);


// let avg = [4,4,4,4,4]
// console.log((avg.reduce((acc,num)=>(acc+num),0))/avg.length);


// let arr = [1,2,3,2,1,2,3]
// let counts  = {}
// for(const a of arr ){
//   counts[a] = (counts[a]||0)+1
// }
// console.log(counts);


// let arr = [1,2,3,[6,4,3,2],[5,3,5]]
// console.log(arr);
// console.log(arr.flat());


// let arr = [1,1,2,2,3,3,4,3,2,1]
// console.log(...new Set(arr));


// let arr = [
//     {name:"Adnan", age:20},
//     {name:"hasan", age:10},
//     {name:"sarthak", age:35}
// ]
// arr.sort((a,b)=>a.age-b.age);
// console.log(arr);


// let cart = [
//     {shoes:500, tshirt:450,shirt:500},
//     {shoes:900, tshirt:1000,shirt:500},
//     {shoes:5000, tshirt:450,shirt:1000}]

// let total = cart.reduce((acc,num)=>{ return acc+(num.shirt+num.shoes+num.tshirt)},0)
// console.log(total);


// const user = [
//     {name:"Adnan",age:90},
//     {name:"alice",age:12},
//     {name:"mohd", age:20}
// ]
// let group = Object.groupBy(user,use=>use.age)
// console.log(group);


// const number = [1,2,3,4,5]
// const chaining = number.filter(a=>a%2!==0).map(a=>a*a);
// console.log(chaining);


// diff btw map and foreach
// map is used to transform and create a new arr and not change original one
// foreach change original array and modify original array


// let student = {
//     name:"adnan",
//     rollno:13,
//     branch:"aids"
// }
// console.log(student.name,student.rollno,student.branch);
// console.log(student["name"],student["rollno"],student["branch"]);
// student.year = "3rd year"
// console.log(student);
// student.branch = "cse-aids"
// console.log(student);
// delete student.branch
// console.log(student);


// let method = {
//     name:"ADNAN",
//     add(a,b) {
//         console.log(this.name);
//         return a+b},
//     sub(a,b){return a-b}

// }
// console.log(method.add(5,2));
// console.log(method.sub(5,2));



// let nestedobj = {
//     name:"adnan",
//     address:{
//         city:"bhopal",
//         state:"MP",
//         area:{
//             colony:"bank colony",
//             nearby:"madina masjid"
//         }
//     }
// }

// console.log(nestedobj.address.area.nearby);

// let {name:firstName,address="Bhopal,mp"} = nestedobj
// console.log(firstName);
// console.log(address);

// let copy = {...nestedobj}
// console.log(copy);


// let extra  = {firstname:"dnan",age:90,county:"bhoopal"}
// let merge = {...nestedobj,...extra}
// console.log(merge);


// let user = {name:"adnan",
//     age:45,
//     city:"bhopal",
// }
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// for(let i in user){
//     console.log(i,user[i]);
// }

// let frozen = Object.freeze(user)
// user.age= 34
// delete user.name;
// user.lastName = "khan"
// console.log(user);

// let seal = Object.seal(user)
// user.age= 34
// delete user.name;
// user.lastName = "khan"
// console.log(seal);

// let arr = [{
//     name:"adnan",
//     age:"20",
//     clg:"sistec"
// },{
//     name:"ali",
//     age:"90",
//     clg:"rgpv"
// },{
//     name:"piyush",
//     age:"10",
//     clg:"oriantl"
// }]

// console.log(arr.sort((a,b)=>b.age-a.age));
// console.log(arr[0]);




// TODOLIST

// let TodoList = []

// function addTask(task){
//     TodoList.push({id:TodoList.length+1,task,isDone:false})
// }
// function completeTask(task){
//     let compltTask = TodoList.find(obj=>obj.task===task)
//     if (compltTask) compltTask.isDone=true;
// }
// function deleteTask(task){
//     TodoList = TodoList.filter(obj=>obj.task!==task)
// }
// function readTask(){
//     TodoList.forEach((obj)=>{
//         console.log(`${obj.id}. ${obj.task} Task is ${obj.isDone?"Completed":"Not Completed"}`);
//     })
// }
// addTask("github lecture on sheriyans")
// // readTask()
// addTask("sheet 2 3 4 of phase 2")
// readTask()
// completeTask("sheet 2 3 4 of phase 2")
// // readTask()
// completeTask("github lecture on sheriyans")
// readTask()
// deleteTask("github lecture on sheriyans")
// // readTask()
// deleteTask("sheet 2 3 4 of phase 2")
// readTask()




// Shopping cart

// let cart = []
// function additem(item,price,quantity){
//     cart.push({id:cart.length+1,item,price,quantity})
// }
// function removeitem(item){
//     cart = cart.filter(obj=>obj.item!==item)
// }
// function calculateTotal(){
//     let total = cart.reduce((acc,num)=>acc+(num.price*num.quantity),0)
//     console.log(`Total Bill : ${total}`);
// }
// function quantity(item,quantity){
//     let q = cart.find(n=>n.item===item)
//     q.quantity+=quantity
// }
// function readTask(){
//     cart.forEach((obj)=>{
//         console.log(`${obj.id}. ${obj.item} ${obj.price} ${obj.quantity}`);
//     })
// }
// additem("dairy milk",10,2)
// additem("cold drink",10,1)
// // readTask()
// // calculateTotal()
// additem("popcorn",20,1)
// // calculateTotal()
// quantity("cold drink",5)
// // calculateTotal()
// // readTask()
// removeitem("dairy milk")
// // readTask()
// removeitem("popcorn")
// readTask()
// calculateTotal()


// Student Grade Tracker

// let students = [
//     { name: "Aman", marks: [80, 90, 75] },
//     { name: "Priya", marks: [95, 85, 92] },
//     { name: "Raj", marks: [60, 55, 70] }
// ];

// function avgMarks(name){
//      return (students.find(s=> s.name === name)).marks.reduce((acc,n)=>acc+n,0)/3;
// }
// function Grade(name){
//     let avg = avgMarks(name)
//     if (avg>=90) return "A"
//     else if(avg>=75) return "B"
//     else if(avg>=60) return "C"
//     else return "Fail"
// }

// students.forEach(s=>{
//     console.log(`${s.name} : Avg = ${avgMarks(s.name).toFixed(2)} , Grade = ${Grade(s.name)}`);
// })


//Word Frequency Counter

// function wordFrequencyCounter(text){
//     text = text.split(" ")
//     let obj = {}
//     text.forEach(element => {
//         obj[element] = (obj[element]||0)+1
//     });
//     return obj
// }

// let text =
// "the quick brown fox jumps over the lazy dog the fox is quick";
// console.log(wordFrequencyCounter(text));


//Library Management System

// let library = []

// function addBook(name,author){
//     library.push({id:library.length+1,
//         name,author,boorowed:false})
// }
// function boorowedBook(name){
//     let book =library.find(s=>s.name===name)
//     if(!book) return "Book not found"
//     if(book.boorowed) return "Already boorowed"

//     book.boorowed = true
//     return `You boorowed ${book.name} book`
// }
// function returnBook(name){
//     let book = library.find(b => b.name === name)
//     if(!book) return "Book not found"
//     book.boorowed = false
//     return `You return ${name} book`
// }
// function checkBooks(){
//     console.log("Available Books");
//     library.forEach(b =>{
//         if(!b.boorowed){
//              console.log(`BookNo. : ${b.id}, Book-Title : ${b.name}, Book-Author : ${b.author}`)
//         }
//     });
// }
// addBook("Psychology of money","Morgan housel")
// addBook("IKIGAI","Hector Garcia")
// addBook("Atomic habits","James Clear")
// checkBooks()
// console.log(boorowedBook("IKIGAI"));
// checkBooks()
// console.log(returnBook("IKIGAI"));
// checkBooks()



// const arr = [1,2,3];
// arr[10] = 5;
// console.log(arr.length);
// console.log(typeof []);
// console.log([] == false);
// console.log([1,2] + [3,4]);

// function x(a,b){
//    return a+b;
// }
// console.log(x(2));


// Array.prototype.myMap = function(callback){
//     let result = []
//     for(let i =0 ; i<this.length; i++){
//         result.push(callback(this[i],i,this))
//     }
//     return result;
// }

// console.log([1,2,3].myMap(x=>x*2));



// Array.prototype.Myfilter = function(callback){
//     let ans = []
//     for(let i=0; i<this.length ; i++){
//         let check = callback(this[i],i,this)
//        if (check){
//         ans.push(this[i])
//        }
//     }
//     return ans
// }
// console.log([1,2,3].Myfilter(x=>x%2!==0));



// Array.prototype.Myreduce = function (callback, initialValue) {
//     let acc;
//     let startIndex;

//     if (this.length === 0) {
//         if (arguments.length > 1) {
//             return initialValue;
//         }
//         throw new TypeError("Reduce of empty array with no initial value");
//     }

//     if (arguments.length > 1) {
//         acc = initialValue;
//         startIndex = 0;
//     } else {
//         acc = this[0];
//         startIndex = 1;
//     }

//     for (let i = startIndex; i < this.length; i++) {
//         acc = callback(acc, this[i], i, this);
//     }

//     return acc;
// };

// console.log([1,2,3].Myreduce((acc,n)=>acc-n,5));


















//SHEET 2
// let arr = ["spider man","domsday","toxic","KGF","totaldhamal"]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }


// let arr = [12,2,3,"khan","adnan",true,false,[1,2,3,4]]
// console.log(arr[7]);
// console.log(arr[0],arr[arr.length-1]);
// let temp = arr[1]
// arr[1] = arr[arr.length-2]
// arr[arr.length-2]=temp;
// console.log(arr);


// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr[0][0],arr[1][0],arr[2][0]);
// console.log(arr[0][0]|+arr[1][1]+arr[2][2]);

// let arr = [12,2,3,"khan","adnan",true,false]
// // console.log(arr.length);
// let checklength = function(){
//     let len = arr.length;
//     if(len%2==0){
//         return "length is even"
//     }
//     else{
//         return "length is odd"
//     }
// }
// console.log(checklength());


// let arr = [1,2,3,4,5]
// let arr1 = []
// // arr.push(1,2,3)
// // console.log(arr);
// for(let i =0 ; i<arr.length; i++){
//     arr1.push(arr[i])
// }
// console.log(arr1);



// let arr = [1,2,3,4]
// console.log(arr.pop());
// while(arr.length!=0){
//     console.log(arr.pop());
// }



// let username = ["Adnan","ibad","charlie","suhana"]
// console.log(username);
// username.unshift("kk","piush","kunal",'rakesh')
// console.log(username);


// username.shift()
// console.log(username);
// while(username.length>2){
//     username.shift()
// }
// console.log(username);


// let arr = ["Adnan","ibad","charlie","suhana","abdul "]
// console.log(arr);

// arr.splice((arr.length/2)-1,2)
// arr.splice((arr.length/2)-1,3,"kk","husna","talha","sami","alin")
// arr.reverse();

// let temp = arr[0]
// arr[0]=arr[2]
// arr[2]=temp;
// console.log(arr);



// let arr = [5,4,2,6,3,1]
// console.log(arr);
// let even = (arr.filter(a=>a%2==0)).sort();
// let odd = (arr.filter(a=>a%2!=0)).sort();
// console.log(even.concat(odd));
// let newarr = arr.slice(0,4)
// let newarr = arr.slice(1,arr.length-1)
// console.log(newarr);
// let arr2 = [1,2,3,4,5]
// console.log(arr.concat(arr2));
// let arr3 =  [3,5,7,9,0]
// let combinationof3=arr.concat(arr2).concat(arr3);
// let removedup = []
// // console.log(removedup.includes(a));
// combinationof3.forEach((n)=>
//     {
//     if(!removedup.includes(n)){
//         removedup.push(n)
//     }
// }
// )
// console.log(removedup);
// let arr = ["mango","apple","banana"]
// let arrcheck = ["mango","kiwi","apple","pineapple"]
// function inclu(arr){
//     if(arr.includes("apple")) return true
// else return false
// }
// console.log(inclu(arr));

// for (let index = 0; index < arrcheck.length; index++) {
//     if(arr.includes(arrcheck[index])){
//         console.log(true);
//     }
//     else console.log(false);
// }



// let arr = ["Adnan","ibad","charlie","rahul","abdul"]
// console.log(arr.indexOf("rahul"));

//  let arr = [1,5,3,4,5,2,3,5]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]===5) console.log(i);
//  }



// let arr = ["Adnan","is","became","a","Developer"]
// console.log(arr.join(","));
// console.log(arr.join(" "));
// for(let i=0 ; i<arr.length; i++){
//     // console.log(arr[i]);
//     if(i%2==0) console.log(arr[i]);
// }
// for(let i of arr){
//     console.log(i);
// }


// let char = ['a','b','i','u','e','f','g','i','p','u','o']
// let vowels = ['u','a','i','o','e']
// for(let i of char){
//     if(vowels.includes(i)) console.log("vowels");
// }


// let arr = [1,2,34,45,5]
// let arr2 = [...arr]
// arr2[2]="modify"
// console.log(arr);
// console.log(arr2);


// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// let arr3= [7,8,9]
// let mergedArray = [...arr1,...arr2,...arr3]
// console.log(mergedArray);
// mergedArray.splice(3,0,55,90)
// mergedArray.splice(6,0,50,100)
// console.log(mergedArray);















// SHEET 3
// let prices = [100, 250, 399, 499];
// prices.forEach(n=>console.log(`₹${n}`))


// let students = [
//   { name: "Anubhav", marks: 85 },
//   { name: "Rahul", marks: 42 },
//   { name: "Aman", marks: 90 },
// ];
// students.forEach(n=>{
//     if(n.marks>50) console.log(`${n.name} Pass`);
//     else console.log(`${n.name} Fail`);
// })


// let names = ["anubhav", "rahul", "aman"];
// console.log(names.map((n)=>console.log(n.toUpperCase())
//  ));


let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];

let newproducts = products.map((n)=>{
    return {
        name : n.name,
        price : n.price,
        discountPrice:n.price-(n.price/10)
    }});
console.log(newproducts);
