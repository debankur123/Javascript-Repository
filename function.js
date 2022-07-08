// This is a step by step tutorial in how Javascript functions works
function login(username,password){ // the login function takes two parameters named 'username' and 'password' 
    console.log(`password is, ${username} ${password}`);
}
login('user-1',1234); // Here the function call is done with parameters 
login('user-2',798238);
// function can be of with parameters or without parameteres

//  Write a function which converts upper to lower and then lower to upper
function upper(str){
    return str.toLowerCase();
}
function lower(str){
    return str.toUpperCase();
}
let result = upper('dEbAnKUr');
let answer = lower('dEbAnKUr');
console.log(result);
console.log(answer);

// function to calculate 'area'
function calculateArea(height, width) { 
    height = height === undefined ? 1 : height; // using a turnary operator
    let area = height*width;
    return area;
}
const newArea = calculateArea(20,10);// here the width is set to a default value. If value is not specified in the function call it will take the default value.
console.log(newArea);

// scope of variables
const fileName = 'xyz.csv';
function downlaod(){
    console.log(fileName);
}
downlaod();
//------------------------------------------------------------------------------------

// Function declaration and explanation
// In javascript we can use the function by using a variable name

const fun = function(){
    console.log('Logged In');
};
fun();

//------------------------------------------------------------------------------------
// Callbacks in Javascript
function formatText(text,Callbacks){
    return typeof Callbacks === 'function'? Callbacks(text): text.toUpperCase();
};
const ans1 = formatText('debankur',function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
});
console.log(ans1);

// Another example of 'callbacks' is given below:
function isOdd(number){
    return (number % 2 != 0)
}
function filter(numbers,fn){
    let result = [];
    for(let i = 0; i < numbers.length; i++){
        if(fn(i)==true){ // returns a boolean result
            result.push(i);
        }
    }
    return result;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers,isOdd));

