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

const myVar2 = "geeks for geeks";
console.log(myVar2.lastIndexOf("geeks")); // 10 