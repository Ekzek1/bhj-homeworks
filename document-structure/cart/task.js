const products = document.querySelector('.products');
const cartProducts = document.querySelector('.cart__products');

products.addEventListener('click', function(e){
    let productActive = e.target.closest('.product');
// увеличиваем/уменьшаем товаров
    let productValue = productActive.querySelector('.product__quantity-value');
    let quantityDec = productActive.querySelector('.product__quantity-control_dec');
    let quantityInc = productActive.querySelector('.product__quantity-control_inc');

    if(e.target === quantityDec && productValue.textContent > 1){
        productValue.textContent -= 1;
    }
    if(e.target === quantityInc){
            productValue.textContent++
    }
    
//добавление товара в корзину
    let productImg = productActive.querySelector('.product__image');
    productImg = productImg.getAttribute('src');
    let productId = productActive.dataset.id;
    let productAdd = productActive.querySelector('.product__add');
    let cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    let cartProductIdCount = cartProduct.find(item => item.dataset.id === productId);

    if(cartProductIdCount && e.target === productAdd){
        cartProductIdCount = cartProductIdCount.querySelector('.cart__product-count');
        cartProductIdCount.textContent = +cartProductIdCount.textContent + +productValue.textContent
    }else if(e.target === productAdd){
            cartProducts.insertAdjacentHTML('afterBegin',` <div class="cart__product" data-id="${productId}">
            <img class="cart__product-image" src="${productImg}">
            <div class="cart__product-count">${productValue.textContent}</div>
        </div>`)
    }
})

function (e){
    let coin
}
// большое вам спасибо, что так тщательно проверяете, знаю что еще много ошибаюсь, но буду страться)