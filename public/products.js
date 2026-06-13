async function loadProducts() {

    const response = await fetch("/products");

    const products = await response.json();

    let output = "";

    products.forEach(product => {

        output += `
            <h3>${product.name}</h3>

            <p>Price: ₹${product.price}</p>

            <p>${product.description}</p>

            <button onclick="addToCart(${product.id})">
                Add To Cart
            </button>

            <hr>
        `;
    });

    document.getElementById("products").innerHTML = output;
}

async function addToCart(productId) {

    const response = await fetch("/cart/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            user_id: 5,
            product_id: productId
        })

    });

    const result = await response.text();

    alert(result);
}

loadProducts();