$(document).ready(function () {
    if (localStorage.getItem("shoppingList")) {
        var savedList = JSON.parse(localStorage.getItem("shoppingList"));
        savedList.forEach(function (item) {
            addListItem(item);
        });
    }

    $("#add-button").click(function () {
        var newItem = $("#item").val();
        if (newItem.length > 0) {
            addListItem(newItem);
            saveListToStorage();
            $("#item").val("");
        }
    });

    $("#item").keyup(function (e) {
        if (e.code === "Enter") {
            $("#add-button").click();
        }
    });

    function addListItem(itemText) {
        var item = $("<li></li>").text(itemText);
        var deleteButton = $("<button></button>").text("delete");

        deleteButton.click(function () {
            $(this).parent().remove();
            saveListToStorage();
        });

        item.append(deleteButton);
        $("#shopping-list").append(item);
    }

    function saveListToStorage() {
        var listItems = [];
        $("#shopping-list li").each(function () {
            listItems.push($(this).text().replace('delete', '').trim());
        });
        localStorage.setItem("shoppingList", JSON.stringify(listItems));
    }
});

