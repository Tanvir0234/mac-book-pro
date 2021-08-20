

//--------------------------------------$180 related part-------------------------------
document.getElementById('memory-16gb').addEventListener('click',function(){
    

    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseInt(memoryCost.innerText) ;
    memoryCost.innerText = 180;
    calc();
/*
    const totalPrice = document.getElementById('total-price');
    const totalPriceAmount = parseInt(totalPrice.innerText);

    totalPrice.innerText = totalPriceAmount + 180 ;
*/
})
document.getElementById('1tb-ssd').addEventListener('click',function(){
    const tbCost = document.getElementById('storage-cost');
    tbCost.innerText = parseInt(tbCost.innerText) ;
    tbCost.innerText = 180;
    calc();
    

})
//-------------end -180--part----------------------------

//-----------------set 0 value -----------------------
document.getElementById('memory-8gb').addEventListener('click',function(){
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = parseInt(memoryCost.innerText) ;
    memoryCost.innerText = 0; 
    calc();
})

document.getElementById('256gb-ssd').addEventListener('click',function(){
    const lowGbCost = document.getElementById('storage-cost');
    lowGbCost.innerText = parseInt(lowGbCost.innerText) ;
    lowGbCost.innerText = 0;
    calc();
})

//------------------set 100 -------
document.getElementById('512gb-ssd').addEventListener('click',function(){
    const midiumGbCost = document.getElementById('storage-cost');
    midiumGbCost.innerText = parseInt(midiumGbCost.innerText) ;
    midiumGbCost.innerText = 100;
    calc();
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

