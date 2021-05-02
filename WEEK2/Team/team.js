// Function for step 1
function readInput(){
    let userInput = document.getElementById("userInput").value;
    let result = document.getElementById("result");

    result.innerHTML = userInput;
}

// Function for step 2
/* Function gets user input, make sure it is valid number, sums all 
numbers up to the number provided */
function sumNumbers(numberInput){
    let numberVerified = parseInt(numberInput);

    if(!isNaN(numberVerified)){
        let sum = 0;
        for(let i = 1; i <= numberInput; i++){
            let result = document.getElementById("result");
            sum += i;
            result.innerHTML = sum;  
        }
    }
    else{
        alert("You must enter a number.");
    }
}


// Function for step 3
/* Function takes numbers from each input, adds them together, and outputs result */

function getNumbers()
{
let numberInput1 = parseInt(document.getElementById("numberInput1").value);
let numberInput2 = parseInt(document.getElementById("numberInput2").value);
if(!isNaN(numberInput1) || !isNaN(numberInput2)){
   
    
    return[numberInput1,numberInput2];
    
}
else{
    alert("Please enter a number!");
}


}



function multiply (array) {
    var sum=1;
    for (var i=0; i<array.length; i++) {
        sum = sum * array[i];
    } 
    return sum;
}

const sub = function(array) {
    var sum= array[0]-array[1];
    return sum;
  };

const sum = (array) => array[0]+array[1];