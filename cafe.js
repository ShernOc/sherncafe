
// index.html

// Goal to be able to change the text of all the buttons to Ordered once the button is clicked, 
// Once the button is clicked with the right amount it altered to ordered. 

    let drinkType ='';  
    let pastryType ='';

    function driOrder(drinkType){
        const orderBtn=document.querySelector('#drink1');
        const orderBtn2=document.querySelector('#drink2');
        
        if (orderBtn.innerText === 'Order Now'){
            orderBtn.innerText = 'Ordered'
        }else{
            orderBtn.innerText = 'Order Now'
        }
        
    }

   function pastryOrder(pastryType){
        const pastries=document.querySelector('#pastry1');
        
        if (pastries.innerText === 'Order Now'){
            pastries.innerText = 'Ordered'
        }else{
            pastries.innerText = 'Order Now'
        }
    }


// Order.html: 
// Make Payments : 
    function makeOrder(){
        const orderTotal = document.querySelector('.js-input-orders');

        let orders = Number(orderTotal.value);
        console.log(orders)
        
        //Order Calculations
        if(orders >=200){
            orders = orders + (orders*0.1)
        }

    // total input 
    document.querySelector('.js-total-cost').innerHTML = `$ ${orders}`;
}

// input event 
function handleKeydown(event){
    if(event.key ==='Enter'){
        makeOrder();
    }
}




