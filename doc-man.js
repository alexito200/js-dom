let products = [
    { name: "gaming monitor", price: 400, description: "the best OLED monitor on the market"},
    { name: "keyboard", price: 80, description: "the quietest keyboard you will never hear"},
    { name: "mouse", price: 50, description: "super lightweight with RGB lighting"}
];

function displayProducts() {
    const product = document.getElementById("container");

    products.forEach(item => {
        const div = document.createElement("div");
        div.textContent = `The product is a brand new ${item.name} priced at ${item.price} and it is ${item.description}`;
        product.appendChild(div);
    })
};

document.addEventListener('DOMContentLoaded', (event) => {
    const div = document.createElement("div");
    products.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.textContent = `The product is a brand new ${product.name} priced at ${product.price} and it is ${product.description}`;
        div.appendChild(productDiv);
    });

    document.body.appendChild(div);
});