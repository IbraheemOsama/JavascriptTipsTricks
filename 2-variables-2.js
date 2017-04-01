//The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
//undefined is a property of the global object; i.e., it is a variable in global scope. The initial value of //undefined is the primitive value undefined.

var x; // x has been declared, but its value is undefined
if(x==undefined){
  console.log("x is undefined");
}
else{
  console.log("x has value");
}

if(!x){
  console.log("x is undefined");
}
else{
  console.log("x has value");
}

var undefined=1;

if(x==undefined){
  console.log("x is undefined");
}
else{
  console.log("x has value");
}

if(!x){
  console.log("x is undefined");
}
else{
  console.log("x has value");
}

if(x==void 0){
  console.log("x is undefined");
}


// console.log("hello world");
// var undefined="hello";

// console.log(undefined);

// var x=void 0;
// console.log(x);