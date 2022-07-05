const languages = ['Java','Python','C++']
console.log(languages[2]);
languages.push('Go','Node.js');// appends new element in the end of array
languages.unshift('C#');// Inserts new elements at the start of an array, and returns the new length of the array.
console.log(languages);
languages.shift();// Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
console.log(languages);
console.log(languages.pop()); // Removes the last element from an array and returns it.
// --------------------------------------------------------------------- arrays in Javascript with loops manupulations
let actors = [
    {
        name :'Actor 1',
        payment : 50000
    },
    {
        name :'Actor 2',
        payment : 60000
    },
    {
        name :'Actor 3',
        payment : 70000
    },
    {
        name :'Actor 4',
        payment : 80000
    }

]
for(let i = 0; i <actors.length; i++) {
    actors[i].payment = actors[i].payment+10000;
}
console.log(actors);

// enhanced for loop : for each loops
actors.forEach((actor)=>{
    actor.payment=actor.payment-10000;
})
console.log(actors);

// for of loops
for(let i of actors) {
    i.payment=i.payment+10000;
}
console.log(actors);

// Arrays filter() method
let students = [
    {
        name: 'Student 1',
        marks: 85
    },
    {
        name: 'Student 2',
        marks: 90
    },
    {
        name: 'Student 3',
        marks: 45
    },
    {
        name: 'Student 4',
        marks: 55
    }
]; 
let failed_students = students.filter((Student) => { //this method is to filter values in an array
    if(Student.marks<=55){
        return true;
    }
    return false;
});
console.log(failed_students);

 // another way to filter arrays
let failed = students.filter((Student) =>Student.marks<=55 );
console.log(failed);

// uses of Map function
let users = [
    {
        fname: 'John',
        lname:'Doe'
    },
    {
        fname: 'Martin',
        lname:'Philipp'
    },
    {
        fname: 'James',
        lname:'Doe'
    }
];
let result = users.map((User)=>{
    return {
        fullName : `${User.fname} ${User.lname}`
    };
});
console.log(result);

const movies = [
    {
        name : 'Martian',
        budget : 500000000
    },
    {
        name : 'F.I.R',
        budget : 1200000000
    },
    {
        name : 'Witcher',
        budget : 900000000
    },
    {
        name : 'Hulk',
        budget : 3000000000
    }
];
// let total_budget = 0;
// movies.forEach((movie)=>{
//     total_budget += movie.budget;
// });
// console.log(total_budget);

// Reduce method helps us to reduce the values of an object without declaring a global variable 
let reduced = movies.reduce((acc,movie)=>{
    acc = acc + movie.budget;
    return acc; 
},0)
console.log(reduced);   

// Arrays 'indexof' method is used to find the index of of an array by passing a value. if value is present it will show the index otherwise it will show -1 . If we store this in a variable and make a boolean condition it will return a 'true' value or false value 
const admin = [2,5,1];
const user_admin = {
    name : 'admin-1',
    id: 10
}
console.log(admin.indexOf(user_admin.id)); // returns index value(int form)
const isAdmin = admin.indexOf(user_admin.id)>-1; //  returns boolean value
console.log(isAdmin);

// Arrays include method
console.log(admin.includes(user_admin.id)); // returns boolean value

// Javascript 'find' method in arrays
let newUsers = [
    {
        name: 'user-1',
        id: 1
    },
    {
        name: 'user-2',
        id: 2
    },
    {
        name: 'user-3',
        id: 3
    },
    {
        name: 'user-4',
        id: 4
    }
];
let getUsers = newUsers.find((i)=>{
    if(i.id===2){
        return true;
    }
});
console.log(getUsers);

// Sort method in Javascript
const numbers = [10,7,65,12,3,731,645,7367];
let names = ['w','t','b','n','a'];
names.sort();
console.log(names); // works only for alphabetical sorting
numbers.sort((a,b)=>a-b);
console.log(numbers);   

// splice method 
names.splice(0,1); // take 2 parameters first one is the index and second one how many index value we want to delete
console.log(names); 


// Javascript array methods

