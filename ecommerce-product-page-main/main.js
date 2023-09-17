/**
 * 12/09/2023 by Joicemar .S. Morais
 */
let quantity = document.getElementById('quantity_selected');
let product_price = 125;

const card_svg = document.querySelector('.card_svg');
card_svg.onclick = () => {
    card_svg.classList.toggle('open');
}

/**
 * Close the cart when cliqued outside
 */
document.addEventListener('click', () => {
    let element = document.querySelector('.cart_products');

    if (!element.contains(event.target) && card_svg.classList.contains('open')
        && !card_svg.contains(event.target)) {
        card_svg.classList.remove('open');
    }
});


function add_qty() {
    let value = parseInt(quantity.innerText); // Converte o valor em um número inteiro
    if (value < 12) {
        value += 1;
        quantity.innerText = value; // Atualiza o texto do elemento com o novo valor
    }
}

function remove_qty() {
    let value = parseInt(quantity.innerText); // Converte o valor em um número inteiro
    if (value > 0) {
        value -= 1;
        quantity.innerText = value; // Atualiza o texto do elemento com o novo valor
    }
}

function add_to_cart() {
    if (parseInt(quantity.innerText) > 0) {
        removeAlertCart();
        addProducts();
        addValue();
        checkQuantity();
    } else {
        removeProduct();
        alertEmpetyCart();
    }
}

function addProducts() {
    let products = document.querySelector('.card_space');
    products.style.display = 'block';
}


function removeProduct() {
    let products = document.querySelector('.card_space');
    products.style.display = 'none';
    msg_quantity.innerText = 0;
    checkQuantity();
    alertEmpetyCart();
}

function checkQuantity() {
    if (parseInt(msg_quantity.innerText) === 0) {
        msg_quantity.style.display = 'none';
    } else {
        msg_quantity.style.display = 'block';
    }
}

let msg_quantity = document.getElementById('alertProduct');//Alert cart quantity

function addValue() {
    let value = document.getElementById('text_value');
    let totalValue = document.getElementById('negrito');
    let totalValueCalc = parseInt(quantity.innerText) * parseInt(product_price);
    msg_quantity.innerText = parseInt(quantity.innerText);

    value.innerText = `$${product_price} x ${parseInt(quantity.innerText)}`;
    totalValue.innerText = `$${totalValueCalc}`;

}

function alertEmpetyCart() {
    document.querySelector('.cart_empty').style.display = "flex";
}

function removeAlertCart() {
    document.querySelector('.cart_empty').style.display = "none";
}

/*---------------Imagens---------------*/
function changeImage() {
    //let img = document.querySelector('.img_banner img');
    //img.setAttribute("src", fileName);
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });
    light_slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${100 * (curSlide)}%)`;
    });

    /*------------------Part 2---------------*/
    // Remove a classe 'active' de todos os elementos da lista
    const elements = document.querySelectorAll('.img_option');
    elements.forEach(element => {
        element.classList.remove('active');
    });
    // Adiciona a classe 'active' ao elemento clicado
    const clickedElement = event.currentTarget;
    clickedElement.classList.add('active');

    /**Add 'active' in similar index from element options*/
    changeImgOption();
}

let lightbox = document.querySelector('.lightbox');
let imgSlide = document.querySelector('.img_banner');
let close = document.querySelector('.close');

imgSlide.addEventListener('click', ()=>{
    lightbox.classList.add('open_lightbox');
});

close.addEventListener('click', ()=>{
    lightbox.classList.remove('open_lightbox');
});
