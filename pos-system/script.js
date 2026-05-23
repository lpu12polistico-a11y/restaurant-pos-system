let total = 0;

function addOrder(productName, price, quantityId){

    let quantity =
        parseInt(document.getElementById(quantityId).value);

    if(isNaN(quantity) || quantity <= 0){

        alert("Please enter quantity");
        return;
    }

    let orderedItems =
        document.getElementById("orderedItems");

    orderedItems.innerHTML += `

        <div class="item-box">

            <h2>${productName}</h2>

            <h4 class="qty-text">
                Qty: ${quantity}
            </h4>

        </div>

    `;

    total += price * quantity;

    document.getElementById("totalText").innerHTML =
        `Total: ${total} PHP`;
}

function payOrder(){

    let payment =
        parseInt(document.getElementById("payment").value);

    if(isNaN(payment)){

        alert("Please enter payment");
        return;
    }

    if(payment < total){

        alert("Insufficient payment");
        return;
    }

    let change = payment - total;

    alert(
        `Thanks for ordering! Here's your ${change} pesos change`
    );

    // RESET
    total = 0;

    document.getElementById("orderedItems").innerHTML = "";

    document.getElementById("totalText").innerHTML =
        "Total:";

    document.getElementById("payment").value = "";
}