

//--------------------------------------$180 related part-------------------------------
document.getElementById('memory-16gb').addEventListener('click',function(){
    
/*
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseInt(memoryCost.innerText) ;
    memoryCost.innerText = 180;
    calc();
*/
cost180('memory');
})
document.getElementById('1tb-ssd').addEventListener('click',function(){
    /*
    const tbCost = document.getElementById('storage-cost');
    tbCost.innerText = parseInt(tbCost.innerText) ;
    tbCost.innerText = 180;
    calc();
    */
    cost180('storage');

})
//-------------end -180--part----------------------------

//-----------------set 0 value -----------------------
document.getElementById('memory-8gb').addEventListener('click',function(){
    /*
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseInt(memoryCost.innerText) ;
    memoryCost.innerText = 0; 
    calc();
    */
    cost0('memory');
})

document.getElementById('256gb-ssd').addEventListener('click',function(){
    /*
    const lowGbCost = document.getElementById('storage-cost');
    lowGbCost.innerText = parseInt(lowGbCost.innerText) ;
    lowGbCost.innerText = 0;
    calc();
    */
    cost0('storage');
})

//------------------set 100 -------
document.getElementById('512gb-ssd').addEventListener('click',function(){
    const midiumGbCost = document.getElementById('storage-cost');
    midiumGbCost.innerText = parseInt(midiumGbCost.innerText) ;
    midiumGbCost.innerText = 100;
    calc();
})
//---------------------delivery part------------------------------
document.getElementById('pay-delivery').addEventListener('click',function(){
    /*
    const deliveryPayCost = document.getElementById('delivery-cost');
    deliveryPayCost.innerText = parseInt(deliveryPayCost.innerText) ;
    */
    
    deliveryProduct(20);
    
    
   
    
})
document.getElementById('free-delivery').addEventListener('click',function(){
    /*
    const deliveryFreeCost = document.getElementById('delivery-cost');
    deliveryFreeCost.innerText = parseInt(deliveryFreeCost.innerText) ;
    deliveryFreeCost.innerText = 0;
    */
    deliveryProduct(0);
})



// Calculation-----------
function calc(){
const bestprice =parseInt(document.getElementById('best-price').innerText);
const extraMemoryCost =parseInt(document.getElementById('memory-cost').innerText);
const extraStorageCost =parseInt(document.getElementById('storage-cost').innerText);
const deliveryCost =parseInt(document.getElementById('delivery-cost').innerText);
let totalPrice =document.getElementById('total-price');
return totalPrice.innerText= bestprice+extraMemoryCost+extraStorageCost+deliveryCost;
}

//delivery
function deliveryProduct(price){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = parseInt(deliveryCost.innerText) ;
    let prePay = 0 ;
    deliveryCost.innerText = prePay + price;
    calc();
    
}
/*
function product(getProduct,price,isIncrease){
    const phoneNumber =document.getElementById(getProduct + '-number');
    let getPhoneNumber = phoneNumber.value;
    if(isIncrease==true){
        getPhoneNumber = parseInt(phoneNumber.value) + 1;
        
    }
    else if(phoneNumber.value>0){
        getPhoneNumber = parseInt(phoneNumber.value) - 1;
    }
    //update total
    phoneNumber.value = getPhoneNumber;
    const phoneTotal = document.getElementById(getProduct + '-total');
     phoneTotal.innerText = getPhoneNumber * price;


*/
//----------similar $180------------
function cost180(item){
    const itemCost = document.getElementById(item +'-cost');
    itemCost.innerText = parseInt(itemCost.innerText) ;
    itemCost.innerText = 180;
    calc();
}

//---------similar $0---------
function cost0(item){
    const memoryCost = document.getElementById(item+'-cost');
    memoryCost.innerText = parseInt(memoryCost.innerText) ;
    memoryCost.innerText = 0; 
    calc();
}
