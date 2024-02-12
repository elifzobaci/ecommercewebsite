window.onload=function(){
    let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
    document.getElementById('cartItemCount').innerHTML = basket;
    document.getElementById('mobileCartItemCount').innerHTML = basket;

}
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click', () =>{
        nav.classList.add('active');

    })
}
if(close){
    close.addEventListener('click', () =>{
        nav.classList.remove('active');

    })
}
const form = document.querySelector('.customerinfo');
const message = document.querySelector('.message');
const message1 = document.querySelector('.message1');
const message2 = document.querySelector('.message2');
const message3 = document.querySelector('.message3');
const message4 = document.querySelector('.message4');
const usernamePattern = /^[a-zA-Z]{3,10}$/;
const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
const messagePattern = /^[a-zA-Z0-9\s,.!?()-]{1,}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    const firstname = form.firstname.value;
    const lastname = form.lastname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;
    console.log(firstname);
    if (usernamePattern.test(firstname)) {
        message.textContent = 'OK!';
    } else {
        message.textContent = 'Please enter your name 3 to 10 letters';
    }
    if (usernamePattern.test(lastname)) {
        message1.textContent = 'OK!';
    } else {
        message1.textContent = 'Please enter your lastname 3 to 10 letters';
    }
    if (emailPattern.test(email)) {
        message2.textContent = 'OK!';
    } else {
        message2.textContent = 'Please enter your email valid format';
    }
    if (phonePattern.test(phone)) {
        message3.textContent = 'OK!';
    } else {
        message3.textContent = 'Please enter your phone number valid format';
    }
    if (messagePattern.test(message)) {
        message4.textContent = 'OK!';
    } else {
        message4.textContent = 'Please enter your message valid format';
    }
});

// tusa basip elini cektiginde key up 
// key down tusa basilma ani

form.firstname.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        form.firstname.setAttribute('class', 'success');
    } else {
        console.log('Basarisiz');
        form.firstname.setAttribute('class', 'error');
    }
});


form.lastname.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        form.lastname.setAttribute('class', 'success');
    } else {
        console.log('Basarisiz');
        form.lastname.setAttribute('class', 'error');
    }
});

form.email.addEventListener('keyup', e => {
    if (emailPattern.test(e.target.value)) {
        form.email.setAttribute('class', 'success');
    } else {
        console.log('Basarisiz');
        form.email.setAttribute('class', 'error');
    }
});
form.phone.addEventListener('keyup', e => {
    if (phonePattern.test(e.target.value)) {
        form.phone.setAttribute('class', 'success');
    } else {
        console.log('Basarisiz');
        form.phone.setAttribute('class', 'error');
    }
});

form.message.addEventListener('keyup', e => {
    if (messagePattern.test(e.target.value)) {
        form.message.setAttribute('class', 'success');
    } else {
        console.log('Basarisiz');
        form.message.setAttribute('class', 'error');
    }
});
const contactForm = document.querySelector('.custcon');
contactForm.fname.addEventListener('keyup', e => {
    if (usernamePattern.test(e.target.value)) {
        contactForm.fname.setAttribute('class', 'success');
        contactForm.fname.classList.remove('error');
        contactForm.fname.classList.add('success');
    } else {
        contactForm.fname.classList.remove('success');
        contactForm.fname.classList.add('error');
    }
});

 function addToCart() {
    let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage
    var size = document.getElementById('selectSize')
    // Mevcut sepet miktarını al
    var cartItemCount = parseInt(document.getElementById('cartItemCount').innerHTML, 10) || 0;
    var mobileCartItemCount = parseInt(document.getElementById('mobileCartItemCount').innerHTML,10) ||0;
    var quantityInput = document.getElementById('quantityInput');
    var quantityValue = parseInt(quantityInput.value, 10) || 0;
        // Check if a size is selected
        if (size.value === 'Select Size') {
            alert('Please select a size before adding the product to the cart.');
            size.classList.add('error');
            return; // Stop further execution if size is not selected
        } else {
            size.classList.remove('error');
        }
    
    console.log('Quantity:', quantityValue);
    cartItemCount=basket;
    mobileCartItemCount =basket;
    // Mevcut sepet miktarına yeni miktarı ekle
    cartItemCount += quantityValue;
    mobileCartItemCount += quantityValue;

    console.log('cartitem:', cartItemCount);
    
    // Sepet miktarını güncelle
    document.getElementById('cartItemCount').innerHTML = cartItemCount;
    document.getElementById('mobileCartItemCount').innerHTML = mobileCartItemCount;
    localStorage.setItem('basket', JSON.stringify(cartItemCount));
    localStorage.setItem('basket', JSON.stringify(mobileCartItemCount));

    alert(`The product has been added to the cart! Amount of products added to the cart: ${quantityValue}`);
}

 function addToCartWithoutSize(){
    let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage

    // Mevcut sepet miktarını al
    var cartItemCount = parseInt(document.getElementById('cartItemCount').innerHTML, 10) || 0;
    var mobileCartItemCount = parseInt(document.getElementById('mobileCartItemCount').innerHTML, 10) || 0;
    var quantityInput = document.getElementById('quantityInput');
    var quantityValue = parseInt(quantityInput.value, 10) || 0;
    
    console.log('Quantity:', quantityValue);
    cartItemCount=basket;
    mobileCartItemCount = basket;
    // Mevcut sepet miktarına yeni miktarı ekle
    cartItemCount += quantityValue;
    mobileCartItemCount += quantityValue;

    console.log('cartitem:', cartItemCount);
    
    // Sepet miktarını güncelle
    document.getElementById('cartItemCount').innerHTML = cartItemCount;
    document.getElementById('mobileCartItemCount').innerHTML = mobileCartItemCount;
    localStorage.setItem('basket', JSON.stringify(cartItemCount));
    localStorage.setItem('basket', JSON.stringify(mobileCartItemCount));
    alert(`The product has been added to the cart! Amount of products added to the cart: ${quantityValue}`);
 }

 function AddToCartOneProduct() {
    alert(`The product has been added to the cart! Amount of products added to the cart: 1`);
    let basket = JSON.parse(localStorage.getItem('basket'));   // Parse data from localstorage


    var cartItemCount = parseInt(localStorage.getItem('cartItemCount'), 10) || 0;
    var mobileCartItemCount = parseInt(localStorage.getItem('mobileCartItemCount'), 10) || 0;
    cartItemCount=basket;
    mobileCartItemCount = basket;
    cartItemCount += 1;
    mobileCartItemCount += 1;

    document.getElementById('cartItemCount').innerHTML = cartItemCount;
    document.getElementById('mobileCartItemCount').innerHTML = mobileCartItemCount;
    localStorage.setItem('basket', JSON.stringify(cartItemCount));
    localStorage.setItem('basket', JSON.stringify(mobileCartItemCount));
}

function youShouldChooseSizeAlert(){
    alert(`To buy this product you should choose the products size. Please click on the products picture and choose the size`);
}

 
 