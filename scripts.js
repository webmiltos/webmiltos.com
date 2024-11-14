const addButton = document.querySelector("#add-button");
addButton.addEventListener("click", addItem);

const addedItem = document.querySelector('#item');
const shoppingList = document.querySelector('#shopping-list');

addedItem.addEventListener("keyup", (e) => {

    if (e.code === "Enter") { addItem(); }
})

function addItem() {
    console.log(addedItem.value);
    let newItem = addedItem.value;
    if (newItem.length > 0) {
        let item = document.createElement('li');
        item.style.width = "100%";
        item.style.maxWidth = "20em";
        item.style.fontSize = "1.2em";
        item.textContent = newItem;
        let itemButton = document.createElement('button');
        itemButton.textContent = 'delete'
        itemButton.addEventListener("click", deleteItem)
        item.appendChild(itemButton);
        shoppingList.appendChild(item);
        addedItem.value = "";

    }
}
