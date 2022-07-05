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
function calculateArea(height, width=15) { 
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

