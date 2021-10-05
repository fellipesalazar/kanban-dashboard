// call all functions
$(function(){
    enableSortableprojects();
    openDropdownMenu(".user-info span",".user-info .dropdown-menu",".user-info *");
    openDropdownMenu(".notifications ion-icon",".notifications .dropdown-menu",".notifications *");
    // enableActiveScroll();
});


// sortable effect
function enableSortableprojects(){
    $(".project-list").sortable({
        connectWith: ".project-list",
        placeholder: "ui-state-highlight",
        cursor: "grabbing",
        classes: {
            "ui-sortable-helper": "grab"
        },
        dropOnEmpty: true
    }).disableSelection();
}

// open dropdow menu
function openDropdownMenu(toggle, menu, target){
    $(toggle).click(function(){
        $(menu).fadeToggle(250);
    });
    $("body").click(function(e){
        var condition = $(e.target).is($(target));
        if(!condition){
            $(menu).fadeOut(250);
        }
    });
}

// // scroll effects
// function enableActiveScroll(){
//     $(window).scroll(function(){
//         if($(this).scrollTop() > 10){
//             $("header,.content").addClass("active");
//             return;
//         }
//         $("header,.content").removeClass("active");
//     });
// }