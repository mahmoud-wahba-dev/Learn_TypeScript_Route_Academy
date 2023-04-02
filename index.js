// typescript features  : prdictable code 
// reduce errors coz errors occurs at develpoment time not run time or after running project
// npm install typescript -g 
// will install tsc => type script compiler 
// so when u write tsc index.ts will translate type script to js code 
// tsc indec.ts --watch
(function () {
    var userName = "ahmed";
    var userAge = 20;
    var onSale = true;
    var x = undefined;
    var y = null;
    var user = {
        name: "ahmed", age: 30
    };
    var users = [
        { name: "ahmed", age: 22, gende: "male" },
        { name: "mohame", age: 26, gende: "male" },
        { name: "hussein", age: 40, gende: "male" },
        { name: "mostafa", age: 30, gende: "male" },
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
