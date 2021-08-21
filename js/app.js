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
    //document.getElementById('promo-input').value = 'stevekaku';
    if(document.getElementById('promo-input').value == 'stevekaku'){
        const finalTotal = document.getElementById('final-total');
        finalTotal.innerText = parseInt(finalTotal.innerText);
        finalTotal.innerText = calc() / 20;
    }
    
    document.getElementById('promo-input').value = '';
})

//---------Cost releted function---------
function cost(item,price){
    const productCost = document.getElementById(item+'-cost');
    productCost.innerText = parseInt(productCost.innerText) ;
    let  lowCost = 0;
    productCost.innerText = lowCost + price; 
    calc();
}

//------------------------delivery function----------------
function deliveryProduct(price){
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = parseInt(deliveryCost.innerText) ;
    let freeCost = 0 ;
    deliveryCost.innerText = freeCost + price;
    calc();
    
}

//----------------------- Calculation-----------
function calc(){
const bestprice =parseInt(document.getElementById('best-price').innerText);
const extraMemoryCost =parseInt(document.getElementById('memory-cost').innerText);
const extraStorageCost =parseInt(document.getElementById('storage-cost').innerText);
const deliveryCost =parseInt(document.getElementById('delivery-cost').innerText);
let totalPrice =document.getElementById('total-price');
return totalPrice.innerText= bestprice+extraMemoryCost+extraStorageCost+deliveryCost;
}
