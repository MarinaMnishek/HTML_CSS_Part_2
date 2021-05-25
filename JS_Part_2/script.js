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
const renderProduct = (obj) => {
    return `<div class="item">
                <img class="item-img" src="${obj.img}">
                <a href="#"><h4 class="item-heading">${obj.title}</h4></a>
                <p class="item-text">${obj.text}</p>
                <p class="item-price">${obj.price} у.е.</p>
                <button class="buy-btn">Купить</button>
                
            </div> `


};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item));
    //console.log(productsList);
    document.querySelector('.fetured-items').innerHTML = productsList.join('');
};

renderPage(products);