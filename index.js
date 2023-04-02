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
    var friends = ["aya", "asmaa", "shimaa"];
    function sayWelcome(name) {
        return ["ahmes", name];
    }
    alert(sayWelcome("ali"));
})();
