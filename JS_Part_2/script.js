const products = [
    {
        id: 1,
        img: '../img/item_1.jpg',
        title: 'ELLERY X MO CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter        of cool Kym Ellery teams up with Moda Operandi.',
        price: 2000
    },
    {
        id: 2,
        img: '../img/item_2.jpg',
        title: 'ELLERY X MO CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter        of cool Kym Ellery teams up with Moda Operandi.',
        price: 100
    },
    {
        id: 3,
        img: '../img/item_3.jpg',
        title: 'ELLERY X MO CAPSULE',
        text: 'Known for her sculptural takes on traditional tailoring, Australian arbiter        of cool Kym Ellery teams up with Moda Operandi.',
        price: 30
    }

];
//Функция для формирования верстки каждого товара
const renderProduct = (img, title, text, price) => {
    // return `<div class="item">
    //             <h3>${title}</h3>
    //             <p>${price}</p>
    //             <button class="buy-btn">Купить</button>
    //         </div>`
    return `<div class="item">
                <img class="item-img" src="${img}">
                <a href="#"><h4 class="item-heading">${title}</h4></a>
                <p class="item-text">${text}</p>
                <p class="item-price">${price}</p>
                <button class="buy-btn">Купить</button>
                
            </div> `


};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.img, item.title, item.text, item.price));
    //console.log(productsList);
    document.querySelector('.fetured-items').innerHTML = productsList;
};

renderPage(products);