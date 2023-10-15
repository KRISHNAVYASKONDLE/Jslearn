let job="software engineer";
const myobj={
    name:"krishna",
    age: 13,
    address: "1203-2-222 warangal",
    work: job
}
console.log(myobj.name);
console.log(myobj["name"]);
myobj.age=14

console.log(myobj.age);
myobj.verified=true
myobj.work="unemployed"
myobj.fun=function() {
    console.log(`hello user ${this.name}`);
}
const myobj2={
    a1:1,
    b1:3
}
const myobj3={
    a2:11,
    b2:13
}
console.log(myobj);
console.log(myobj.fun)
console.log(myobj.fun())

Object.freeze(myobj)//we can freeze if we want
myobj.name="d"
console.log(myobj.name);
//we can have obj inside an array as well
console.log(Object.keys(myobj))
console.log(Object.values(myobj))
console.log(Object.entries(myobj))
const obj4=Object.assign({},myobj,myobj2,myobj3)
//Object.assign can also be done in below way
const obj5={...myobj2 , ...myobj3}
console.log(obj4)
console.log(obj5)


// js object
// {
//     "name": "kittu",
//     "password": "changu"
// }
const obj={}


if(obj.keys(obj).length===0)
{
    console.log(`js dont have isempty for objects.so follow this`);
    console.log(`for arrays we have length same like java`);
}

