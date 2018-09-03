// Check off specific todos by clicking
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");
});

// Delete a todo item
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// Add todo
$("input[type='text']").keypress(function(keyPressed){
    if(keyPressed.which === 13){
        // grab new todo text from input
        var todoText = $(this).val();
        // clear input
        $(this).val("");
        // create new li and add to ul
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
    }
});