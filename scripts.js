$(document).ready(function() {
    // Προσθήκη νέου στοιχείου στη λίστα
    $("#add-button").click(function() {
        var newItem = $("#item").val();
        if (newItem.length > 0) {
            var item = $("<li></li>").text(newItem);
            var deleteButton = $("<button></button>").text("delete");
            
            // Ακρόαση για το κουμπί διαγραφής
            deleteButton.click(function() {
                $(this).parent().remove();  // Διαγραφή του li
            });
            
            item.append(deleteButton);
            $("#shopping-list").append(item);
            $("#item").val("");  // Καθαρισμός του input
        }
    });

    // Ακρόαση για την Enter key στο input
    $("#item").keyup(function(e) {
        if (e.code === "Enter") {
            $("#add-button").click();
        }
    });
});
