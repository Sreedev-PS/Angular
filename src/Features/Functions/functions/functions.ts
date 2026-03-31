import { Component } from '@angular/core';

@Component({
  selector: 'app-functions',
  imports: [],
  templateUrl: './functions.html',
  styleUrl: './functions.scss',
})
export class Functions {

//------------------ typing functions
myfunction(a:number,b:string):boolean{
  return a !=0 && b != '';
} // we providing type for parameters and retun value of the function
//-------------------end-------------------


//------------------ optional parameters{
  myOptionalFunction(name?:string){
    // here we provding the parameter as optional y using question mark after the parameter name 
  }
//-------------------end-------------------

//------------------ default parameters
myDefaultFunction(name:string = 'default name'){
  // here we providing the parameter with default value if we not pass any value to the parameter it will take the default value
}
//-------------------end-------------------

//------------------ function expression
 myfunctionExpression = function(a:unknown,b:unknown){
  // here we creating a function and assigned it to a varibale . this is called function expression 
  // this value will be window object in here
 }

 myexpressioncall = this.myfunctionExpression('test','test')
// --------------------end-------------------

//------------------ arrow function
myArrowFunction = (a:unknown,b:unknown) => {
  // here we creating a function using arrow function syntax 
  // this value will be the value of the enclosing scope in here. or the value of this will be the this value of its luxoical scope  
  // it not have constructors ( eg : we can't create a arrow function with new keyword)
  // it does not have prototype properties (eg : we can't add properties to the prototype of an arrow function)
}
//-------------------end-------------------

//------------------ rest parameters

myRestFunction(...nums:number[]){
  // here we creating a function with rest parameters 
  // rest parameters allow us to pass an indefinite number of arguments to a function as an array 
  // we can use rest parameters to create functions that can accept any number of arguments   
  // in any way we need to wrap the type into an array for rest parameters 
  return nums.reduce((a,b)=>a+b,0) // here we using reduce method to sum all the numbers in the array
}
//-------------------end-------------------

//------------------ function overloading
myfunctionOverload():void;
myfunctionOverload(a:unknown):void;
myfunctionOverload(a:unknown,b:unknown):void;
myfunctionOverload(a?:unknown,b?:unknown):void{

  // here we provided multiple parameters set. based on argument we passed while invoking function , typescript will choose the correct parameter set automatically.
  // we need to provide full function signature. that means we need to provide the parameter type and the return for each parameter set.
}
// -------------------end-------------------


//------------------------- function interface
// we have created an interface with name myfunctionInterface and we have defined a function signature in it. now we can use this interface to create a function that matches the signature defined in the interface. this is called function interface
addFunction:myfunctionInterface = (a,b) => {
  // here we creating a function that matches the signature defined in the myfunctionInterface interface 
  // we need to provide the parameter type and the return type for the function that we are creating using the interface 
  return true; // here we returning true because the return type of the function is boolean 
}

add = this.addFunction(1,'test') // here we invoking the function that we created using the interface and passing the arguments to it. based on the arguments we passed while invoking the function, typescript will choose the correct parameter set automatically. and it will return true because the return type of the function is boolean
// -------------------end-------------------


//------------------ function type
// similer to function interface but have some syntax difference. in function type we need to provide the parameter type and the return type for the function that we are creating using the function type. and we need to use the type keyword to create a function type. and we can use this function type to create a function that matches the signature defined in the function type. this is called function type
myFunctionType:myfunctionType = (a,b) => {
  // here we creating a function that matches the signature defined in the myfunctionType function type 
  // we need to provide the parameter type and the return type for the function that we are creating using the function type 
  return true; // here we returning true because the return type of the function is boolean 
}
typefunctioncall = this.myFunctionType(1,'test') // here we invoking the function that we created using the function type and passing the arguments to it. based on the arguments we passed while invoking the function, typescript will choose the correct parameter set automatically. and it will return true because the return type of the function is boolean
//------------------end-------------------
}

type myfunctionType = (a:unknown,b:unknown) => boolean; // here we created a function type with name myfunctionType and we have defined a function signature in it. now we can use this function type to create a function that matches the signature defined in the function type. this is called function type

interface myfunctionInterface{
  (a:unknown,b:unknown):boolean;
  // here we created an interface with 2 parameter set and return type as boolean . so we using this signature to create a funtion
}