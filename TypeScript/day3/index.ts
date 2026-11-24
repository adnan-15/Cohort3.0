// type userobj = {
//     name : string,
//     age:number,
// }

// let userObj : userobj= {
//     name:"fasdf",
//     age:34
// }
// userObj.name="fg"


// let obj:any={
//     name:"fdaskljfksd"
// }
// obj.name=34

// console.log(obj);


// let sum = (a:number,b:number):number=>{
//     return a+b;
// }

// let res:number=sum(3,3)
// console.log(res);



// let sum = (a:number,b:()=>number):number=>{
//     return b()
// }

// console.log(sum(3,()=>{
//     return 89
// }));


//currring funciton
// let sum = (a:number)=>(b:number)=>{
//     if(b!==undefined) return sum(a+b);
//     return a;
// }

// let data = sum(23)(90)(8)();
// console.log(data);



