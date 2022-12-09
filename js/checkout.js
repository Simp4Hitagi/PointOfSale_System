
let products = JSON.parse(localStorage.getItem('products')) ?
JSON.parse(localStorage.getItem('products')) : [
    {
        id: 1,
        productName: "Ramen",
        price: 33,
        img: "./assets/images/ramen1.jpg",
        description: "A delicious Japanese noodle dish consisting of Chinese-style wheat noodles. It is first recorded to have appeared in Yokohama Chinatown in the early 20th century",
        alt: "ramen"
    },
    {
        id: 2,
        productName: "Chow mein",
        price: 69,
        img: "./assets/images/chow-mein1.jpg",
        description: "A dish popular throughout the Chinese diaspora. Chow mein are noodles that have been stir-fried to mouthwatering tastiness",
        alt: "chow mein"
    },
    {
        id: 3,
        productName: "Pho",
        price: 42,
        img: "./assets/images/pho1.jpg",
        description: "A Vietnamese soup dish that consists of a nice broth , rice noodles and more. Also considered Vietnam's national dish.",
        alt: "pho"
    },
    {
        id: 4,
        productName: "Cincinnati Chile",
        price: 52,
        img: "./assets/images/cincinnati-chili1.jpg",
        description: "Big and tasty. Invented by Macedonian immigrants with Italian noodles and Mediterranean spices.",
        alt: "Cincinnati Chile"
    },
    {
        id: 5,
        productName: "Japchae",
        price: 74,
        img: "./assets/images/japchae1.webp",
        description: "A bit sweet and also savory, Japchae are often referred to as glass noodles do the transparency of the noodles.",
        alt: "japchae"
    }
    
];

let checkout = document.querySelectorAll('#checkout-products');
// save data
localStorage.setItem('checkoutProducts', JSON.stringify(products));

// check data
let x = JSON.parse(localStorage.getItem('checkoutProducts'));
console.table(x);

// display data on html
let checkoutItems = document.querySelector('#tbody-checkout');
(function show(){
    products.forEach((item)=>{
        checkoutItems.innerHTML += 
        `
            <td>${item.id}</td>
            <td>${item.productName}</td>
            <td>${item.price}</td>
        `
    })
}());

// ====

(function total() {
    let price = JSON.parse(localStorage.getItem('checkoutProducts'))
    
    const sum = price.reduce((accumulator, object) => {
        return accumulator + object.price;
    }, 0);
    console.log(sum);
    document.write(sum)
}());

let totalOutput = document.querySelector('#totalOutput');



// ====

function addStuff(event){
    event.preventDefault()
    let id =  document.querySelector('#id').value
    let productName = document.querySelector('#productName').value
    let price = document.querySelector('#price').value
    let obj={
        // input for id
        id ,
        productName  ,
        price   
    }
    
    products.push(obj);
    localStorage.setItem('products', JSON.stringify(products));
    // localStorage.removeItem('products');
}

// gives doc an ID and adds an addEventListener for ID using the function
// using ID to  link the addStuff()
// document.querySelector('#checkoutAdd').addEventListener('click', addStuff(event));



// let array = [];

// function append(item){
//     checkout.innerHTML += item;
//     array.push(item);
//     console.log(array);
//     while(array.includes(item)){
//         // array = [];
        
//         break;

//     }
// }





