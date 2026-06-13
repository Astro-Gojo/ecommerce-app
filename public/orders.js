async function loadOrders() {

    const response = await fetch("/orders");

    const orders = await response.json();

    let output = "";

    orders.forEach(order => {

        output += `
            <h3>Order #${order.id}</h3>

            <p>User: ${order.username}</p>

            <p>Product: ${order.name}</p>

            <p>Status: ${order.status}</p>

            <hr>
        `;
    });

    document.getElementById("orders").innerHTML = output;
}

loadOrders();