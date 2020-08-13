let data = [
    {
        name: 'Gaming Mouse',
        price: 1000000,
        id: 1
    },
    {
        name: 'Monitor IPS 32 Inch',
        price: 2500000,
        id: 2
    },
    {
        name: 'Speaker JBL GO2',
        price: 725000,
        id: 3
    }
];

let cart = [];

function generateData() {
    let result = '';
  
    for (let i = 0; i < data.length; i++) {
        result += `<div class="row item">
            <div class="col-sm-10">
                <span id="productName">${data[i].name}</span> - IDR <span id="price">${data[i].price}</span>
            </div>
            <div class="col-sm-2 button-add">
                <div class="inner">
                    <a class="btn btn-primary" onclick="addCart(${data[i].id})">Add to Cart</a>
                </div>
            </div>
        </div>`;
    }
  
    document.getElementById('products').innerHTML = result;
    return result;
}

function addCart(id) {
    let result = data.find(element => element.id === id);

    cart.push(result);

    localStorage.setItem('productsInCart', JSON.stringify(cart));
}

function removeCart(indexToRemove) {
    let dataLS = JSON.parse(localStorage.getItem("productsInCart"));

    dataLS.splice(indexToRemove, 1);

    localStorage.setItem('productsInCart', JSON.stringify(dataLS));

    return getLocalStorage();
}

function getLocalStorage() {
    let result = '';
  
    let dataLS = JSON.parse(localStorage.getItem('productsInCart'));

    for (let i = 0; i < dataLS.length; i++) {
        result += `<div class="row item">
            <div class="col-sm-10">
                <span id="productName">${dataLS[i].name}</span> - IDR <span id="price">${dataLS[i].price}</span>
            </div>
            <div class="col-sm-2 button-add">
                <div class="inner">
                    <a class="btn btn-primary" onclick="removeCart(${i})">Remove Cart</a>
                </div>
            </div>
        </div>`;
    }
  
    document.getElementById('products').innerHTML = result;
    return result;
}

