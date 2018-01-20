let str = "0123";
let obj = {number: 1};
let arr = Array.from(str, function(value){ //Array.from은 ["0","1",""2,"3"] 이렇게 만들어줌.
    return parseInt(value) + this.number; // ["1",""2,"3","4"]
}, obj);

console.log(arr);
