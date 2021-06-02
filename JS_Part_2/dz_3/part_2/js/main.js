const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';


class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    // calcSum() {
    //     return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    // }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}


class ProductItem {
    constructor(product, img = 'https://computer34.ru/upload/nofoto.jpg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();


class Cart {
    constructor(container = '.cart') {
        this.container = container;
        this.cartGoods = [];
        this.getBasket()
            .then(data => {
                this.cartGoods = [...data.contents];
                this.amount = data.amount;
                this.countGoods = data.countGoods;
                this.render()
                this.totalPrice()

            })

    }
    getBasket() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const block = document.querySelector(this.container);
        const blockSum = document.createElement("p");
        blockSum.classList = "totalSum";
        block.append(blockSum);
        for (let product of this.cartGoods) {
            const productObj = new CartItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        blockSum.insertAdjacentHTML('afterBegin', `Общая стоимость: ${this.totalPrice()} $`);
    }

    totalPrice() {
        let sum = 0;
        console.log(this.cartGoods);
        for (let i = 0; i < this.cartGoods.length; i++) {
            sum += this.cartGoods[i].price;
        }
        return sum;
    }
}

class CartItem {
    constructor(product, img = 'https://computer34.ru/upload/nofoto.jpg') {
        this.title = product.product_name;
        this.price = product.price;
        this.quantity = product.quantity;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="cart-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="cart-item-text">
                        <h3>${this.title} </h3>
                        <p>Количество: ${this.quantity} </p>
                        <p> Цена: ${this.price} $</p>
                    </div>           
                </div>`

    }
}

let cartList = new Cart();