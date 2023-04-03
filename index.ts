// typescript features  : prdictable code 
// reduce errors coz errors occurs at develpoment time not run time or after running project
// npm install typescript -g 
// will install tsc => type script compiler 
// so when u write tsc index.ts will translate type script to js code 
// tsc indec.ts --watch


import { User } from "./User";

(function () {
let userName:string = "ahmed"
let userAge:number = 20;
let onSale:boolean = true;
let x:undefined = undefined;
let y:null = null;
let user:object = {
    name: "ahmed" , age:30
}

// comma or semicolon are ok ,;
// interface User {
//     name:string,
//     age:number,
//     gender:string;
//     id?:number,
//     sayhello?(name:string):string,

// }

// generics 
// variable to change data type 

function getNames<T>(names:T[]):T[]{
    return  names
}
// function getNumbers(numbers:number[]):number[] {
//         return numbers
// }
let names = getNames<string>(["nadia" , "ali", "mostafa"])
let numbers = getNames<number>([1,2,3])
let booleans = getNames<boolean>([true , false])
// let numbers = getNumbers([1,2,3])
    let users:User[] = [
        {name: "ahmed", age : 22 , gender: "male", sayhello(){
                return "sss"
        }},
        {name: "mohame", age : 26 , gender: "male"},
        {name: "hussein", age : 40 , gender: "male"},
        {name: "mostafa", age : 30 , gender: "male"},
    ]

    // any => super global data type
    // api response or user enter data at input 
    let z:any= "ss"

    // tuple => double or multiple data type
    let productInfo:[string,number, string] = ["toshiba",11,"dd"]
    // union => or |
    let test:string|number = "ss"
    //void => no return


    let friends:string[]=["aya" , "asmaa" , "shimaa"]














function sayWelcome(name:string):void{
   console.log(["ahmes" , name])
    
}

  alert(sayWelcome("ali"))  


}) ()