//--------------------------------------$180 related part-------------------------------
document.getElementById('memory-16gb').addEventListener('click',function(){

    cost180('memory');

})
document.getElementById('1tb-ssd').addEventListener('click',function(){

    cost180('storage');

})
//-----------------$0 related part -----------------------
document.getElementById('memory-8gb').addEventListener('click',function(){

     cost0('memory');

})

document.getElementById('256gb-ssd').addEventListener('click',function(){

    cost0('storage');

})

//------------------$100 related part-------
document.getElementById('512gb-ssd').addEventListener('click',function(){
    const midiumGbCost = document.getElementById('storage-cost');
    midiumGbCost.innerText = parseInt(midiumGbCost.innerText) ;
    midiumGbCost.innerText = 100;
    calc();
})
//---------------------delivery part------------------------------
document.getElementById('pay-delivery').addEventListener('click',function(){

    deliveryProduct(20);

})
document.getElementById('free-delivery').addEventListener('click',function(){

    deliveryProduct(0);
    
})
//----------------------- Calculation-----------
function calc(){
const bestprice =parseInt(document.getElementById('best-price').innerText);
const extraMemoryCost =parseInt(document.getElementById('memory-cost').innerText);
const extraStorageCost =parseInt(document.getElementById('storage-cost').innerText);
const deliveryCost =parseInt(document.getElementById('delivery-cost').innerText);
let totalPrice =document.getElementById('total-price');
return totalPrice.innerText= bestprice+extraMemoryCost+extraStorageCost+deliveryCost;
}

//------------------------delivery function----------------
function deliveryProduct(price){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = parseInt(deliveryCost.innerText) ;
    let freeCost = 0 ;
    deliveryCost.innerText = freeCost + price;
    calc();
    
}

//----------similar $180  function------------
function cost180(item){
    const itemCost = document.getElementById(item +'-cost');
    itemCost.innerText = parseInt(itemCost.innerText) ;
    itemCost.innerText = 180;
    calc();
}

//---------similar $0 function---------
function cost0(item){
    const productCost = document.getElementById(item+'-cost');
    productCost.innerText = parseInt(productCost.innerText) ;
    productCost.innerText = 0; 
    calc();
}
