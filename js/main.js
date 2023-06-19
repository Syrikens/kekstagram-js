let Randomizes = function (min, max) {
        if (max <= min) {
        alert("Значение max, должно привышать значение min")
    } else {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    alert(rand)
}
}

randomizerFunc(20, 25)

let checksTheLength = function (checkОbject, maxObjectLength){
    numberOfChars = checkОbject.length
    if (numberOfChars <= maxObjectLength) {
        alert ("true")
    }
        else {
            alert ("false")       
        }
    }
    
 checksTheLength("Привет", 7)