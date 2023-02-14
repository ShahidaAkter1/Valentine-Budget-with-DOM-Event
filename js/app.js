//get input type value..quantity
function getInputQuantity(getQuantity){
    const Quantity =  document.getElementById(getQuantity);
    const inputQuantityString = Quantity.value ; 
    const inputQuantity=parseFloat(inputQuantityString);
    Quantity.value =''; 
    return inputQuantity;
}

function elementTotalField(elementField){
    const element= document.getElementById(elementField);
    const elementTotalString =element.innerText;
    const elementTotal=parseFloat(elementTotalString);
    return elementTotal;
}
function setElementValueById(id,newValue){
    const previousAmount= document.getElementById(id);
    previousAmount.innerText=newValue;
    // document.getElementById(id).innerText=newValue; //or...uporer 2 line avabe lekha jay
 }

 //for chocolate
document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    //get kikat quantity input
    const kitkatQuantity=getInputQuantity('kitkat-quantity');

    //step-4
//    const chocolateAmount = elementTotalField('chocolate');
   const chocolateAmountTotal = kitkatQuantity * 200;
//    console.log(chocolateAmountTotal);
    setElementValueById('chocolate',chocolateAmountTotal);
  total();
})
//for rose
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    //get rose quantity input
    const roseQuantity=getInputQuantity('rose-quantity');


//    const roseAmount = elementTotalField('rose');
   const roseAmountTotal = roseQuantity * 100;
//    console.log(roseAmountTotal);
    setElementValueById('rose',roseAmountTotal);
total();
})
//for diary
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    //get diary quantity input
    const diaryQuantity=getInputQuantity('diary-quantity');

    //step-4
//    const diaryAmount = elementTotalField('diary');
   const diaryAmountTotal = diaryQuantity * 100;
//    console.log(diaryAmountTotal);
    setElementValueById('diary',diaryAmountTotal);
total();
})

function total(){
    const chocolateAmount = elementTotalField('chocolate');
   const roseAmount = elementTotalField('rose');
   const diaryAmount = elementTotalField('diary');
    const totalSum= chocolateAmount + roseAmount + diaryAmount;
    // console.log(totalSum);
    // document.getElementById('total').innerText=totalSum;//or nicher ta
    setElementValueById('total',totalSum);
}

//promoCode
document.getElementById('apply-btn').addEventListener('click',function(){
    const promoInput=getInputQuantity('promo-code');
    // console.log(promoInput);
  if(promoInput==101){
    const promoTotal= elementTotalField('total');
    const sum=promoTotal -(promoTotal * 0.1);//0.1 mane 10% discount
    setElementValueById('all-total',sum);
  }
  else{
    const promoTotal= elementTotalField('total');
    setElementValueById('all-total',promoTotal);

  }
   
})