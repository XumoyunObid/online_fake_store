// document.addEventListener("DOMContentLoaded", async () => {
//     let { data: products } = await axios.get("https://fakestoreapi.com/products");

//     products.forEach((product) => {
//         let productsWrapper = document.querySelector("products");
//         let card = document.createElement("div");
//         card.classList.add("p-3");
//         productsWrapper.append(card);

//         let img = document.createElement("img");
//         img.setAttribute("src", product.img);
//     });
// });
document.addEventListener("DOMContentLoaded", async () => {
    let { data: products } = await axios.get("https://fakestoreapi.com/products");

    let productsWrapper = document.querySelector(".products");

    products.forEach((product) => {
        let card = document.createElement("div");
        card.classList.add("p-3", "card");
        productsWrapper.append(card);

        let img = document.createElement("img");
        img.setAttribute("src", product.image);
        // img.classList.add("img-fluid")
        card.append(img); 

        let name = document.createElement("p");
        name.innerText = "Name: " + product.title
        card.append(name);

        let category = document.createElement("p");
        category.innerText = "Category: " + product.category
        card.append(category)

        let price = document.createElement("span")
        price.innerText = "Price: " + "$" + product.price
        card.append(price)
    });

    let { data: carts } = await axios.get("https://fakestoreapi.com/carts");

    let container = document.querySelector(".container")

    let cart = document.createElement("div")
    container.append(cart)

    let about = document.createElement("h4")
    about.innerText = carts.products

});

