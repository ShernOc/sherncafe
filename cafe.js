// Goal to be able to change the text of all the buttons to Ordered once the button is clicked, 
// Once the button is clicked with the right amount it altered to ordered. 

// Add the products: object
const drinks = [
    {
    id: 1, drinkType: 'Double Espresso', 
    price: '290'},
     {
    id: 2, drinkType: 'Cappuccino', 
    price: '290'},
     {
    id: 3, drinkType: 'Latte', 
    price: '290'},
     {
    id: 4, drinkType: 'Hazelnut Mocha', 
    price: '300'},
     {
    id: 5, drinkType: 'Single Coffee', 
    price: '250'},
     {
    id: 6, drinkType: 'Iced Coffee', 
    price: '290'},

     {
    id: 7, drinkType: 'Kenyan tea', 
    price: '290'},

     {
    id: 8, drinkType: 'Tangawizi Tea', 
    price: '290'},

     {
    id: 1, drinkType: 'Masala Tea', 
    price: '290'},

     {
    id: 1, drinkType: 'Dawa', 
    price: '300'},

     {
    id: 1, drinkType: 'Chamomile Tea', 
    price: '290'},

     {
    id: 1, drinkType: 'Hot Chocolate', 
    price: '300'},
]
console.log(typeof drinks) // its an object 

const pastries = [
    {
    id: 1, pastryType: 'Butter Croissant', 
    price: '350'},
     {
    id: 2, pastryType: 'Chicken Pie', 
    price: '400'},
     {
    id: 3, pastryType: 'Samosas', 
    price: '250'},
     {
    id: 4, pastryType: 'Burger with Fries', 
    price: '890'},
     {
    id: 5, pastryType: 'Mandazis', 
    price: '200'},
     {
    id: 6, pastryType: 'Eggs and Toast', 
    price: '560'},

    ]

    // Used the DOM  to try to ordered to ordered when the button is clicked 
    // take all the products: // global variables: 
    const double = document.querySelector('#js-double');
    const capo = document.querySelector('#js-capo'); 
    const latte = document.querySelector('#js-latte');
    const haze = document.querySelector('#js-haze');
    const coffee = document.querySelector('#js-coffee');
    const iceCoffee = document.querySelector('#js-iceCoffee');
    
    // the button 
  
    let drinkType ='';  
    let pastryType ='';

    function OrderButton(){
        // selects all the buttons with class named items
        let orderBtn = document.querySelectorAll('.items');
        orderBtn.forEach((button=>{
            button.addEventListener("click", function(e) { if(button.innerHTML === 'Order Now'){
              button.innerText = 'Ordered';   
        }else{
            button.innerText = 'Order Now' // returns to order
        }}
        
        )} ))
    
        return orderBtn;
    };


// console.log(doubleEspresso())

// // Second Attempt: 
//     function doubleEspresso(){
//         // selects all the buttons with class named items
//         const orderButton = document.querySelector('.items');
        
//     //cafe.js:91 Uncaught TypeError: orderButton.forEach is not a function
//     // at doubleEspresso (cafe.js:91:21)
//         // Using for each button 

//orderButton.forEach(button => {
//             button.addEventListener('click',()=>{button.innerText = 'Ordered';})
          
//          })
//         return orderButton;
//     }


    // function driOrder(drinkType){
    //     const orderBtn=document.querySelector('.items');
    //     // const orderBtn2=document.querySelector('#drink2');
        
    //     if (orderBtn.innerText === 'Order Now' && drinkType === 'Double Espresso'){
    //         orderBtn.innerText = 'Ordered'
    //     }else{
    //         orderBtn.innerText = 'Order Now'
    //     }
        
    // }

    // console.log(driOrder('Double Espresso'))

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


// Login 
function loginFun(){
    const loginDiv = document.querySelector('.js-form').innerHTML= 'You got this';
    console.log(loginDiv);
    
}

// console.log(loginFun);


function confirmLogin(){
    let loginLol = document.forms['login']['login-name']['contact-form'].value;
    if (loginLol == ""){
        alert('Form must be filled');
        return false
    }
}



