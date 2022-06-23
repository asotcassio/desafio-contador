//
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;



function increment(){
    currentNumber = currentNumber + 1;
   //condicional para setar cor a valores possitivos
    if (currentNumber >= 1) {
        currentNumberWrapper.style.color = "blue"
    }else{
        currentNumberWrapper.style.color = "black"
    }


    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    
    //condicional para setar cor a valores negativos
    if (currentNumber <= -1) {
        currentNumberWrapper.style.color = "red"
    }else{
        currentNumberWrapper.style.color = "black"
    }

    currentNumberWrapper.innerHTML = currentNumber;
}


