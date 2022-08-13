const itemsEl = document.getElementById('itemsContainer');
const addBtn = document.getElementsByClassName('addButton');
const cartEl = document.getElementById('shoppingCart');
const priceEl = document.getElementById('total-price');
const items = [
    {name: "Milk", price: 25},
    {name: "Egg", price: 6},
    {name: "Bread", price: 40},
    {name: "Cheese", price: 100},
    {name: "Butter", price: 45}
]
const itemsCart = [];
let totalPrice = 0;
function render(){
    let itemsHTML = ""
    for(let item  of items){
    itemsHTML += `
        <div class="itemElement">
            <p>${item.name} Rs <span>${item.price}</span></p>
            <button class="addButton" data-id="${items.indexOf(item)}">+</button>
        </div>`
    }
    itemsEl.innerHTML = itemsHTML;
}
function renderCartItems(){
    let cartItemsHTML = "";
    for(let itemCart  of itemsCart){
        cartItemsHTML += `
            <div class="itemElement">
                <p>${itemCart.name} Rs <span>${itemCart.price}</span></p>
                <button class="minusButton" data-id="${itemsCart.indexOf(itemCart)}">-</button>
            </div>`
        }
        cartEl.innerHTML = cartItemsHTML;
        const minusBtn = document.getElementsByClassName('minusButton');
        Array.from(minusBtn).forEach(mbtn => {
            mbtn.addEventListener('click', function(event){
                const removeItem = event.target.dataset.id
                totalPrice -= itemsCart[removeItem].price;
                itemsCart.splice(removeItem, 1);
                this.parentElement.style.display = "none";
                priceEl.innerHTML = `Total Price : Rs ${totalPrice}`
            })
        })
}

render();
Array.from(addBtn).forEach(btn => {
    btn.addEventListener('click', function(event){
        const itemId = event.target.dataset.id;
        itemsCart.push(items[itemId])
        renderCartItems();
        totalPrice += items[itemId].price;
        priceEl.innerHTML = `Total Price : Rs ${totalPrice}`
    })
})




