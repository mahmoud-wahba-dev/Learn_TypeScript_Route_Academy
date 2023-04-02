// typescript features  : prdictable code 
// reduce errors coz errors occurs at develpoment time not run time or after running project
// npm install typescript -g 
// will install tsc => type script compiler 
// so when u write tsc index.ts will translate type script to js code 
// tsc indec.ts --watch





(function () {
let userName:string = "ahmed"
let userAge:number = 20;
let onSale:boolean = true;
let x:undefined = undefined;
let y:null = null;
let user:object = {
    name: "ahmed" , age:30
}
let friends:string[]=["aya" , "asmaa" , "shimaa"]

function sayWelcome(name:string):string[]{
   return ["ahmes" , name];
    
}

  alert(sayWelcome("ali"))  


}) ()