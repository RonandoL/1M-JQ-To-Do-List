$(document).ready(function() {
  // 7b. localStorage present on refresh
    $("#list-items").html(localStorage.getItem("listItems"));
  // 1. grab input
    $(".add-items").submit(function(event){
        event.preventDefault();

  // 2. put input up on page
        var item = $("#todo-list-item").val();
  // 6. stop blank <li> entries using (IF/else)
            if (item) {
  // 2. put input up on page
              $("#list-items").append("<li><input class='checkbox' type='checkbox'>" + item + "<a class='remove'>X</a><hr></li>");
  // 7a. save to localStorage
              localStorage.setItem("listItems", $("#list-items").html());
  // 3. clear value out of input field
              $("#todo-list-item").val("");
            }
    });

  // 4. CHECKBOX: make chackbox strikethrough text
    $(document).on("change", ".checkbox", function() {
  // 8. KEEP CHECKED/UNCHECKED
        if ($(this).attr("checked")) {  // IF it is checked??
            $(this).removeAttr("checked") // then remove the attribute
        } else {
            $(this).attr("checked", "checked");  // otherwise check the checked attrib.
        }

        $(this).parent().toggleClass("completed");
  // 7c. save to localStorage
        localStorage.setItem("listItems", $("#list-items").html());
  });

  // 5. DELETE ITEM: make x remove <li> item
    $(document).on("click", ".remove", function() {
        $(this).parent().remove();
  // 7d. save to localStorage
        localStorage.setItem("listItems", $("#list-items").html());
    });

});
