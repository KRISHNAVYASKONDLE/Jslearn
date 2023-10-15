//primitive types stored in stack. when we make va2=var1. a copy of va2 is created and var1 is poined to it. 
let nameone="strsd"
let name2=nameone
name2="sf"
console.log(nameone+" "+name2)

//objects are stored in heap.the var which have pointing to these objects are in stack.
let obj1={
    name:"krishna"
}
let obj2=obj1
obj2.name="rama"

console.log(obj2.name+" "+obj1.name);