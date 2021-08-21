//------------------$180 related part---------------------------
document.getElementById('memory-16gb').addEventListener('click',function(){

    cost('memory',180);

})
document.getElementById('1tb-ssd').addEventListener('click',function(){

    cost('storage',180);

})
//-----------------$0 related part -----------------------
document.getElementById('memory-8gb').addEventListener('click',function(){

     cost('memory',0);

})

document.getElementById('256gb-ssd').addEventListener('click',function(){

    cost('storage',0);

})

//------------------$100 related part-------
document.getElementById('512gb-ssd').addEventListener('click',function(){
   
   cost('storage',100)
})
//---------------------delivery part------------------------------
document.getElementById('pay-delivery').addEventListener('click',function(){

    deliveryProduct(20);

})
document.getElementById('free-delivery').addEventListener('click',function(){

    deliveryProduct(0);
    
})
//-------------------footer Total part---------------------------
document.getElementById('promo-btn').addEventListener('click',function(){
    const promoInput = document.getElementById('promo-input').value;
    
    if(document.getElementById('promo-input').value == 'stevekaku'){
        const finalTotal = document.getElementById('final-total');
        finalTotal.innerText = parseFloat(finalTotal.innerText);
        finalTotal.innerText = parseFloat(calc()*0.8);
        
    }
    
    document.getElementById('promo-input').value = '';
})

//---------Cost releted function---------
function cost(item,price){
    const productCost = document.getElementById(item+'-cost');
    productCost.innerText = parseFloat(productCost.innerText) ;
    let  lowCost = 0;
    productCost.innerText =parseFloat(lowCost + price) ; 
    calc();
    finalTotal();
}

//------------------------delivery function----------------
function deliveryProduct(price){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = parseFloat(deliveryCost.innerText) ;
    let freeCost = 0 ;
    deliveryCost.innerText =parseFloat(freeCost + price);
    calc();
    finalTotal();
}

//----------------------- Calculation-----------
function calc(){
const bestprice =parseFloat(document.getElementById('best-price').innerText);
const extraMemoryCost =parseFloat(document.getElementById('memory-cost').innerText);
const extraStorageCost =parseFloat(document.getElementById('storage-cost').innerText);
const deliveryCost =parseFloat(document.getElementById('delivery-cost').innerText);
let totalPrice =document.getElementById('total-price');
return totalPrice.innerText=parseFloat(bestprice+extraMemoryCost+extraStorageCost+deliveryCost) ;
}
//-----------------------footer Final Calculation-----------
function finalTotal(){
    const finalTotal = document.getElementById('final-total');
    finalTotal.innerText = parseFloat(finalTotal.innerText);
    return finalTotal.innerText = parseFloat(calc()) ;
}