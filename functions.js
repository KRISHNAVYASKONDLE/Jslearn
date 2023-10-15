function givename(name){
    console.log(name);
}
givename//this is called refernce
givename()//this execution.
//output of line 5 is undefined but not null. to edit this
function givename(name){
    if(name===undefined) //this is also equivalent to if(!name)
        {return 'not defined name';}        
        return name;
    }
console.log(givename("aa"));//output aa

//if we dont want undefined we can give a default name when user doesnot provide name
function givename(name='randomuser'){
    return name;
    }

console.log(givename());//output randomuser

//... is rest operator
function otherfun(...varinput)
{
    console.log(varinput);
}
otherfun(200,300,"array")
otherfun(200,300)

const job="nojob"

const myobj={
    name:"krishna",
    age: 13,
    address: "1203-2-222 warangal",
    work: job
}

//we can call function before declaration
otherfun2({
    name:"kitee",
    address:"adfondaf"
})

function otherfun2(randomobjects)
{
    console.log(`${randomobjects.address}`);
}
 
otherfun2(myobj)

const somvar=function randfun(somein)
{
    console.log(somein+1);
}
somvar(2);// but if we call this before declaration it wont work

// implicit return.if only one line we can return directly without brackets and return

const mlm1= (num1,num2)=> num1+num2
// other way is we can use curly brackets () also. when we use this we need not write return
const mlm2= (num1,num2)=> (
    console.log("print to check"),
    num1+num2,
    num1-num2
    )
//when ever flower bracket used we should write return for sure.
const mlm3 = (num1,num2)=> ({
firstnum: num1+num2
})
console.log(mlm3(1,3).firstnum)

console.log(mlm2(3,4));
console.log(mlm1(1,1));


//Immediate Invoke Function Expression. means calling function immediate after writing it

// ("function code")(); --same as-- myfun()
(function myfun(){
    console.log("abcde");
})();

(function myfun(name){
    console.log(name);
})("kittu");

//note:: dont forget to mention ; after ()() or else it wont know when to stop
( () => 
   {
    console.log("ecdba");
   }
)()


