
// function updatePhoneNumber(isIncrease){
//     const phoneNumberField = document.getElementById("phone-number-field");
//     const phoneNumberString = phoneNumberField.value;
//     const previousPhoneNumber = parseInt(phoneNumberString);
//     let newPhoneNumber;
//     if(isIncrease){
//         newPhoneNumber = previousPhoneNumber + 1;
//     }
//     else{
//         newPhoneNumber = previousPhoneNumber - 1;
//     }
//     phoneNumberField.value = newPhoneNumber;
//     return newPhoneNumber;
// }

// function updatePhonePrice(phoneNumber){
//     console.log(phoneNumber);
//     const phonePriceFiled = document.getElementById("phonePriceValue");
//     const phonePrice = phoneNumber * 1219;
//     phonePriceFiled.innerText = phonePrice;
    
// }

document.getElementById("btn-phone-plus").addEventListener("click",function(){
    const phoneNumber = updateCaseNumber(true,"phone-number-field");
    updateCasePrice(phoneNumber,"phonePriceValue");

    getTextElementValueById("phonePriceValue");

    totalPrices();

})

document.getElementById("btn-phone-minus").addEventListener("click",function(){
   const phoneNumber = updateCaseNumber(false,"phone-number-field");
   updateCasePrice(phoneNumber,"phonePriceValue");

   getTextElementValueById("phonePriceValue");

   totalPrices();

});