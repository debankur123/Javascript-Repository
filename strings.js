function wordBlanks(myNoun,myAdjective,myVerb,myAdverb){
    var result = "";
    result += "The " + myAdjective + " "+myNoun+" "+myVerb+" to the store " + myAdverb;
    return result;
}
console.log(wordBlanks("Dog","big","ran","quickly"));
console.log(wordBlanks("bike",'slow','flew','slowly'));

const myVar = "mathematics";
console.log(myVar.charAt(0)); // m
console.log(myVar.indexOf("ati")); // 6
console.log(myVar.lastIndexOf("ath"));
console.log(myVar.slice(5,7)); // excludes the last character.
console.log(myVar.toUpperCase());
console.log(myVar.split("e"));
console.log("John,Doe,Dave".split(","));
const myVar2 = "geeks for geeks";
console.log(myVar2.lastIndexOf("geeks")); // 10

const myNum = 42;
const myFloatNum = 43.0;
const myStr = "42";
console.log(Number(myStr) === myNum);
console.log(Number("Dave")); // returns NaN
console.log(Number(true));
console.log(Number(false));
console.log(Number.isInteger(myNum)); // returns true or false
console.log(Number.parseFloat(myNum));
console.log(Number.parseInt(myFloatNum));
console.log(Number.parseFloat("454.7634abcs").toFixed(2).toString());
// tofixed() method returns a string
