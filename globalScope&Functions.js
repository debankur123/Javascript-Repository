/*
    Global Scope of a variable means that it can be used everywhere in that file .
 */
var myGlobal = 10;
function fun1(){
    oopsGlobal = 5; 
}
/*
    if we do not use var keyword JS automatically consider that the variable is global scoped . and if we provide var keyword the variable will be scoped locally in that code block where it is called.
*/

function fun2(){
    var output = "";
    if(typeof myGlobal!="undefined"){
        output += "myGlobal is :" + " " +oopsGlobal + "\n";
    }
    if(typeof oopsGlobal!="undefined"){
        output += "oopsGlobal is :" + " " +oopsGlobal + "\n";
    }
    console.log(output);
}
fun1();
fun2();

/*
    Assignment with a return value
*/
function nextInLine(arr,item){
    arr.push(item);
    return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr,6));
console.log("After: " + JSON.stringify(testArr));