// select with click function


$("ul").on("click", "li" ,function (){

$(this).toggleClass("completed")

});

//click on X to delete

$("ul").on ("click", "span" ,function(event){

    $(this).parent().fadeOut(500,function() {

        $(this).remove ()   
   
   
       })
   
    event.stopPropagation()

    

});

$("input[type='text']").keypress (function (event){
if (event.which ===13) {
// gets the value of the text entered
    todoText = $(this).val()

    $(this).val ("");
// create a new li to add to the task list

$("ul").append (`<li id="el-${todoText.replace(' ', '_')}"><span><i class= "fa fa-trash"></i></span></li>`);
$(`#el-${todoText.replace(' ', '_')}`).append(' ' +todoText);


}

});

$(".fa-plus").click(function(){

    $("input[type='text']").fadeToggle()
})
