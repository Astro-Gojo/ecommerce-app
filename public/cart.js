async function loadCart() {

    const response = await fetch("/cart");

    const cartItems = await response.json();

    let output = "";

    cartItems.forEach(item => {

        output += `
            <h3>${item.name}</h3>

            <p>Price: ₹${item.price}</p>

            <button onclick="removeFromCart(${item.id})">
                Remove
            </button>

            <hr>
        `;
    });

    document.getElementById("cart").innerHTML = output;
}

async function removeFromCart(cartId) {

    const response = await fetch(`/cart/delete/${cartId}`, {

        method: "DELETE"

    });

    const result = await response.text();

    alert(result);

    loadCart();
}

loadCart();