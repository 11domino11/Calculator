let sumOneArray =[];
let sumTwoArray =[];
let operator;
let sumOneNum;
let sumTwoNum;
let finalNum;
let equalLastHit;

const displayPic = document.querySelector('.Display');
const displayNums = document.createElement('p');
displayNums.textContent = '0';
displayPic.appendChild(displayNums);

function clickedFunction(num){
    if(num <= 10){
        if (operator == null){
            sumOneArray.push(num);
            sumOneNum = Number(sumOneArray.join(''));
            parseInt(sumOneNum);
            displayNums.textContent = (sumOneNum);
        }else{
            sumTwoArray.push(num);
            sumTwoNum = Number(sumTwoArray.join(''));
            parseInt(sumTwoNum);
            displayNums.textContent = (sumTwoNum);
        }
    }if(num == 13){
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
    }else if(num ==16){
        resetValue();
    }else if(num ==17){
        clear();
    }
    equalLastHit = false;
}

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
function resetValue(){
    sumOneArray = [];
    sumOneNum = 0;
    sumTwoArray = [];
    sumTwoNum = 0;
    operator = null;
    console.log('values reset');
    if(equalLastHit == true){
        sumOneArray = Array.from(String(finalNum));
        sumOneNum = finalNum;
    }
    equalLastHit = false;
}
function clear(){
    if(sumTwoArray == []){
        sumOneArray =[];
    }else sumTwoArray =[];
    
    displayNums.textContent = '0';
    equalLastHit = false;
}