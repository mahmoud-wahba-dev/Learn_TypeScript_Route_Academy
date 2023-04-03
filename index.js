"use strict";
// typescript features  : prdictable code 
// reduce errors coz errors occurs at develpoment time not run time or after running project
// npm install typescript -g 
// will install tsc => type script compiler 
// so when u write tsc index.ts will translate type script to js code 
// tsc indec.ts --watch
exports.__esModule = true;
(function () {
    var userName = "ahmed";
    var userAge = 20;
    var onSale = true;
    var x = undefined;
    var y = null;
    var user = {
        name: "ahmed", age: 30
    };
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
    function getNames(names) {
        return names;
    }
    // function getNumbers(numbers:number[]):number[] {
    //         return numbers
    // }
    var names = getNames(["nadia", "ali", "mostafa"]);
    var numbers = getNames([1, 2, 3]);
    var booleans = getNames([true, false]);
    // let numbers = getNumbers([1,2,3])
    var users = [
        { name: "ahmed", age: 22, gender: "male", sayhello: function () {
                return "sss";
            } },
        { name: "mohame", age: 26, gender: "male" },
        { name: "hussein", age: 40, gender: "male" },
        { name: "mostafa", age: 30, gender: "male" },
    ];
    // any => super global data type
    // api response or user enter data at input 
    var z = "ss";
    // tuple => double or multiple data type
    var productInfo = ["toshiba", 11, "dd"];
    // union => or |
    var test = "ss";
    //void => no return
    var friends = ["aya", "asmaa", "shimaa"];
    function sayWelcome(name) {
        console.log(["ahmes", name]);
    }
    alert(sayWelcome("ali"));
})();
