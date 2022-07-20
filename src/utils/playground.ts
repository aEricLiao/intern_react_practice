function basic() {
  //   1. Type Inference
  //   let whatIsMyType ='abc'
  //   whatIsMyType=123
  //   1-1 define type:
  //   let whatIsMyType: string = 'abc'
  //   let whatIsMyType: number[] = 'abc'
  //   let whatIsMyType: boolean = 'abc'
  //   let whatIsMyType:any
  //   1-2 object type:
  //   interface User{
  //     name:string
  //     age:number
  //     email:string
  //   }
  //   const user1:User={
  //   }
  //   1-3 function type:
  //   const IamFunction:(arg:number)=>string
  //   function IamFunction(arg:string):number{
  //   }
  // function IamFunction(user:{name:string,age:number}):number{
  // }
}

function customType() {
  // 1.custom type: Type alias
  // type User={
  //     name:string,
  //     age:number
  // }
  // function Fn(user:User){
  // }
  //2.Unions
  //   type MyBool = true | false;
  //   const bol:MyBool=false
  //   type WindowStates = "open" | "closed" | "minimized";
  //   const myWindow:WindowStates='closed'
  // 3.Generics: Type with variables thats can apply in many place
  // Q:how to create a function type that means : return the same type of argument?
  //   function identity(arg: number): number {
  //     return arg;
  //   }
  //   function identity(arg: any): any {
  //     return arg;
  //   }
  //   function identity<Type>(arg: Type): Type {
  //     return arg
  //   }
  // two way to use:
  // tell it
  //   identity<string>('1234')
  // infer
  // const  res = identity('abc')
  // other use:
  // type MyType<Var>={
  //     name:Var,
  //     age:number
  // }
  // const user1:MyType<number>={
  //     name:1223,
  //     age:1234
  // }
  //   const stringArr:Array<string>=['fff','fff']
  //   type MyStrArr=Array<string>
  // 4.Type Assertions
  //   const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
  // only for more specific type
  //   const str= 'asf' as number
  // my last move!:
  // const str= ('asf' as any) as number
}

export default basic
