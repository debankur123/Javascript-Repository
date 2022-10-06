function trueorFalse(isitTrue){
    if(isitTrue){
        return "Yes , It is True";
    }
    return "No , It is False";
}
console.log(trueorFalse(true));

function testSize(num){
    if(num<5){
        return "tiny"
    }
    else if(num<10){
        return "Small"
    }
    else if(num<15){
        return "Medium"
    }
    else if(num<20){
        return "Large"
    }
    else{
        return "Huge"
    }
}
console.log(testSize(5))
