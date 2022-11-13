function getInputValue(inputId){
    const  inputField = document.getElementById(inputId);
    const inputText =  inputField.value;
    const inputAmount = parseFloat(inputText);
     inputField.value = '';
    return inputAmount;
}

function getTotalAmount(inputAmount, totalId){
    const fieldTotal = document.getElementById(totalId);
    const fieldTotalText = fieldTotal.innerText;
    const previousAmount = parseFloat(fieldTotalText);
    const fieldTotalAmount = previousAmount + inputAmount;
    fieldTotal.innerText = fieldTotalAmount;
    console.log(fieldTotalAmount);
}

function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    return previousBalance;
}

function getUpdateBalance(inputAmount, isAd) {
    const totalBalance = document.getElementById('balance-total');
    const previousBalance = getCurrentBalance();
    if(isAd) {
        const totalBalanceAmount = previousBalance + inputAmount;
        totalBalance.innerText = totalBalanceAmount;
    }else{
        const totalBalanceAmount = previousBalance - inputAmount;
        totalBalance.innerText = totalBalanceAmount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const balance = document.getElementById('balance-total');
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        getTotalAmount(depositAmount,'deposit-total');
        getUpdateBalance(depositAmount, true);
    }
    // console.log(depositTotalAmount);
})

document.getElementById('withdraw-button').addEventListener('click', function() {
    const currentBalance = getCurrentBalance();
    const withdrawAmount = getInputValue('withdraw-input');
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
         getTotalAmount(withdrawAmount,'withdraw-total');
         getUpdateBalance(withdrawAmount, false);
    } 
    if(withdrawAmount>currentBalance){
         throw new Error('please enter a valid number');
    }
   
    // console.log(withdrawTotalAmount);
});