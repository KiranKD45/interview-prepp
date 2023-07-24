function addition (x){
    return function values(y){
        return x+y;
    }  
}
var add = addition(10)(35);
console.log(add);