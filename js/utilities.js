function updateCaseNumber(isIncrease,elementId){
    const caseNumberField = document.getElementById(elementId);
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if(isIncrease){
        newCaseNumber = previousCaseNumber + 1;
    }
    else{
        newCaseNumber = previousCaseNumber - 1;
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function updateCasePrice(caseNumber,elementId){
    const casePriceFiled = document.getElementById(elementId);

    if(elementId === "casePriceValue"){   
        const casePrice = caseNumber * 59;
        casePriceFiled.innerText = casePrice;
              
    }
    else if(elementId === "phonePriceValue"){
        const casePrice = caseNumber * 1219;
        casePriceFiled.innerText = casePrice;
    }
    
    
}

function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function totalPricesId(elementId){
    const currentPrice = document.getElementById(elementId);
    const currentTotalPriceString = currentPrice.innerText;
    const currentPhoneTotalPrice = parseInt(currentTotalPriceString);
    return currentPhoneTotalPrice;

}

function setElementById(elementId,value){
    const subtotalElement = document.getElementById(elementId);
    subtotalElement.innerText = value;
    console.log("amari");
}


function totalPrices(){
    const currentPrice = document.getElementById("totalPrice");
    
    const currentPhoneTotalPrice = totalPricesId("phonePriceValue");
    const currentCaseTotalPrice = totalPricesId("casePriceValue");

    const totalPrice = currentPhoneTotalPrice + currentCaseTotalPrice;
    currentPrice.innerText = totalPrice;

    const taxAmountString = (totalPrice * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementById("tax", taxAmount);

    const finalAmount = totalPrice + taxAmount;
    setElementById("finalTotal", finalAmount);

}


