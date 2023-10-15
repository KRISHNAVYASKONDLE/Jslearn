const myobj = {
    name:"andhra",
    cap:"delhi",
    pop:10000,
    printname:  function(){
        console.log(this);//prints object
        // console.log(this);
    }
}
console.log(myobj.printname());

console.log(this);//nothing is root objct. but in chrome root object is window so it will come

//in normal function this keyword dont work.
function sadf(){
    let name="kittu"
    console.log(this);//THIS will print some random stuff.but in arrow function wont happen
    console.log(this.name);
}
sadf()

const hjh= () => {
    let name="kittu"
    console.log(this.name);
}
hjh()


//arrow func

const abx= () => {
    console.log(this);
console.log(`hello`);
}
abx()

//nullish negoitable operator ?? :null verified

let val1;
val1=5 ?? null
console.log(val1);
val1=null ?? 15
console.log(val1);
val1="" ?? null
console.log(val1);
val1=undefined ?? 100
console.log(val1);
val1=100?? undefined
console.log(val1);
val1=undefined ?? null
console.log(val1);
val1=null ?? undefined
console.log(val1);
