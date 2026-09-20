const cartProducts = document.querySelector('.cart__products');

document.querySelectorAll('.product').forEach(productElement => {
  const productQuantityValue = productElement.querySelector('.product__quantity-value');

  productElement.querySelector('.product__quantity-control_dec').addEventListener('click', () => {
    if (productQuantityValue.innerText > 1 ){
      productQuantityValue.innerText--;
    }
  });

  productElement.querySelector('.product__quantity-control_inc').addEventListener('click', () => {
    productQuantityValue.innerText++;
  });

  productElement.querySelector('.product__add').addEventListener('click', () => {
    const productId = productElement.dataset.id;
    const foundProduct = Array.from(cartProducts.children).find(prouctInCart => productInCart.dataset.id === productId);
    if (foundProduct) {
      const countElement = foundProduct.querySelector('.cart__product-count');
      countElement.innerText = Number(countElement.innerText) + Number(productQuantityValue.innerText);
    } else {
      const productImageSrc = productElement.querySelector('img').src;
      cartProducts.insertAdjacentHTML('beforeend', `<div class="cart__product" data-id="${productId}">
                <img class="cart__product-image" src="${productImageSrc}">
                <div class="cart__product-count">${productQuantityValue.innerText}</div>
            </div>`);
    }
  });  
})