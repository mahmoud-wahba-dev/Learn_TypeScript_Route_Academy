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

    let users:object[] = [
        {name: "ahmed", age : 22 , gende: "male"},
        {name: "mohame", age : 26 , gende: "male"},
        {name: "hussein", age : 40 , gende: "male"},
        {name: "mostafa", age : 30 , gende: "male"},
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