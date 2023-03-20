


document.getElementById("btn-case-plus").addEventListener("click",function(){
    const caseId = "case-number-field";
    const caseNumber = updateCaseNumber(true,caseId);
    updateCasePrice(caseNumber,"casePriceValue");

    const currentPhoneTotal = getTextElementValueById("casePriceValue");

    totalPrices();

})



document.getElementById("btn-case-minus").addEventListener("click",function(){
   const caseId = "case-number-field";
   const caseNumber = updateCaseNumber(false,caseId);
   updateCasePrice(caseNumber,"casePriceValue");

   const currentPhoneTotal = getTextElementValueById("casePriceValue");

   totalPrices();

});