document.addEventListener("DOMContentLoaded", function(){
    //Nav Menu
    const menus = document.querySelector(".side-menu");
    M.Sidenav.init(menus, {edge: "right"});
    //Add Tasks
    const forms = document.querySelector(".side-form");
    M.Sidenav.init(forms, {edge: "left"});
    //Date Picker
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems, options);
    instance.open();
    //CAlendar
   

    
    
});