/*
    We can modify arrays elements by just assigning the new value to it with the help of indexing
*/
var myArr = [10,76,66];
myArr[2] = 8;
console.log(myArr); 

/*
    Access Multidimensional Arrays
*/
var arr = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]];
var myData = arr[2][1];
console.log(myData);

/*
    Manipulate arrays with Push() and Pop() functions
*/
var newArr = [["dog",2],12,22]
newArr.push(["Lion",36],76)
console.log(newArr);
newArr.pop();
console.log(newArr);   