let sumOneArray =[];
let sumTwoArray =[];
let operator;
let sumOneNum = 0;
let sumTwoNum = 0;
let finalNum = 0;
let equalLastHit;
let firstPress = true;

//Sets up the display that shows numbers on screen.
const displayPic = document.querySelector('.Display');
const displayNums = document.createElement('p');
displayNums.textContent = '0';
displayPic.appendChild(displayNums);

//if any number keys are pressed
function clickedFunction(num){
    if(num <= 9){
        //if an operator hasn't been selected but other numbers already have
        if (operator == null && firstPress == false){
            ConvertSumOneToNum(num);
        }
        //if this is the first number selected in the first numerical value 
        //So you can start a new problem after hitting equals without reset
        if (operator == null && firstPress == true){
            sumOneArray = [];
            ConvertSumOneToNum(num);
            firstPress = false;
        //if an operator has been selected then change the 2nd numerical value
        }else if(operator !=null){
            firstPress = false;
            ConverSumTwoToNum(num);
        }
    }
    //controls decimal point
    if(num == 10){
        //if the 2nd numerical value is empty, insert decimal into 1st numerical value
        if(sumTwoNum == 0){
            firstPress = false;
            sumOneArray.push('.');
            sumOneNum = Number(sumOneArray.join(''));
            parseInt(sumOneNum);
            displayNums.textContent = (sumOneNum);
        //if the 2nd numerical value isn't empty then insert the decimal there
        }else if(sumTwoNum != 0){
            firstPress = false;
            sumTwoArray.push('.');
            sumTwoNum = Number(sumTwoArray.join(''));
            parseInt(sumTwoNum);
            displayNums.textContent = (sumTwoNum);
        }   
    }
    //checks operator signs and inserts them into the equation
    if(num == 13){
        operator = '+';
        sumOneNum = Number(sumOneArray.join(''));
        parseInt(sumOneNum);
        displayNums.textContent =(sumOneNum);
    }else if(num == 11){
        operator = '-';
        sumOneNum = Number(sumOneArray.join(''));
        parseInt(sumOneNum);
        displayNums.textContent =(sumOneNum);
    }else if(num == 12){
        operator = 'x';
        sumOneNum = Number(sumOneArray.join(''));
        parseInt(sumOneNum);
        displayNums.textContent =(sumOneNum);
    }else if(num == 15){
        operator ='/';
        sumOneNum = Number(sumOneArray.join(''));
        parseInt(sumOneNum);
        displayNums.textContent =(sumOneNum);
    }else if(num ==14){
        sumTwoNum = Number(sumTwoArray.join(''));
        parseInt(sumTwoNum);
        equalSign(sumOneNum,sumTwoNum);
    //adjusts what to do when 'CE' is hit
    }else if(num ==16){
        displayNums.textContent = '0';
        resetValue();
    // Button for 'C'
    }else if(num ==17){
        clear();
    }

    equalLastHit = false;
}
//what happens when '=' is hit
function equalSign(sumOneNum,sumTwoNum){
    displayNums.textContent =(sumTwoNum);
    if(operator == '+'){
        finalNum = (sumOneNum+sumTwoNum);
        displayNums.textContent =(sumOneNum +' + ' +sumTwoNum +' = '+finalNum);
    }else if(operator == '-'){
        finalNum = sumOneNum - sumTwoNum;
        displayNums.textContent =(sumOneNum +' - ' +sumTwoNum +' = '+finalNum);
    }else if(operator == '/'){
        finalNum = sumOneNum / sumTwoNum;
        displayNums.textContent =(sumOneNum +' / ' +sumTwoNum +' = '+finalNum);
    }else if(operator == 'x'){
        finalNum = sumOneNum * sumTwoNum;
        displayNums.textContent =(sumOneNum +' x ' +sumTwoNum +' = '+finalNum);
    }
    equalLastHit = true;
    resetValue();
}
//adding num pressed to array, joins array and converts to a number to be displayed
function ConvertSumOneToNum(num){
    sumOneArray.push(num);
    sumOneNum = Number(sumOneArray.join(''));
    parseInt(sumOneNum);
    displayNums.textContent = (sumOneNum);
}
//adding num pressed to array, joins array and converts to a number to be displayed
function ConverSumTwoToNum(num){
    sumTwoArray.push(num);
    sumTwoNum = Number(sumTwoArray.join(''));
    parseInt(sumTwoNum);
    displayNums.textContent = (sumTwoNum);
}
//reset everything to initial values for 'CE' button and '='
function resetValue(){
    firstPress = true;
    sumOneArray = [];
    sumOneNum = 0;
    sumTwoArray = [];
    sumTwoNum = 0;
    operator = null;
    console.log('values reset');
    //stores the result of last = in case the next equation works off of it
    if(equalLastHit == true){
        sumOneArray = Array.from(String(finalNum));
        sumOneNum = finalNum;
    }
    equalLastHit = false;
}
//clears the current numerical value
function clear(){
    if(sumTwoArray == []){
        sumOneArray =[];
    }else sumTwoArray =[];
    
    displayNums.textContent = '0';
    equalLastHit = false;
}