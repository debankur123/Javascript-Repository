var outerWear = "T-Shirt";  // global variable
function myOutfit(){
    var outerWear = "Sweater";  // local Variable
    return outerWear;
}
console.log(myOutfit()); // Sweater
console.log(outerWear);  // T-Shirt